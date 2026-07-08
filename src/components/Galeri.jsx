const galleryItems = [
  {
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=500',
    alt: 'Nike Jordan',
    tag: 'Deep Clean',
    name: 'Air Jordan 1 High',
  },
  {
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=500',
    alt: 'Nike Air Green',
    tag: 'Unyellowing',
    name: 'Nike Air Zoom Lime',
  },
  {
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=500',
    alt: 'Puma White',
    tag: 'Basic Clean',
    name: 'Puma Smash White',
  },
  {
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=500',
    alt: 'Leather Shoes',
    tag: 'Leather Care',
    name: 'Classic Brogues Leather',
  },
]

function GalleryCard({ item }) {
  return (
    <div className="relative w-72 h-48 sm:w-80 sm:h-52 overflow-hidden rounded-lg bg-gray-200 shadow-md transition-all duration-300 hover:scale-105 group cursor-pointer">
      <img
        src={item.img}
        alt={item.alt}
        className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-blue-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <div>
          <span className="text-[10px] bg-brand-yellow text-brand-blue font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            {item.tag}
          </span>
          <p className="text-white font-bold text-sm mt-1">{item.name}</p>
        </div>
      </div>
    </div>
  )
}

export default function Galeri() {
  // Duplicate items so the CSS marquee (translateX(-50%)) loops seamlessly.
  const marqueeItems = [...galleryItems, ...galleryItems]

  return (
    <section id="galeri" className="py-16 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-brand-blue font-bold tracking-widest text-xs uppercase bg-blue-100 px-4 py-1.5 rounded-full inline-block">
            Hasil Nyata
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue">
            Galeri Hasil Workshop Resiclean
          </h2>
          <p className="text-gray-600 text-base">
            Lihat transformasi kebersihan sepatu pelanggan setelah mendapatkan perawatan terbaik dari shoe care
            specialist kami.
          </p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4 bg-gray-100/50 border-y border-gray-200/60">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max">
          <div className="animate-marquee flex gap-6 pr-6 shrink-0">
            {marqueeItems.map((item, index) => (
              <GalleryCard key={`${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
