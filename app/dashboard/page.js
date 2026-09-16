import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { COOKIE_NAME, verifySessionToken } from '@/lib/auth'
import { getDashboardData } from '@/lib/dashboardData'
import { formatCurrency, formatDate } from '@/lib/format'
import RevenueChart from './RevenueChart'
import LogoutButton from './LogoutButton'
import YearSelect from './YearSelect'

export const dynamic = 'force-dynamic'

function StatTile({ label, value, sub, subColor }) {
  return (
    <div className="card p-6 border border-navy/10">
      <p className="font-body text-xs uppercase tracking-wider text-muted mb-2">{label}</p>
      <p className="font-body text-3xl font-semibold text-navy leading-none mb-2">{value}</p>
      {sub && (
        <p className="font-body text-xs" style={{ color: subColor || '#6B6B6B' }}>
          {sub}
        </p>
      )}
    </div>
  )
}

export default async function DashboardPage({ searchParams }) {
  const cookieStore = cookies()
  const token = cookieStore.get(COOKIE_NAME)?.value
  if (!verifySessionToken(token)) {
    redirect('/dashboard/login')
  }

  const requestedYear = parseInt(searchParams?.year, 10)
  const data = await getDashboardData(Number.isInteger(requestedYear) ? requestedYear : undefined)
  const { kpis, unpaidStudents, recentPayments, selectedYear, availableYears, annualTrend, annualTotal } = data

  const deltaKnown = kpis.momDelta !== null
  const deltaUp = deltaKnown && kpis.momDelta >= 0
  const deltaColor = !deltaKnown ? '#6B6B6B' : deltaUp ? '#006300' : '#d03b3b'
  const paidRatio = kpis.activeCount > 0 ? (kpis.paidCount / kpis.activeCount) * 100 : 0

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl text-navy mb-1">Fee Dashboard</h1>
            <p className="font-body text-sm text-muted">
              {data.monthLabel} · updated {formatDate(data.generatedAt)}
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatTile
            label="Earned this month"
            value={formatCurrency(kpis.earnedThisMonth)}
            sub={
              deltaKnown
                ? `${deltaUp ? '▲' : '▼'} ${Math.abs(kpis.momDelta).toFixed(0)}% vs last month`
                : 'No data for last month'
            }
            subColor={deltaColor}
          />
          <StatTile
            label="Payments received"
            value={`${kpis.paidCount} / ${kpis.activeCount}`}
            sub={`${paidRatio.toFixed(0)}% of active students paid`}
          />
          <StatTile
            label="Outstanding this month"
            value={formatCurrency(kpis.outstandingThisMonth)}
            sub={
              kpis.unpaidCount === 0
                ? 'Everyone is paid up'
                : `${kpis.unpaidCount} student${kpis.unpaidCount === 1 ? '' : 's'} unpaid`
            }
            subColor={kpis.unpaidCount === 0 ? '#006300' : '#d03b3b'}
          />
          <StatTile
            label="Active students"
            value={kpis.activeCount}
            sub={`${formatCurrency(kpis.expectedMonthlyRevenue)} expected / month`}
          />
        </div>

        {/* Revenue trend */}
        <div className="card p-6 border border-navy/10 mb-8">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h2 className="font-display text-xl text-navy">Revenue Trend</h2>
              <p className="font-body text-xs text-muted">Paid invoices, {selectedYear}</p>
            </div>
            <YearSelect years={availableYears} selected={selectedYear} />
          </div>
          <RevenueChart trend={annualTrend} />

          {/* Payments received meter */}
          <div className="mt-8 pt-6 border-t border-navy/10">
            <div className="flex items-center justify-between mb-2">
              <p className="font-body text-xs uppercase tracking-wider text-muted">This month's collection progress</p>
              <p className="font-body text-xs text-navy font-semibold">{paidRatio.toFixed(0)}%</p>
            </div>
            <div className="h-2 bg-ivory-dark rounded-full overflow-hidden">
              <div
                className="h-full bg-navy rounded-full transition-all"
                style={{ width: `${Math.min(paidRatio, 100)}%` }}
              />
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-navy/10 flex flex-wrap gap-x-8 gap-y-2">
            <p className="font-body text-xs text-muted">
              {selectedYear} total: <span className="text-navy font-semibold">{formatCurrency(annualTotal)}</span>
            </p>
            <p className="font-body text-xs text-muted">
              All-time collected: <span className="text-navy font-semibold">{formatCurrency(kpis.allTimeRevenue)}</span>
            </p>
          </div>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Unpaid students */}
          <div className="card border border-navy/10">
            <div className="p-6 pb-4 flex items-center gap-2">
              <AlertCircle size={16} className="text-[#d03b3b]" />
              <h2 className="font-display text-xl text-navy">
                Didn&apos;t Pay This Month {unpaidStudents.length > 0 && `(${unpaidStudents.length})`}
              </h2>
            </div>
            {unpaidStudents.length === 0 ? (
              <p className="font-body text-sm text-muted px-6 pb-6">
                All active students have paid for {data.monthLabel}.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-t border-navy/10 text-muted">
                      <th className="font-body text-xs uppercase tracking-wider font-medium px-6 py-2">Student</th>
                      <th className="font-body text-xs uppercase tracking-wider font-medium px-6 py-2">Timeslot</th>
                      <th className="font-body text-xs uppercase tracking-wider font-medium px-6 py-2 text-right">Owed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unpaidStudents.map((s) => (
                      <tr key={s.email + s.name} className="border-t border-navy/10">
                        <td className="px-6 py-3">
                          <p className="font-body text-sm text-charcoal font-medium">{s.name}</p>
                          <p className="font-body text-xs text-muted">{s.parentName}</p>
                          {s.onVacation && (
                            <span className="inline-block mt-1 font-body text-[10px] uppercase tracking-wider text-[#B8962E] bg-gold/10 px-1.5 py-0.5 rounded">
                              On vacation
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-3 font-body text-sm text-muted whitespace-nowrap">{s.timeslot}</td>
                        <td className="px-6 py-3 font-body text-sm text-right font-semibold whitespace-nowrap" style={{ color: '#d03b3b' }}>
                          {s.hasAmount ? formatCurrency(s.amount) : 'No fee set'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Recent payments */}
          <div className="card border border-navy/10">
            <div className="p-6 pb-4 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#0ca30c]" />
              <h2 className="font-display text-xl text-navy">Recent Payments</h2>
            </div>
            {recentPayments.length === 0 ? (
              <p className="font-body text-sm text-muted px-6 pb-6">No payments recorded yet this month.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-t border-navy/10 text-muted">
                      <th className="font-body text-xs uppercase tracking-wider font-medium px-6 py-2">Student</th>
                      <th className="font-body text-xs uppercase tracking-wider font-medium px-6 py-2">Date</th>
                      <th className="font-body text-xs uppercase tracking-wider font-medium px-6 py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPayments.map((p) => (
                      <tr key={p.invoiceNumber} className="border-t border-navy/10">
                        <td className="px-6 py-3">
                          <p className="font-body text-sm text-charcoal font-medium">{p.name}</p>
                          <p className="font-body text-xs text-muted">{p.email}</p>
                        </td>
                        <td className="px-6 py-3 font-body text-sm text-muted whitespace-nowrap">{formatDate(p.date)}</td>
                        <td className="px-6 py-3 font-body text-sm text-right font-semibold text-navy whitespace-nowrap">
                          {formatCurrency(p.amount)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
