export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:p-48 bg-linear-to-br from-brand-blue via-brand-blue to-brand-blue-dark text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,0,0.15),transparent_45%)]"></div>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Langkah Bersih,
              <br />
              <span className="text-brand-yellow relative inline-block">Percaya Diri Lebih!</span>
            </h1>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Resiclean adalah jasa cuci sepatu profesional terbaik untuk merawat, membersihkan, dan
              merestorasi sepatu kesayangan Anda. Kami kembalikan kebersihan dan ketajaman warna seperti baru
              lagi!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="https://wa.me/6289649010824?text=Halo Admin Resiclean, saya ingin mencuci sepatu."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center gap-2 text-base"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Hubungi Sekarang
              </a>
              <a
                href="#tracking"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:border-white transition-all duration-200 inline-flex items-center justify-center gap-2 text-base"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                Lacak Sepatumu
              </a>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-brand-yellow opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-linear-to-tr from-brand-yellow/10 via-transparent to-transparent rounded-full rotate-45 transform scale-90 border-4 border-dashed border-brand-yellow/20"></div>

            <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-all duration-500 max-w-xs sm:max-w-md">
              <img
                src="https://images.unsplash.com/photo-1504390601568-f807df11a7c9?auto=format&fit=crop&q=80&w=600"
                alt="Nike Sneaker Premium"
                className="rounded-3xl shadow-2xl border-4 border-white/15 object-cover w-full h-70 sm:h-87.5"
              />

              <div
                className="absolute -top-4 -left-4 bg-brand-yellow text-brand-blue font-bold px-4 py-2 rounded-2xl shadow-lg flex items-center gap-1.5 text-xs animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <i className="fa-solid fa-circle-check text-brand-blue"></i> Fast Cleaned
              </div>

              <div
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg flex items-center gap-1.5 text-xs animate-bounce"
                style={{ animationDuration: '4s' }}
              >
                <i className="fa-solid fa-truck text-brand-yellow"></i> Antar Jemput
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
