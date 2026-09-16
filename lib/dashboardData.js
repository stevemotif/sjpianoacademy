// lib/dashboardData.js — fee/revenue aggregation for the /dashboard page
//
// "Unpaid this month" is derived, not stored: pianostudents has no per-month
// payment record, so an active student counts as unpaid unless a Paid invoice
// with feepaiddate in the current month matches their email.

import { getDb } from './mongodb'

const RECENT_PAYMENTS_LIMIT = 10
const YEAR_OPTIONS_BACK = 4 // selectable years: current year and the 4 before it

function normEmail(email) {
  return (email || '').trim().toLowerCase()
}

function toAmount(value) {
  const n = parseFloat(value)
  return Number.isFinite(n) ? n : 0
}

function isActiveStatus(status) {
  return (status || '').trim().toLowerCase() === 'active'
}

function monthRange(year, month) {
  return {
    start: new Date(year, month, 1, 0, 0, 0, 0),
    end: new Date(year, month + 1, 1, 0, 0, 0, 0),
  }
}

function isPaidInRange(invoice, start, end) {
  if (invoice.paymentstatus !== 'Paid' || !invoice.feepaiddate) return false
  const paidAt = new Date(invoice.feepaiddate)
  return paidAt >= start && paidAt < end
}

function invoiceTotal(invoice) {
  return toAmount(invoice.totalamount) + toAmount(invoice.tax)
}

export async function getDashboardData(selectedYear) {
  const db = await getDb()
  const [students, invoices] = await Promise.all([
    db.collection('pianostudents').find().toArray(),
    db.collection('invoices').find().sort({ feepaiddate: -1 }).toArray(),
  ])

  const now = new Date()
  const currentYear = now.getFullYear()
  const year = Number.isInteger(selectedYear) ? selectedYear : currentYear
  const { start: monthStart, end: monthEnd } = monthRange(currentYear, now.getMonth())

  const activeStudents = students.filter((s) => isActiveStatus(s.Status))

  const paidInvoicesThisMonth = invoices.filter((inv) => isPaidInRange(inv, monthStart, monthEnd))
  const paidEmailsThisMonth = new Set(paidInvoicesThisMonth.map((inv) => normEmail(inv.students?.email)))

  const earnedThisMonth = paidInvoicesThisMonth.reduce((sum, inv) => sum + invoiceTotal(inv), 0)

  const paidStudentsThisMonth = activeStudents.filter((s) => paidEmailsThisMonth.has(normEmail(s.email)))

  const unpaidStudents = activeStudents
    .filter((s) => !paidEmailsThisMonth.has(normEmail(s.email)))
    .map((s) => ({
      name: s.studentname,
      parentName: s.ParentName || '—',
      email: s.email,
      timeslot: s.timeslot || '—',
      amount: toAmount(s.amount),
      hasAmount: Boolean(s.amount),
      onVacation: Boolean(s.Vacation),
    }))
    .sort((a, b) => b.amount - a.amount)

  const expectedMonthlyRevenue = activeStudents.reduce((sum, s) => sum + toAmount(s.amount), 0)
  const outstandingThisMonth = unpaidStudents.reduce((sum, s) => sum + s.amount, 0)

  const prevMonthAnchor = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const { start: prevStart, end: prevEnd } = monthRange(prevMonthAnchor.getFullYear(), prevMonthAnchor.getMonth())
  const earnedPrevMonth = invoices
    .filter((inv) => isPaidInRange(inv, prevStart, prevEnd))
    .reduce((sum, inv) => sum + invoiceTotal(inv), 0)

  const momDelta = earnedPrevMonth > 0 ? ((earnedThisMonth - earnedPrevMonth) / earnedPrevMonth) * 100 : null

  const annualTrend = []
  for (let month = 0; month < 12; month++) {
    const { start, end } = monthRange(year, month)
    const value = invoices
      .filter((inv) => isPaidInRange(inv, start, end))
      .reduce((sum, inv) => sum + invoiceTotal(inv), 0)
    annualTrend.push({
      label: start.toLocaleString('en-US', { month: 'short' }),
      year,
      value,
      isCurrent: year === currentYear && month === now.getMonth(),
    })
  }
  const annualTotal = annualTrend.reduce((sum, m) => sum + m.value, 0)

  const availableYears = Array.from({ length: YEAR_OPTIONS_BACK + 1 }, (_, i) => currentYear - i)

  const allTimeRevenue = invoices
    .filter((inv) => inv.paymentstatus === 'Paid')
    .reduce((sum, inv) => sum + invoiceTotal(inv), 0)

  const recentPayments = paidInvoicesThisMonth.slice(0, RECENT_PAYMENTS_LIMIT).map((inv) => ({
    name: inv.students?.name || 'Unknown',
    email: inv.students?.email || '',
    amount: invoiceTotal(inv),
    date: inv.feepaiddate,
    invoiceNumber: inv.invoicenumber,
  }))

  return {
    generatedAt: now.toISOString(),
    monthLabel: now.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
    kpis: {
      earnedThisMonth,
      momDelta,
      paidCount: paidStudentsThisMonth.length,
      activeCount: activeStudents.length,
      unpaidCount: unpaidStudents.length,
      outstandingThisMonth,
      expectedMonthlyRevenue,
      allTimeRevenue,
    },
    selectedYear: year,
    availableYears,
    annualTrend,
    annualTotal,
    unpaidStudents,
    recentPayments,
  }
}
