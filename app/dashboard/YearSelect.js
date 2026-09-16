'use client'

import { useRouter } from 'next/navigation'

export default function YearSelect({ years, selected }) {
  const router = useRouter()

  return (
    <select
      value={selected}
      onChange={(e) => router.push(`/dashboard?year=${e.target.value}`)}
      className="font-body text-sm text-navy border border-navy/20 rounded px-3 py-1.5 bg-white focus:outline-none focus:border-gold cursor-pointer"
    >
      {years.map((y) => (
        <option key={y} value={y}>
          {y}
        </option>
      ))}
    </select>
  )
}
