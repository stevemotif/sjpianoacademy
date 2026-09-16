'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/format'

const CONTEXT_FILL = 'rgba(26, 39, 68, 0.16)'
const CONTEXT_FILL_HOVER = 'rgba(26, 39, 68, 0.26)'
const CURRENT_FILL = '#B8962E'
const CURRENT_FILL_HOVER = '#D4AF50'

const CHART_HEIGHT = 220

function niceMax(value) {
  const v = Math.max(value, 100)
  const magnitude = Math.pow(10, Math.floor(Math.log10(v)))
  const step = magnitude / 2
  return Math.ceil((v * 1.2) / step) * step
}

export default function RevenueChart({ trend }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const max = niceMax(Math.max(...trend.map((t) => t.value), 0))
  const ticks = [1, 0.5, 0].map((f) => Math.round(max * f))

  return (
    <div>
      <div className="flex">
        {/* Y axis ticks */}
        <div
          className="flex flex-col justify-between text-right pr-3 font-body text-[11px] text-muted shrink-0"
          style={{ height: CHART_HEIGHT, width: 52 }}
        >
          {ticks.map((t) => (
            <span key={t}>{formatCurrency(t)}</span>
          ))}
        </div>

        {/* Chart area */}
        <div className="relative flex-1">
          {/* Gridlines */}
          <div
            className="absolute inset-x-0 top-0 flex flex-col justify-between pointer-events-none"
            style={{ height: CHART_HEIGHT }}
          >
            {ticks.map((t) => (
              <div key={t} className="border-t border-navy/10 w-full" />
            ))}
          </div>

          {/* Bars */}
          <div className="relative flex items-end" style={{ height: CHART_HEIGHT }}>
            {trend.map((point, i) => {
              const heightPct = max > 0 ? (point.value / max) * 100 : 0
              const isActive = activeIndex === i
              const fill = point.isCurrent
                ? isActive
                  ? CURRENT_FILL_HOVER
                  : CURRENT_FILL
                : isActive
                ? CONTEXT_FILL_HOVER
                : CONTEXT_FILL

              return (
                <div key={`${point.label}-${point.year}`} className="flex-1 flex flex-col items-center justify-end h-full relative">
                  {isActive && (
                    <div className="absolute -translate-x-1/2 left-1/2 bg-navy text-ivory text-xs font-body rounded px-2.5 py-1.5 pointer-events-none shadow-lg whitespace-nowrap z-10" style={{ bottom: `calc(${heightPct}% + 10px)` }}>
                      <div className="font-semibold">{formatCurrency(point.value)}</div>
                      <div className="text-ivory/60">
                        {point.label} {point.year}
                      </div>
                    </div>
                  )}
                  <button
                    type="button"
                    aria-label={`${point.label} ${point.year}: ${formatCurrency(point.value)}`}
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    onFocus={() => setActiveIndex(i)}
                    onBlur={() => setActiveIndex(null)}
                    className="w-1/2 max-w-[36px] rounded-t transition-colors"
                    style={{
                      height: `${Math.max(heightPct, point.value > 0 ? 1.5 : 0)}%`,
                      backgroundColor: fill,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* X axis labels */}
      <div className="flex" style={{ paddingLeft: 52 }}>
        {trend.map((point) => (
          <div
            key={`${point.label}-${point.year}-label`}
            className={`flex-1 text-center text-[11px] font-body pt-2 ${
              point.isCurrent ? 'text-navy font-semibold' : 'text-muted'
            }`}
          >
            {point.label}
          </div>
        ))}
      </div>
    </div>
  )
}
