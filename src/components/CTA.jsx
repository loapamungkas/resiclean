export default function CTA() {
  return (
    <section className="py-16 md:py-28 bg-white text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,214,0,0.15),transparent_45%)]"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-brand-blue-dark border border-blue-900 rounded-3xl p-10 sm:p-16 space-y-6 sm:space-y-8 shadow-2xl relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-yellow text-brand-blue rounded-full shadow-lg flex items-center justify-center text-xl">
            <i className="fa-solid fa-socks"></i>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight text-white max-w-3xl mx-auto pt-2">
            Sepatu Kotor Bikin Nggak Pede?
            <br className="hidden sm:inline" />
            <span className="text-brand-yellow">Serahkan Pada Resiclean!</span>
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Dapatkan promo diskon eksklusif <strong>10% untuk cuci sepatu pertama kali!</strong>
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href="https://wa.me/6289649010824?text=Halo Admin Resiclean, saya ingin mencuci sepatu."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue hover:text-brand-blue-dark font-bold text-base sm:text-lg px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
