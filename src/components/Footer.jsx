const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#layanan', label: 'Layanan & Harga' },
  { href: '#tracking', label: 'Lacak Pesanan' },
  { href: '#galeri', label: 'Galeri' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-gray-300 pt-16 pb-8 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 col-span-1 md:col-span-1">
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
            <p className="text-sm text-gray-400 leading-relaxed">
              Resiclean adalah layanan cuci sepatu profesional yang mengutamakan kualitas, kecepatan, dan
              kepuasan pelanggan untuk menjaga sneaker kesayangan Anda tetap prima.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/loapamungkas_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-950 border border-blue-900 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center text-white transition-all shadow"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-950 border border-blue-900 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center text-white transition-all shadow"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://wa.me/6289649010824?text=Halo Admin Resiclean, saya ingin mencuci sepatu."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-950 border border-blue-900 hover:bg-brand-yellow hover:text-brand-blue flex items-center justify-center text-white transition-all shadow"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
              Navigasi
            </h3>
            <ul className="space-y-3.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-yellow transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
              Lokasi Workshop
            </h3>
            <a
              href="https://maps.app.goo.gl/HBYS5P7ywmQaJyiN7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-relaxed hover:text-brand-yellow transition-colors"
            >
              <i className="fa-solid fa-map-location-dot text-brand-yellow mr-2 text-base"></i>
              Babadan No. 729 RT28 RW17, Plumbon, Banguntapan, Bantul, Yogyakarta, 55198
            </a>
            <p className="text-sm mt-4">
              <i className="fa-solid fa-clock text-brand-yellow mr-2 text-base"></i>
              Setiap Hari: 10:00 - 22:00 WIB
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-white text-base mb-6 uppercase tracking-wider">
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-phone text-brand-yellow mt-0.5 text-base"></i>
                <div>
                  <span className="block text-gray-400 text-xs">Telepon / WhatsApp</span>
                  <a href="https://wa.me/6289649010824?text=Halo Admin Resiclean, saya ingin mencuci sepatu." className="hover:text-brand-yellow font-semibold transition-colors">
                    +62 896-4901-0824
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-envelope text-brand-yellow mt-0.5 text-base"></i>
                <div>
                  <span className="block text-gray-400 text-xs">Email Layanan</span>
                  <a
                    href="mailto:info@resiclean.com"
                    className="hover:text-brand-yellow font-semibold transition-colors"
                  >
                    info@resiclean.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-950 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Resiclean. All rights reserved.</p>
          <p className="flex items-center gap-1">Created By Loa Pamungkas with Love.</p>
        </div>
      </div>
    </footer>
  )
}
