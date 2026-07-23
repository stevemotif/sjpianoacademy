import { CheckCircle } from 'lucide-react'
import { aboutContent } from '@/lib/data'

export const metadata = {
  title: 'About Us',
  description:
    'Learn about SJ Piano Academy — our story, our founder Margaret Chen, and our dedicated teaching team.',
}

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ───────────────────────────── */}
      <section
        className="relative pt-40 pb-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-navy/75" />
        <div className="relative max-w-6xl mx-auto px-6 text-ivory">
          <span className="font-body text-[11px] tracking-[0.35em] uppercase text-gold font-semibold block mb-4">
            Our Story
          </span>
          <h1 className="font-display text-6xl md:text-7xl font-light leading-tight">
            About<br />
            <em className="italic">SJ Piano Academy</em>
          </h1>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3">
            <span className="gold-line mb-5" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-8 leading-snug">
              Rooted in Community,<br />
              <em className="italic">Driven by Music</em>
            </h2>
            {aboutContent.story.split('\n\n').map((paragraph, i) => (
              <p key={i} className="font-body text-muted text-base leading-relaxed mb-5">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="md:col-span-2 sticky top-28">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80"
                  alt="SJ Piano Academy studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 -z-10" />
              <div className="bg-navy text-ivory p-5 mt-0">
                <div className="font-display text-3xl font-light text-gold mb-0.5">18+</div>
                <div className="font-body text-xs tracking-widest uppercase text-ivory/60">
                  Years of Musical Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL INSTRUCTOR ──────────────────── */}
      <section className="py-24 bg-ivory-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="gold-line mx-auto mb-5" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Principal Instructor
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden max-w-md mx-auto md:mx-0">
                <img
                  src={aboutContent.instructor.image}
                  alt={aboutContent.instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 -left-4 bg-gold text-navy px-4 py-2 hidden md:block">
                <span className="font-body text-[10px] tracking-widest uppercase font-semibold">
                  Founder
                </span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="font-display text-4xl font-light text-navy mb-1">
                {aboutContent.instructor.name}
              </h3>
              <span className="font-body text-[11px] tracking-widest uppercase text-gold font-semibold block mb-6">
                {aboutContent.instructor.title}
              </span>

              {aboutContent.instructor.bio.split('\n\n').map((p, i) => (
                <p key={i} className="font-body text-muted text-sm leading-relaxed mb-4">
                  {p}
                </p>
              ))}

              <div className="mt-6 border-t border-ivory-dark pt-6">
                <h4 className="font-body text-[10px] tracking-widest uppercase text-navy font-semibold mb-4">
                  Credentials & Affiliations
                </h4>
                <ul className="space-y-2.5">
                  {aboutContent.instructor.credentials.map((c) => (
                    <li key={c} className="flex items-center gap-3">
                      <CheckCircle size={15} className="text-gold shrink-0" />
                      <span className="font-body text-sm text-charcoal">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHING TEAM ─────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="gold-line mx-auto mb-5" />
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-3">
              Our Teaching Team
            </h2>
            <p className="font-body text-muted text-base max-w-md mx-auto">
              Each instructor brings a unique background and deep passion for nurturing
              musical talent at every level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {aboutContent.team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square overflow-hidden mb-5 max-w-xs mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-2xl font-medium text-navy mb-0.5">
                  {member.name}
                </h3>
                <div className="font-body text-[10px] tracking-widest uppercase text-muted mb-1">
                  {member.title}
                </div>
                <div className="font-body text-[10px] tracking-widest uppercase text-gold font-semibold">
                  {member.speciality}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-6 text-center text-ivory">
          <span className="gold-line mx-auto mb-6" />
          <blockquote className="font-display text-3xl md:text-4xl font-light leading-relaxed italic">
            "Music gives a soul to the universe, wings to the mind, flight to the
            imagination, and life to everything."
          </blockquote>
          <cite className="font-body text-xs tracking-widest uppercase text-gold font-semibold not-italic block mt-6">
            — Plato
          </cite>
        </div>
      </section>
    </>
  )
}
