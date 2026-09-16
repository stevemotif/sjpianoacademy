'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/dashboard/logout', { method: 'POST' })
    router.push('/dashboard/login')
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-1.5 font-body text-xs text-muted hover:text-navy transition-colors"
    >
      <LogOut size={14} />
      Log out
    </button>
  )
}
