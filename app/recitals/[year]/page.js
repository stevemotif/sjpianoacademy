'use client'

import { useState } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, MapPin, Users, ChevronLeft, Play, X } from 'lucide-react'
import { recitals } from '@/lib/data'

export default function RecitalDetailPage({ params }) {
  const year = parseInt(params.year)
  const recital = recitals.find((r) => r.year === year)

  if (!recital) notFound()

  return <RecitalDetail recital={recital} />
}

function RecitalDetail({ recital }) {
  const [lightboxImg, setLightboxImg] = useState(null)
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24"
        style={{
          backgroundImage: `url('${recital.coverImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-6xl mx-auto px-6 text-ivory">
          <Link
            href="/recitals"
            className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-ivory/60 hover:text-gold transition-colors mb-8"
          >
            <ChevronLeft size={14} /> All Recitals
          </Link>
          <span className="font-body text-[11px] tracking-[0.35em] uppercase text-gold font-semibold block mb-3">
            {recital.year}
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
            {recital.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-ivory/60">
            <span className="flex items-center gap-2 text-sm">
              <Calendar size={14} className="text-gold" /> {recital.date}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-gold" /> {recital.venue}
            </span>
            <span className="flex items-center gap-2 text-sm">
              <Users size={14} className="text-gold" /> {recital.performers} Performers
            </span>
          </div>
        </div>
      </section>

      {/* ── DESCRIPTION ───────────────────────────── */}
      <section className="py-16 border-b border-ivory-dark">
        <div className="max-w-6xl mx-auto px-6">
          <p className="font-body text-muted text-base leading-relaxed max-w-3xl">
            {recital.description}
          </p>
        </div>
      </section>

      {/* ── VIDEOS ────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="gold-line mb-4" />
            <h2 className="font-display text-4xl font-light text-navy">Performance Videos</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {recital.videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative aspect-video overflow-hidden bg-navy">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-75"
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <Play size={22} className="text-navy ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 border-l-2 border-transparent group-hover:border-gold transition-colors duration-300">
                  <p className="font-body text-sm text-charcoal leading-snug">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ─────────────────────────── */}
      <section className="py-24 bg-ivory-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <span className="gold-line mb-4" />
            <h2 className="font-display text-4xl font-light text-navy">Photo Gallery</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {recital.images.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => setLightboxImg(img)}
              >
                <img
                  src={img}
                  alt={`${recital.title} photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NAV TO OTHER RECITALS ─────────────────── */}
      <section className="py-16 border-t border-ivory-dark">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/recitals"
            className="btn-outline text-xs inline-flex items-center gap-2"
          >
            <ChevronLeft size={13} /> All Recitals
          </Link>
          <Link href="/contact" className="btn-primary text-xs">
            Enrol for Next Recital
          </Link>
        </div>
      </section>

      {/* ── IMAGE LIGHTBOX ────────────────────────── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-5 right-5 text-ivory/60 hover:text-ivory"
            onClick={() => setLightboxImg(null)}
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImg}
            alt="Gallery"
            className="max-w-4xl max-h-[85vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── VIDEO MODAL ───────────────────────────── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            className="absolute top-5 right-5 text-ivory/60 hover:text-ivory"
            onClick={() => setActiveVideo(null)}
          >
            <X size={28} />
          </button>
          <div
            className="w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="font-body text-sm text-ivory/70 mt-3">{activeVideo.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
