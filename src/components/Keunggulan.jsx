const features = [
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Pembersihan Higienis',
    desc: 'Menggunakan deterjen khusus sneaker & cairan pembersih premium yang aman untuk berbagai macam material sepatu.',
  },
  {
    icon: 'fa-bolt',
    title: 'Pengerjaan Express',
    desc: 'Dikerjakan dengan cepat namun tetap presisi dan bersih. Tersedia layanan kilat selesai tepat waktu untuk mendukung mobilitas harian Anda.',
  },
  {
    icon: 'fa-truck-ramp-box',
    title: 'Layanan Antar-Jemput',
    desc: 'Tidak sempat ke workshop? Biar kami yang mengambil dan mengantarkan kembali sepatu Anda sampai ke depan pintu rumah dengan aman.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Garansi Cuci Ulang',
    desc: 'Kepuasan Anda adalah nomor satu. Jika hasil cuci dirasa kurang bersih, ajukan garansi cuci ulang gratis dalam waktu 24 jam setelah serah terima!',
  },
]

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-16 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue font-bold tracking-widest text-xs uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Mengapa Memilih Kami
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue">
            Komitmen Kami Memberikan Pelayanan Terbaik
          </h2>
          <p className="text-gray-600 text-base">
            Setiap pasang sepatu memiliki ceritanya sendiri. Di Resiclean, kami memastikan sepatu Anda
            mendapatkan perawatan paling teliti dan higienis dari tangan profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <i
                  className={`fa-solid ${f.icon} text-2xl text-brand-blue group-hover:text-brand-yellow transition-colors`}
                ></i>
              </div>
              <h3 className="font-display font-bold text-lg text-brand-blue mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
