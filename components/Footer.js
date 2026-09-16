'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data'

export default function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/dashboard')) return null

  return (
    <footer className="bg-navy text-ivory/80">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <span className="font-display text-3xl font-light text-ivory block">SJ</span>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">
              Piano Academy
            </span>
          </div>
          <p className="font-body text-sm leading-relaxed text-ivory/60 mb-6">
            Nurturing musical excellence and a lifelong love for the piano since 2005.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold transition-colors text-xs"
            >
              f
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold transition-colors text-xs"
            >
              IG
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-gold hover:text-gold transition-colors text-xs"
            >
              YT
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-5">
            Navigate
          </h4>
          <ul className="space-y-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/recitals', label: 'Recitals' },
              { href: '/contact', label: 'Contact' },
              { href: '/contact', label: 'Enrol Now' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-ivory/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
              <span className="font-body text-sm text-ivory/60 leading-relaxed">
                {siteConfig.address}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-gold shrink-0" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-body text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-gold shrink-0" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-body text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-ivory/30">
            © {new Date().getFullYear()} SJ Piano Academy. All rights reserved.
          </p>
          <p className="font-body text-xs text-ivory/30">
            Mississauga, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
