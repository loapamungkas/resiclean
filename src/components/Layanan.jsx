const services = [
  {
    icon: 'fa-brush',
    tag: 'Perawatan Cepat',
    title: 'Basic Clean',
    desc: 'Pembersihan permukaan, tali & insole. Sangat cocok untuk sepatu harian dengan kotoran ringan agar kembali segar dalam sekejap.',
    price: 'Rp 30K',
    popular: false,
  },
  {
    icon: 'fa-soap',
    tag: 'Best Value',
    title: 'Deep Clean',
    desc: 'Cuci menyeluruh midsole, upper, lidah. Pembersihan mendalam ke serat bahan terdalam untuk menghilangkan noda membandel dan bau tidak sedap.',
    price: 'Rp 50K',
    popular: true,
  },
  {
    icon: 'fa-feather',
    tag: 'Perawatan Khusus',
    title: 'Suede Treatment',
    desc: 'Perawatan khusus suede & nubuck. Menggunakan cairan khusus dan brush lembut agar kelembutan tekstur suede asli sepatu Anda tetap terjaga.',
    price: 'Rp 80K',
    popular: false,
  },
  {
    icon: 'fa-paint-brush',
    tag: 'Restorasi Warna',
    title: 'Repaint',
    desc: 'Restorasi warna & touch-up cat. Kembalikan warna pudar sepatu Anda atau ubah warna (recolor) sesuai keinginan Anda menggunakan cat premium anti-luntur.',
    price: 'Rp 150K',
    popular: false,
  },
  {
    icon: 'fa-fill-drip',
    tag: 'Perbaikan Sol',
    title: 'Reglue',
    desc: 'Perbaiki sol terlepas, lekat seperti baru. Menggunakan pengeleman khusus dengan teknik press bertekanan tinggi untuk hasil rekat maksimal & tahan lama.',
    price: 'Rp 80K',
    popular: false,
  },
  {
    icon: 'fa-circle-half-stroke',
    tag: 'Pemutihan Sol',
    title: 'Unyellowing',
    desc: 'Kembalikan sol kuning jadi putih bersih. Menggunakan proses de-oksidasi kimia khusus untuk mengangkat noda kekuningan pada outsole & midsole karet.',
    price: 'Rp 100K',
    popular: false,
  },
]

function ServiceCard({ service }) {
  if (service.popular) {
    return (
      <div className="bg-brand-blue border-2 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between transform scale-100 md:scale-105 z-10">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-blue font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-md">
          Paling Populer
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center justify-center h-12 w-12 bg-gray-50/20 rounded-2xl">
              <i className={`fa-solid ${service.icon} text-xl text-brand-yellow`}></i>
            </span>
            <span className="text-xs font-bold text-brand-blue bg-brand-yellow px-3 py-1 rounded-full">
              {service.tag}
            </span>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-2">{service.title}</h3>
          <p className="text-gray-200 text-sm mb-2 leading-relaxed">{service.desc}</p>
        </div>
        <div className="border-t border-yellow-100 pt-6 mt-4">
          <span className="text-xs text-gray-100 block mb-1">Mulai Dari</span>
          <div className="flex items-baseline gap-1">
            <span className="font-display font-extrabold text-3xl text-brand-yellow">{service.price}</span>
            <span className="text-gray-100 text-sm">/ pasang</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center justify-center h-12 w-12 bg-blue-50 text-brand-blue rounded-2xl">
            <i className={`fa-solid ${service.icon} text-xl`}></i>
          </span>
          <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {service.tag}
          </span>
        </div>
        <h3 className="font-display font-bold text-xl text-brand-blue mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm mb-2 leading-relaxed">{service.desc}</p>
      </div>
      <div className="border-t border-gray-100 pt-6 mt-4">
        <span className="text-xs text-gray-500 block mb-1">Mulai Dari</span>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-extrabold text-3xl text-brand-blue">{service.price}</span>
          <span className="text-gray-500 text-sm">/ pasang</span>
        </div>
      </div>
    </div>
  )
}

export default function Layanan() {
  return (
    <section id="layanan" className="py-16 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue font-bold tracking-widest text-xs uppercase bg-blue-100 px-4 py-1.5 rounded-full inline-block">
            Menu Perawatan
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue">
            Daftar Layanan & Harga Transparan
          </h2>
          <p className="text-gray-600 text-base">
            Kami menawarkan berbagai jenis perawatan khusus sesuai dengan jenis bahan, kondisi, dan kebutuhan
            sepatu kesayangan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
