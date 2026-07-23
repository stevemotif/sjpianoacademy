import Link from 'next/link'
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react'
import { recitals } from '@/lib/data'

export const metadata = {
  title: 'Recitals',
  description:
    'Browse past SJ Piano Academy recitals — videos, photos, and memories from our annual student showcases.',
}

export default function RecitalsPage() {
  const sorted = [...recitals].sort((a, b) => b.year - a.year)

  return (
    <>
      {/* ── HEADER ────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/78" />
        <div className="relative max-w-6xl mx-auto px-6 text-ivory">
          <span className="font-body text-[11px] tracking-[0.35em] uppercase text-gold font-semibold block mb-4">
            Student Showcases
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-light leading-tight">
            Annual<br />
            <em className="italic">Recitals</em>
          </h1>
          <p className="font-body text-ivory/70 text-base max-w-md mt-5 leading-relaxed">
            Every year our students grace the stage to share their hard work, growth,
            and musical artistry with family and friends.
          </p>
        </div>
      </section>

      {/* ── RECITALS GRID ─────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured — most recent */}
          <div className="mb-16">
            <span className="font-body text-[10px] tracking-widest uppercase text-gold font-semibold block mb-6">
              Most Recent
            </span>
            <Link
              href={`/recitals/${sorted[0].year}`}
              className="group grid md:grid-cols-2 gap-0 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-400"
            >
              <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                <img
                  src={sorted[0].coverImage}
                  alt={sorted[0].title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
              </div>
              <div className="bg-white p-10 flex flex-col justify-center border-b-4 border-transparent group-hover:border-gold transition-colors duration-300">
                <div className="font-body text-[11px] tracking-widest uppercase text-gold font-semibold mb-3">
                  {sorted[0].year}
                </div>
                <h2 className="font-display text-4xl font-light text-navy mb-4 leading-tight">
                  {sorted[0].title}
                </h2>
                <p className="font-body text-muted text-sm leading-relaxed mb-6">
                  {sorted[0].description}
                </p>
                <div className="flex flex-wrap gap-6 mb-8 text-muted">
                  <span className="flex items-center gap-2 text-xs">
                    <Calendar size={13} className="text-gold" /> {sorted[0].date}
                  </span>
                  <span className="flex items-center gap-2 text-xs">
                    <MapPin size={13} className="text-gold" /> {sorted[0].venue}
                  </span>
                  <span className="flex items-center gap-2 text-xs">
                    <Users size={13} className="text-gold" /> {sorted[0].performers} Performers
                  </span>
                </div>
                <span className="btn-primary text-xs inline-flex items-center gap-2 self-start">
                  View Recital <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          </div>

          {/* Past recitals grid */}
          <span className="font-body text-[10px] tracking-widest uppercase text-gold font-semibold block mb-6">
            Previous Years
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.slice(1).map((recital) => (
              <Link
                key={recital.year}
                href={`/recitals/${recital.year}`}
                className="group block overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={recital.coverImage}
                    alt={recital.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 border-b-2 border-transparent group-hover:border-gold transition-colors duration-300">
                  <div className="font-body text-[10px] tracking-widest uppercase text-gold font-semibold mb-2">
                    {recital.year}
                  </div>
                  <h3 className="font-display text-2xl font-medium text-navy mb-2">
                    {recital.title}
                  </h3>
                  <p className="font-body text-xs text-muted leading-relaxed mb-4 line-clamp-2">
                    {recital.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-muted">
                    <span className="flex items-center gap-1.5 text-xs">
                      <MapPin size={11} className="text-gold" /> {recital.venue}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs">
                      <Users size={11} className="text-gold" /> {recital.performers} performers
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
