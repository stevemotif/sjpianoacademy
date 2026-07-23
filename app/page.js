import Link from 'next/link'
import { ArrowRight, Music, Award, Users, Clock } from 'lucide-react'
import { programs, whyUs, testimonials, stats } from '@/lib/data'

export const metadata = {
  title: 'SJ Piano Academy — Mississauga Piano Lessons',
  description:
    'Premier piano lessons for all ages in Mississauga. RCM exam preparation, beginner to advanced. Enrol today.',
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552422535-c45813c61732?w=1600&q=80')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy/65" />
        {/* Subtle piano key pattern */}
        <div className="absolute inset-0 piano-keys-bg opacity-30" />

        <div className="relative max-w-6xl mx-auto px-6 py-32 text-ivory">
          <div className="max-w-2xl">
            <span className="inline-block font-body text-[11px] tracking-[0.35em] uppercase text-gold font-semibold mb-6">
              Mississauga · Est. 2007
            </span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-6">
              Where Music<br />
              <em className="italic text-gold-light">Meets</em> Passion
            </h1>
            <p className="font-body text-ivory/75 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              Expert piano instruction for all ages and levels — from curious beginners to
              aspiring concert performers. Join our community of over 400 students.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary bg-gold border-0 hover:bg-gold-light text-navy text-xs px-8 py-4">
                Enrol Now
              </Link>
              <Link href="/about" className="btn-outline border-ivory/50 text-ivory hover:bg-ivory hover:text-navy text-xs px-8 py-4">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40">
          <span className="font-body text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-ivory/20 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gold animate-[slideDown_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────── */}
      <section className="bg-navy py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-light text-gold mb-1">
                {s.value}
              </div>
              <div className="font-body text-xs tracking-widest uppercase text-ivory/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO / WELCOME ───────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="gold-line mb-5" />
            <h2 className="section-heading mb-5">
              A Place to Grow,<br />
              <em className="italic">Perform & Belong</em>
            </h2>
            <p className="font-body text-muted text-base leading-relaxed mb-5">
              SJ Piano Academy has been the musical home of students across Mississauga
              and the Greater Toronto Area since 2022. We believe every person has the
              capacity to make beautiful music — our role is simply to guide them there.
            </p>
            <p className="font-body text-muted text-base leading-relaxed mb-8">
              Our instructors combine conservatory-trained expertise with genuine warmth,
              making lessons feel both rigorous and deeply enjoyable. Whether your child is
              reaching for their first note or you're an adult finally pursuing a lifelong
              dream, you'll find your place here.
            </p>
            <Link href="/about" className="btn-outline text-xs">
              Meet Our Team <ArrowRight size={13} className="inline ml-2" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
                alt="Piano keys close up"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-gold/30 -z-10" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-ivory-dark -z-10" />
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ──────────────────────────────── */}
      <section className="py-24 bg-ivory-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="gold-line mx-auto mb-5" />
            <h2 className="section-heading mb-3">Our Programs</h2>
            <p className="section-subheading max-w-md mx-auto">
              Tailored instruction at every stage of the musical journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white p-8 group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-b-2 border-transparent hover:border-gold"
              >
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="font-display text-2xl font-medium text-navy mb-1">
                  {program.title}
                </h3>
                <span className="font-body text-[11px] tracking-widest uppercase text-gold font-semibold block mb-4">
                  {program.age}
                </span>
                <p className="font-body text-sm text-muted leading-relaxed mb-6">
                  {program.description}
                </p>
                <div className="space-y-1.5 border-t border-ivory-dark pt-4">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Clock size={12} className="text-gold" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Users size={12} className="text-gold" />
                    <span>{program.format}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-primary text-xs">
              Enquire About Enrolment
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line mb-5" />
              <h2 className="section-heading mb-4">
                Why Families<br />Choose SJ Piano Academy
              </h2>
              <p className="font-body text-muted text-base leading-relaxed">
                For nearly two decades, families across the GTA have trusted us with their
                most important investment — their children's education and love of music.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {whyUs.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="font-display text-xl font-medium text-navy mb-1.5">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────── */}
      <section className="py-24 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto mb-5" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-ivory mb-3">
              What Our Families Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-navy-light p-8 border border-ivory/10">
                {/* Quote mark */}
                <div className="font-display text-6xl text-gold/30 leading-none mb-2">"</div>
                <p className="font-body text-sm text-ivory/70 leading-relaxed mb-6 -mt-2">
                  {t.text}
                </p>
                <div className="border-t border-ivory/10 pt-5">
                  <div className="font-display text-lg text-ivory">{t.name}</div>
                  <div className="font-body text-xs text-gold tracking-wide">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECITALS PREVIEW ──────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="gold-line mb-5" />
              <h2 className="section-heading">
                Student<br />Recitals
              </h2>
            </div>
            <p className="font-body text-muted text-sm max-w-xs leading-relaxed">
              Every year our students take the stage to share their music with the community.
              Browse past recitals and relive the magic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: '2024',
                img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
                title: 'Spring Serenade 2024',
                performers: 62,
              },
              {
                year: '2025',
                img: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
                title: 'Melodies of Spring 2025',
                performers: 54,
              }
            ].map((r) => (
              <Link
                href={`/recitals/${r.year}`}
                key={r.year}
                className="group block overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-white p-5 border-b-2 border-transparent group-hover:border-gold transition-colors duration-300">
                  <div className="font-body text-[10px] tracking-widest uppercase text-gold font-semibold mb-1">
                    {r.year} · {r.performers} Performers
                  </div>
                  <h3 className="font-display text-xl text-navy">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/recitals" className="btn-outline text-xs">
              View All Recitals <ArrowRight size={13} className="inline ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────── */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-ivory">
          <span className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-5xl md:text-6xl font-light mb-5">
            Ready to Begin Your<br />
            <em className="italic text-gold-light">Musical Journey?</em>
          </h2>
          <p className="font-body text-ivory/70 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Spaces are limited. Contact us today to enquire about availability or to
            join our waiting list.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-gold border-0 hover:bg-gold-light text-navy text-xs px-10 py-4">
              Get in Touch
            </Link>
            <Link href="/recitals" className="btn-outline border-ivory/40 text-ivory hover:bg-ivory hover:text-navy text-xs px-10 py-4">
              Watch Recitals
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}