'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function DashboardLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/dashboard/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Something went wrong.')
        setLoading(false)
        return
      }
      router.push('/dashboard')
      router.refresh()
    } catch {
      setError('Something went wrong.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-6 pt-24 pb-16">
      <div className="w-full max-w-sm">
        <div className="card p-8 border border-navy/10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-navy/5 mx-auto mb-5">
            <Lock className="w-5 h-5 text-navy" />
          </div>
          <h1 className="font-display text-2xl text-navy text-center mb-1">Dashboard</h1>
          <p className="font-body text-sm text-muted text-center mb-6">Enter the password to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-navy/20 px-4 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-gold bg-white"
            />
            {error && <p className="font-body text-xs text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={loading || !password}
              className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Checking…' : 'Enter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
