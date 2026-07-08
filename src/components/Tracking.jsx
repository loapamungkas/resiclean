import { useState } from 'react'
import { supabase, rupiah } from '../lib/supabaseClient'

const STATUS_ORDER = ['Antrean', 'Sedang Dicuci', 'Pengecekan', 'Selesai', 'Diambil']

const STEPS = [
  {
    icon: 'fa-clipboard-check',
    title: '1. Pesanan Diterima',
    desc: 'Sepatu Anda sudah sampai di workshop Resiclean dan telah didata dengan aman.',
  },
  {
    icon: 'fa-soap',
    title: '2. Sedang Dicuci',
    desc: 'Proses pembersihan menyeluruh oleh shoe care specialist menggunakan cleaner premium.',
  },
  {
    icon: 'fa-wind',
    title: '3. Pengeringan & QC',
    desc: 'Sepatu dikeringkan khusus secara alami (non-heat) dilanjutkan inspeksi kualitas kebersihan.',
  },
  {
    icon: 'fa-truck-fast',
    title: '4. Siap Diambil/Diantar',
    desc: 'Sepatu sudah bersih, wangi maksimal, dan dikemas rapi. Siap dikirim balik ke pemilik!',
  },
]

export default function Tracking() {
  const [orderId, setOrderId] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const trimmed = orderId.trim()

    if (!trimmed) {
      setError('Harap masukkan Nomor Resi / Order ID terlebih dahulu.')
      setResult(null)
      return
    }

    setLoading(true)
    try {
      const { data, error: queryError } = await supabase
        .from('orders')
        .select('id, code, status, customer, phone, payment, total, created_at, items ( service, brand, price )')
        .eq('code', trimmed.toUpperCase())
        .single()

      if (queryError || !data) {
        setError('Order ID tidak ditemukan. Periksa kembali kode Anda.')
        setResult(null)
        return
      }

      setError('')
      setResult(data)
    } catch (err) {
      console.error('Koneksi Error:', err)
      alert('Terjadi kesalahan jaringan. Silahkan coba lagi nanti.')
    } finally {
      setLoading(false)
    }
  }

  const targetStep = result ? STATUS_ORDER.indexOf(result.status) + 1 : 0

  return (
    <section id="tracking" className="py-16 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue font-bold tracking-widest text-xs uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block">
            Layanan Real-time
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-blue">
            Lacak Status Cuci Sepatumu
          </h2>
          <p className="text-gray-600 text-base">
            Kini memantau proses pengerjaan sepatu Anda jauh lebih mudah. Masukkan Nomor Resi / Order ID di
            bawah untuk melihat perkembangan cuci secara real-time.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 p-4 sm:p-10 rounded-3xl shadow-xl">
          <div className="space-y-4">
            <label htmlFor="resi-input" className="block font-bold text-brand-blue text-sm">
              Nomor Resi / Order ID
            </label>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative grow">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">
                  <i className="fa-solid fa-ticket"></i>
                </span>
                <input
                  type="text"
                  id="resi-input"
                  placeholder="Contoh: RC-12345"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-11 pr-4 text-brand-blue font-semibold placeholder-gray-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 transition-all text-base"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold py-4 px-8 rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg transform active:scale-95 disabled:opacity-60"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
                {loading ? 'Mencari...' : 'Cek Status'}
              </button>
            </form>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl border border-red-100 flex items-center gap-3 text-sm">
                <i className="fa-solid fa-circle-exclamation text-lg"></i>
                <span>{error}</span>
              </div>
            )}
          </div>

          {result && (
            <div className="mt-10 pt-8 border-t border-gray-200 fade-in">
              <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Order ID</span>
                  <span className="font-display font-bold text-brand-blue">{result.code}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Nama Pelanggan</span>
                  <span className="font-bold text-gray-800">{result.customer}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Pembayaran</span>
                  <span className="font-bold text-brand-blue">{result.payment}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Tanggal Masuk</span>
                  <span className="font-semibold text-gray-700">
                    {new Date(result.created_at).toLocaleDateString('id-ID')}
                  </span>
                </div>
              </div>

              <div className="bg-white border border-gray-100 p-4 md:p-6 rounded-2xl shadow-sm mb-8">
                <h4 className="font-display font-bold text-base text-brand-blue mb-4 flex items-center gap-2 border-b border-gray-50 pb-3">
                  <i className="fa-solid fa-shoe-prints text-brand-yellow"></i>
                  Rincian Item Sepatu dalam Orderan Ini
                </h4>
                <div className="divide-y divide-gray-100">
                  {result.items.map((item, index) => (
                    <div
                      key={`${item.brand}-${index}`}
                      className={`py-4 flex flex-row sm:items-center justify-between gap-2 ${
                        index > 0 ? 'border-t border-gray-50' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-8 h-8 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-xs md:text-sm">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-bold text-gray-800 text-xs sm:text-base">{item.brand}</p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            Layanan: <span className="font-medium text-gray-600">{item.service}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-end sm:justify-end gap-4">
                        <span className="text-xs sm:text-sm font-semibold text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                          {rupiah(item.price)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-brand-blue mb-4">
                  Perkembangan Cuci Sepatu:
                </h3>

                <div className="relative pl-8 space-y-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-1 before:bg-gray-200">
                  {STEPS.map((step, index) => {
                    const stepNumber = index + 1
                    const isActive = stepNumber <= targetStep
                    const isCurrent = stepNumber === targetStep
                    const currentBadgeText = result.status === 'Selesai' ? 'Siap Diambil' : result.status

                    return (
                      <div key={step.title} className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div
                          className={
                            isActive
                              ? 'step-circle absolute -left-8 top-1.5 sm:top-1/2 sm:-translate-y-1/2 w-9 h-9 rounded-full bg-brand-blue text-brand-yellow border-4 border-brand-yellow shadow-md flex items-center justify-center transition-all duration-300 z-10 scale-110'
                              : 'step-circle absolute -left-8 top-1.5 sm:top-1/2 sm:-translate-y-1/2 w-9 h-9 rounded-full bg-gray-200 text-gray-400 border-4 border-gray-50 flex items-center justify-center transition-all duration-300 z-10'
                          }
                        >
                          <i className={`fa-solid ${step.icon} text-sm`}></i>
                        </div>
                        <div className="ml-6">
                          <h4
                            className={
                              isActive
                                ? 'font-bold text-brand-blue step-title'
                                : 'font-bold text-gray-400 step-title'
                            }
                          >
                            {step.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                        </div>
                        {isActive ? (
                          isCurrent ? (
                            <span className="ml-6 md:ml-0 text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-yellow text-brand-blue uppercase tracking-wider self-start sm:self-center shadow-sm animate-pulse">
                              {currentBadgeText}
                            </span>
                          ) : (
                            <span className="ml-6 md:ml-0 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-brand-blue uppercase tracking-wider self-start sm:self-center">
                              Selesai
                            </span>
                          )
                        ) : (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-400 uppercase tracking-wider self-start sm:self-center">
                            Antrean
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
