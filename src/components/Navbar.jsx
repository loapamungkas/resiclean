import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#layanan', label: 'Layanan' },
  { href: '#tracking', label: 'Tracking' },
  { href: '#galeri', label: 'Galeri' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      id="navbar"
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? 'top-4 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border shadow-md bg-brand-blue border-blue-900/50'
          : 'top-0 w-full max-w-full border-blue-900/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2 text-white font-display font-bold text-lg tracking-wider"
          >
            <span className="h-8 w-8 bg-brand-yellow text-brand-blue rounded-lg flex items-center justify-center shadow-lg">
              R
            </span>
            <span>
              Resi<span className="text-brand-yellow">clean</span>
            </span>
          </a>

          <nav className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-brand-yellow transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/6289649010824?text=Halo Admin Resiclean, saya ingin mencuci sepatu."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-bold px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center gap-2 text-sm"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Hubungi Sekarang
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-white hover:text-brand-yellow focus:outline-none transition-all duration-200"
            aria-label="Toggle Menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      <div
        className={`${
          menuOpen ? '' : 'hidden'
        } md:hidden bg-brand-blue-dark border-t border-blue-900 shadow-xl rounded-b-2xl`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block text-white hover:text-brand-yellow py-2 border-b border-blue-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Hubungi WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
