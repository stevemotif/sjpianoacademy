'use client'

import { useState, useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/lib/data'

function generateCaptcha() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  const ops = ['+', '−']
  const op = ops[Math.floor(Math.random() * ops.length)]
  const answer = op === '+' ? a + b : a - b
  return { question: `${a} ${op} ${b}`, answer }
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    captcha: '',
  })
  const [errors, setErrors] = useState({})
  const [captcha, setCaptcha] = useState(null)
  const [status, setStatus] = useState(null) // 'success' | 'error'
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setCaptcha(generateCaptcha())
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.subject) e.subject = 'Please select a subject.'
    if (!form.message.trim()) e.message = 'Message is required.'
    if (!form.captcha.trim()) e.captcha = 'Please solve the equation.'
    else if (parseInt(form.captcha) !== captcha?.answer) e.captcha = 'Incorrect answer. Please try again.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', subject: '', message: '', captcha: '' })
      setCaptcha(generateCaptcha())
    } catch (err) {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha())
    setForm((prev) => ({ ...prev, captcha: '' }))
    setErrors((prev) => ({ ...prev, captcha: undefined }))
  }

  return (
    <>
      {/* ── HEADER ────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/78" />
        <div className="relative max-w-6xl mx-auto px-6 text-ivory">
          <span className="font-body text-[11px] tracking-[0.35em] uppercase text-gold font-semibold block mb-4">
            Get in Touch
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-light leading-tight">
            Contact<br />
            <em className="italic">Us</em>
          </h1>
        </div>
      </section>

      {/* ── CONTENT ───────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">

          {/* ── CONTACT INFO ──────────────────────── */}
          <div className="md:col-span-2">
            <span className="gold-line mb-5" />
            <h2 className="font-display text-4xl font-light text-navy mb-4 leading-snug">
              We'd Love to<br />Hear from You
            </h2>
            <p className="font-body text-muted text-sm leading-relaxed mb-10">
              Whether you're enquiring about a class, joining our waiting list, or simply
              want to learn more about SJ Piano Academy — we're here to help.
            </p>

            <ul className="space-y-7">
              <li className="flex gap-4">
                <div className="w-9 h-9 bg-ivory-dark flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-muted font-semibold mb-1">
                    Studio Address
                  </div>
                  <address className="font-body text-sm text-charcoal not-italic leading-relaxed">
                    {siteConfig.address}
                  </address>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-9 h-9 bg-ivory-dark flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-muted font-semibold mb-1">
                    Phone
                  </div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-body text-sm text-charcoal hover:text-gold transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-9 h-9 bg-ivory-dark flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-muted font-semibold mb-1">
                    Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-body text-sm text-charcoal hover:text-gold transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-9 h-9 bg-ivory-dark flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold" />
                </div>
                <div>
                  <div className="font-body text-[10px] tracking-widest uppercase text-muted font-semibold mb-1">
                    Studio Hours
                  </div>
                  <div className="font-body text-sm text-charcoal leading-relaxed">
                    Mon – Fri: 10:00 am – 8:00 pm<br />
                    Saturday: 9:00 am – 5:00 pm<br />
                    Sunday: Closed
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* ── FORM ──────────────────────────────── */}
          <div className="md:col-span-3">
            {status === 'success' ? (
              <div className="bg-white border border-ivory-dark p-12 text-center">
                <CheckCircle size={48} className="text-gold mx-auto mb-5" />
                <h3 className="font-display text-3xl font-light text-navy mb-3">
                  Message Received!
                </h3>
                <p className="font-body text-muted text-sm leading-relaxed mb-6">
                  Thank you for reaching out to SJ Piano Academy. We'll get back
                  to you within 1–2 business days.
                </p>
                <button
                  onClick={() => setStatus(null)}
                  className="btn-outline text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 font-body text-sm p-4 flex items-center gap-2">
                    <AlertCircle size={15} />
                    Something went wrong sending your message. Please try again, or email us directly at {siteConfig.email}.
                  </div>
                )}
                {/* Name & Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[11px] tracking-widest uppercase text-charcoal font-semibold block mb-1.5">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={`form-input ${errors.name ? 'border-red-400' : ''}`}
                    />
                    {errors.name && (
                      <p className="font-body text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-body text-[11px] tracking-widest uppercase text-charcoal font-semibold block mb-1.5">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`form-input ${errors.email ? 'border-red-400' : ''}`}
                    />
                    {errors.email && (
                      <p className="font-body text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[11px] tracking-widest uppercase text-charcoal font-semibold block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(416) 555-0000"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="font-body text-[11px] tracking-widest uppercase text-charcoal font-semibold block mb-1.5">
                      Subject <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={`form-select ${errors.subject ? 'border-red-400' : ''}`}
                      >
                        <option value="">— Select a subject —</option>
                        <option value="enquiry">Enquiry for Piano Class</option>
                        <option value="waitlist">Waiting List Form</option>
                      </select>
                      <ChevronDown
                        size={15}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
                      />
                    </div>
                    {errors.subject && (
                      <p className="font-body text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-[11px] tracking-widest uppercase text-charcoal font-semibold block mb-1.5">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about yourself, your goals, or your child's experience..."
                    className={`form-input resize-none ${errors.message ? 'border-red-400' : ''}`}
                  />
                  {errors.message && (
                    <p className="font-body text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Captcha */}
                <div className="bg-ivory-dark p-5 border border-ivory-dark">
                  <label className="font-body text-[11px] tracking-widest uppercase text-charcoal font-semibold block mb-3">
                    Security Check <span className="text-gold">*</span>
                  </label>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="bg-navy text-ivory font-display text-xl px-6 py-3 select-none tracking-wide min-w-[100px] text-center">
                      {captcha ? captcha.question + ' = ?' : '...'}
                    </div>
                    <div className="flex-1 min-w-[100px]">
                      <input
                        type="number"
                        name="captcha"
                        value={form.captcha}
                        onChange={handleChange}
                        placeholder="Your answer"
                        className={`form-input ${errors.captcha ? 'border-red-400' : ''}`}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={refreshCaptcha}
                      className="font-body text-xs text-muted hover:text-gold underline underline-offset-2 whitespace-nowrap"
                    >
                      New question
                    </button>
                  </div>
                  {errors.captcha && (
                    <p className="font-body text-xs text-red-500 mt-2 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.captcha}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary text-xs w-full sm:w-auto flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                  <p className="font-body text-xs text-muted mt-3">
                    Fields marked with <span className="text-gold">*</span> are required.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ───────────────────────── */}
      <section className="h-72 bg-ivory-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-gold mx-auto mb-2" />
            <p className="font-body text-sm text-muted">
              248 Lakeshore Blvd W, Mississauga, ON
            </p>
            <a
              href="https://maps.google.com/?q=248+Lakeshore+Blvd+W+Mississauga+ON"
              target="_blank"
              rel="noreferrer"
              className="font-body text-xs text-gold underline underline-offset-2 hover:text-gold-light transition-colors mt-2 inline-block"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(26,39,68,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(26,39,68,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </section>
    </>
  )
}
