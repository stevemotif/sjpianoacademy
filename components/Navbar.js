'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/recitals', label: 'Recitals' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Only the home page has a dark hero — other pages have light backgrounds
  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-ivory/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className={`font-display text-2xl font-light tracking-wide transition-colors duration-300 ${
            transparent ? 'text-ivory' : 'text-navy'
          }`}>
            SJ
          </span>
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-gold font-semibold -mt-0.5">
            Piano Academy
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-body text-sm tracking-widest uppercase font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-gold active'
                  : transparent
                  ? 'text-ivory/85 hover:text-gold'
                  : 'text-navy hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-xs py-2.5 px-6 font-body font-semibold tracking-widest uppercase transition-all duration-300 ${
              transparent
                ? 'border border-ivory/50 text-ivory hover:bg-ivory hover:text-navy'
                : 'bg-navy text-ivory hover:bg-navy-light'
            }`}
          >
            Enrol Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-1 transition-colors duration-300 ${
            transparent ? 'text-ivory' : 'text-navy'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory border-t border-ivory-dark px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block font-body text-sm tracking-widests uppercase font-medium py-2 ${
                pathname === link.href ? 'text-gold' : 'text-navy'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-xs block text-center mt-2"
          >
            Enrol Now
          </Link>
        </div>
      )}
    </header>
  )
}