import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

function Section({ children, className = '', id, delay = 0 }: {
  children: React.ReactNode
  className?: string
  id?: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '100px' })
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.section>
  )
}

const IMGS = {
  hero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv_cpvlo6Zc4ztvGO-Kvop6JI8aLaMb-oIUlG9_BRDY71fpZZ5XqeTEc-8lU9VoBpluN5DZqdAo3T6ZM1QnBgAV-z7611aO9tU4DEYrf_zFDqltQ-riL8m7-WX5tknHNCetKyxIM6bDTHtbuey6JtNxZyz8imy9eNrrqVMlb88YKrifg_MQ5PNTzXdcBYp6xAAXyRdr60MRvyZQJw7dlbuBqmAe7AVwBkT7ITVIw',
  perfume: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOF6KI7C-qqFqfIZBDmx9m5x6mGZyz68JVkJRU0PsPMTSp9QHB8YW9tZsVjWswPc3sr0KkRymuS2wnAqcm_49RNp2uD46CoCAERkkQOOCmAY5wacrotBChb8NqMxAsg9U4X-9K9INHPgA-RjxXCU7JVHV6aH1Cmk4H063oSyyytAclix0dPxzmmvQvk0DuYT0KR-DAMvUpmBEU5Gn1f91Pwt3Ne6SreXabntEWmA',
  watch: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-MEXom2kxS8_UQInxwmeWKwTExlnBhIcYs_l4V_lM6ZZSQ_bEwXB3PqPGNBFeM_RQ0gUW7P7i9wBCt-yCDWClLocnxMJaYUrYu5z0BTG7sWExqEabWIHgH_qLp0gZHGOuCcPIyZgwwoO3DQ8fFO_rDI0hmW08XePMF37u9J-POUtT62kP0EcfTwf-5KgQvgnIqZOIvnttiZquvpHq_H_tBgqthrDXDeTZhjy4nQ',
  iphone: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUwsQGYD8UHtIOXHTAbNPMIhOrwTlrK_rW1z2E5vro8QRhbTHTfXgKXJBKWgdXwrO3lDiql5GjCpKi7Cdb4by8ueTYsHq16JVg26X2AK5WrwKHbnjahv3UkH6CqKLRILSRVycL7DpfjqH5SLyqGRTgXL2uueY5Sl0f0qYFrZ3n9kVW4tFMrSWz0MyVUXAFLOTS5ITKHlwGsYp9jrnMZtV7LYflx0DLzKhDVj18jQ',
  iphoneProd: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCumSDwPh31FzUdS78QlgyO_ZV5a6iSOsFVZSpGUFX84OxCfqPixs5u2va1kCa9YNKVfaDHps9jqlKfp9QbWXEv7RbgbbaR5lEl_9h6IVyKJvIY5Ky3k4vlz2m0Do7Xzju4n0cundfglRwboZF7jPBajDuJhaMLlvZZy8NrwunifgH4FsW7w_raLYAU5UTZRA-t7RvD9rI2wlBY79hZdgTMyoOqjhpjkCtQaMBweg',
  ps5: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGjv3AlkrnBSwzz48N8he_o4tVS3LUI22zQ1b13BGMdOnY_gbjGqQnrVnGXEYRlSmr2Vg34ayT1tUh2ijz96mRqD7I0lLrYz6C6y5rS4etxTCNZOm9XFt0bUplIsqabmt3AOe_OXuw9McYsXguSOK1xeT-ckKpUlq3ngZpfFHRL56tZUCIrns_FXTUt3n1OouloCqhQcGWN2uSm4p74bcamVIXkLtDxK9Oi7O_Nw',
  garmin: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPA53yePxpkKpimhPJrylZXUfP9BQphfallMiyFZGDsDQ6QgNuzAkpCSwP-p8p7ZBZqo8xSusb0lGpzfSwoaOv6g8Rdnge1sCGjj--RJqR-BgMk8oKF7piPVRAQu9QaC7H8G6Trio4d3LBGZRJu5wwyseXRQ3bZ5kE1BNcltwRbxJfLK1OTsXfCGry8JjNdgnTMC7r3-YWznfCx8CXQN6GQnm1L8Esy-0A5syLLw',
  fones: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA09sTwjWUBUOIMFIxcLYoGNoWLaW86tOXwUD8ekd8MRSxD2qJsaJaMZ0oqkcUMltSzUW8FHaK8sGzeW_2gROOvXpw99w5r2_rLe1ehkAdrdovDD52TyaeBq3Mzo6e4f99UNnVLK9Rd0xcrm-HLHhks-s9i6-58pxp5fZxv4tUpkSgrV-8jB672g4iXfXU96QzVcZbWiKMClx13MKcHJEfL7qS4y-0Gdu4LjrLR8A',
  editorial: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAarBGnwA154R2KZHThs51TPpWkeIbVduge_A2MD0SZyYoH5ARqGtWEU4Po28GTW2xrOa66kNtFz-TXyzwqTGLaXTD65ky8r5r9oyJCdJnRXR_gmRlipLiqsXnNS-geBSxNsmpn2m5LNUUSu8oTMdsEAbgZPHZBzHA6yfZD4F5-FDbGGWn2DNr1cl2xtIdf0_XQpUSy8VAL877nmxiNnqua3K2uRc5jbwjsmpoDUg',
  sobre: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAo3WEzJeIrPg4mI6dOpkQCuyEZp-JgF4GUNfK6dGA6TAouCB8mnrq3_K5yMpS9XZYd-9OKfZ-TKL5fUqYYJvyTaltEnE44CgAaH6ctI7H6jPoK4lQsr7LrYPhOfOqCb8F-zFJjJi8uQS8yK_nNP85kmO2Q7IBkPgac7TgGznrznw5MQRyCJdr_Lehpxr1JZG9j_9M2bR6QzDzJE62GegW3YqQyy12DZrlmBHszOw',
  catCelulares: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoP2h25u6h3KFWUnTNuQtILk2d5mq0wjV7EkyX1LmjvwSBkBVUooxKTyoXuLYOM73pqgGWIpF3LQQvIsX8rCa7cAPLqqf2frD0dQ8PQcQeAblNolrjpH2phRZf9-z2nFvAFjZlCXqvI8L2NKhMBjTHl7ulwdeFXfa1T0P3WlqLPWDN_d8nnoCe4h3scMQiB_qYhwgGQssO_-wEQBH08mt6h35CJjCbOzoL0Pan3A',
  catPerfumes: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0sp4--EDT7yIBvjEqXsO1h_bTZ0mwpwXaTsD9z5zq8_rTlILCDuye-hnMbLds0aG5Kq4ikDhM7WlLa_l4w0AufsmliloXFkUgn8B3UhCVWPBGdY6Rwy2fZH2xAnQuQIux7GUdAPFyx26YMFbJjeN63nc3iHD7lhJ96oXgniPPKq3W0Ifpyu_cxFrjWcZqK5oYyIhF3trne26xVD6-lmcD8Sv_2BSJVzYY1wd0Dw',
  catRelogios: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
  catEletronicos: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4wq8bWb0evPbAQLuhigUh95A0suVS4nUpw-X2Uaegi48sHRDSomZ_9AS6uqKjmZar95wgtSKoTCQ5beB2bf6KYs17kp52G9iUVr-pxahFCv9IhDbqT_WKUiOsUcyXyhOX-IcubrDUMkYXgRgYt51Q8_8vOqAMRNXXyvnPiWF9JKRfjZPJ7thcBa19ef5XrkN-gHR091ozw39MBEHK_HHmAuF5rK7L-b9QX0zVXQ',
}

export default function Home() {
  return (
    <div className="w-full bg-[var(--color-navy-950)] min-h-screen">
      <Header />
      <main className="w-full pt-20">
        {/* ═══ HERO ═══ */}
        <section className="relative w-full h-[calc(100vh-5rem)] min-h-[720px] flex items-end overflow-hidden select-none">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center scale-105"
            style={{ backgroundImage: `url('${IMGS.hero}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06101f] via-[#06101f]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06101f]/90 via-[#06101f]/40 to-transparent" />
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#06101f]/60 to-transparent" />

          <div className="relative w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 pb-16 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Copy */}
              <motion.div
                className="lg:col-span-7 flex flex-col items-start z-20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#101f3a]/80 backdrop-blur-md shadow-sm mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
                  <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-gold)] uppercase tracking-widest font-bold">
                    Novidades 2026 · Pronta Entrega
                  </span>
                </div>

                <h1 className="flex flex-col tracking-tight leading-[1.15] text-[40px] md:text-[52px] lg:text-[56px]">
                  <span className="font-[var(--font-display)] font-normal text-[var(--color-text)]">
                    O que há de melhor
                  </span>
                  <span className="font-[var(--font-display)] font-bold text-[var(--color-gold)]">
                    chega primeiro aqui.
                  </span>
                </h1>

                <p className="mt-6 font-[var(--font-body)] text-lg text-[var(--color-text)]/75 max-w-[480px] leading-[1.7]">
                  Celulares, relógios e perfumes importados com nota fiscal, garantia real e parcelamento em até 18x. Mirandópolis e região.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href="#produtos"
                    className="inline-flex items-center justify-center font-[var(--font-body)] font-semibold text-[15px] text-[#06101f] bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] px-9 py-4 rounded-xl transition-all duration-300 shadow-[0_4px_24px_rgba(212,168,67,0.25)] hover:shadow-[0_8px_32px_rgba(212,168,67,0.45)] hover:-translate-y-0.5 active:scale-[0.98]"
                  >
                    Ver Produtos
                  </a>
                  <a
                    href="https://wa.me/5510991515253"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-[var(--font-body)] font-medium text-[15px] text-[var(--color-gold)] hover:text-[var(--color-gold-light)] px-4 py-4 transition-all duration-200"
                  >
                    <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:h-px after:bg-[var(--color-gold-light)] after:transition-all after:duration-300">
                      Falar no WhatsApp
                    </span>
                    <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>

                <div className="mt-12 pt-8 flex items-center gap-8 w-full max-w-lg">
                  {[
                    { value: '100%', label: 'ORIGINALIDADE' },
                    { value: 'Até 18x', label: 'SEM ACRÉSCIMO' },
                    { value: '12 Meses', label: 'GARANTIA TOTAL' },
                  ].map((m, i) => (
                    <div key={i} className="flex flex-col">
                      {i > 0 && <div className="hidden" />}
                      <span className="font-[var(--font-mono)] text-xl text-[var(--color-gold)] font-bold">{m.value}</span>
                      <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-secondary)] uppercase tracking-widest">{m.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Products */}
              <motion.div
                className="lg:col-span-5 relative w-full h-[460px] hidden md:flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-[var(--color-gold)]/15 via-[var(--color-gold)]/5 to-transparent blur-3xl scale-110" />
                </div>

                {/* Perfume card */}
                <div className="absolute right-4 top-4 w-44 h-60 rounded-2xl bg-[var(--color-navy-800)]/60 backdrop-blur-md shadow-2xl p-3 rotate-6 hover:rotate-3 transition-transform duration-500 group">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" src={IMGS.perfume} alt="Perfume importado" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06101f]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
                      <span className="font-[var(--font-mono)] text-[10px] tracking-wider text-[var(--color-gold)]">PARFUM EXTRACT</span>
                      <span className="font-[var(--font-mono)] text-[9px] text-[var(--color-text)]/60">100ml</span>
                    </div>
                  </div>
                </div>

                {/* Watch card */}
                <div className="absolute left-8 top-16 w-52 h-64 rounded-2xl bg-[var(--color-navy-800)]/70 backdrop-blur-lg shadow-2xl p-3 -rotate-6 hover:-rotate-2 transition-transform duration-500 z-10 group">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" src={IMGS.watch} alt="Smartwatch Garmin" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06101f]/95 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                      <div>
                        <p className="font-[var(--font-mono)] text-[9px] text-[var(--color-text)]/60">SMARTWATCH</p>
                        <p className="font-[var(--font-mono)] text-[13px] text-[var(--color-gold)] font-bold">GARMIN FORERUNNER</p>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    </div>
                  </div>
                </div>

                {/* iPhone card (foreground) */}
                <div className="absolute left-20 bottom-2 w-64 h-72 rounded-2xl bg-[var(--color-navy-800)]/90 backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(6,16,31,0.95)] p-3 rotate-1 hover:rotate-0 transition-transform duration-500 z-20 group">
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700" src={IMGS.iphone} alt="iPhone 16 Pro Max" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06101f] via-[#06101f]/30 to-transparent" />
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#06101f]/80 backdrop-blur-md">
                      <span className="font-[var(--font-mono)] text-[10px] text-[var(--color-gold)] uppercase font-bold">Titanium</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div>
                        <span className="font-[var(--font-mono)] text-[10px] text-[var(--color-text)]/60 uppercase tracking-wider block">Apple Flagship</span>
                        <span className="font-[var(--font-mono)] text-[16px] text-[var(--color-text)] font-bold">iPhone 16 Pro Max</span>
                      </div>
                      <div className="text-right">
                        <span className="font-[var(--font-mono)] text-[10px] text-[var(--color-gold)] font-bold block">Pronta Entrega</span>
                        <span className="font-[var(--font-mono)] text-sm text-[var(--color-gold)]">18x R$ 499</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-3 left-1/3 z-30 px-3.5 py-1.5 rounded-full bg-[#101f3a]/90 backdrop-blur-md shadow-xl flex items-center gap-2 -translate-x-1/2 hover:scale-105 transition-transform duration-200">
                  <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text)] font-semibold tracking-wide">18x s/ juros</span>
                </div>
                <div className="absolute bottom-8 -right-3 z-30 px-3.5 py-1.5 rounded-full bg-[#101f3a]/90 backdrop-blur-md shadow-xl flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text)] font-semibold tracking-wide">Garantia 1 Ano</span>
                </div>
                <div className="absolute -bottom-2 left-6 z-30 px-3.5 py-1.5 rounded-full bg-[#101f3a]/90 backdrop-blur-md shadow-xl flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shadow-[0_0_6px_rgba(212,168,67,0.8)]" />
                  <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text)] font-semibold tracking-wide">Original Lacrado</span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />
        </section>

        {/* ═══ PRODUTOS EM DESTAQUE ═══ */}
        <Section id="produtos" className="w-full bg-[#06101f] py-[140px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
            <div className="text-left">
              <span className="font-[var(--font-body)] font-semibold text-xs text-[var(--color-gold)] uppercase tracking-[3px] block">
                DESTAQUES
              </span>
              <h2 className="mt-3 font-[var(--font-display)] font-semibold text-[40px] text-[var(--color-text)] leading-tight">
                Os mais procurados da loja.
              </h2>
              <p className="mt-2 font-[var(--font-body)] text-[16px] text-[var(--color-text-secondary)]">
                Todos com garantia, nota fiscal e parcelamento.
              </p>
            </div>

            {/* iPhone Hero Card */}
            <div className="mt-16 bg-[var(--color-navy-800)] rounded-3xl border border-[var(--color-gold)]/[0.15] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
              <div className="w-full lg:w-[55%] relative min-h-[440px] flex items-center justify-center overflow-hidden bg-[#081426]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,67,0.06)_0%,transparent_70%)]" />
                <img
                  className="relative z-10 w-full h-full min-h-[440px] object-cover object-center"
                  src={IMGS.iphoneProd}
                  alt="iPhone 18 Pro Max"
                />
              </div>
              <div className="w-full lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center items-start">
                <span className="rounded-lg bg-[var(--color-gold)]/[0.12] border border-[var(--color-gold)]/20 px-4 py-1.5 text-[11px] font-[var(--font-mono)] font-semibold text-[var(--color-gold)] uppercase tracking-wider">
                  LANÇAMENTO
                </span>
                <h3 className="mt-4 font-[var(--font-display)] font-semibold text-[32px] text-[var(--color-text)]">
                  iPhone 18 Pro Max
                </h3>
                <p className="mt-2 font-[var(--font-body)] text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  256GB · Titânio Natural · Câmera 48MP · Tela 6.9" OLED
                </p>
                <div className="mt-8">
                  <span className="font-[var(--font-mono)] font-bold text-[34px] text-[var(--color-gold)] leading-none block">
                    R$ 10.999
                  </span>
                  <span className="mt-1 font-[var(--font-body)] text-sm text-[var(--color-text-secondary)] block">
                    ou 18x de R$ 611
                  </span>
                </div>
                <a
                  href="https://wa.me/5510991515253?text=Oi%2C+tenho+interesse+no+iPhone+18+Pro+Max"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[#06101f] font-[var(--font-body)] font-semibold text-[15px] px-8 py-3.5 rounded-xl transition-all shadow-lg"
                >
                  Tenho interesse →
                </a>
              </div>
            </div>

            {/* Secondary product cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'PlayStation 5', spec: 'Digital · 1TB SSD', price: 'R$ 3.999', parcel: 'ou 18x de R$ 222', img: IMGS.ps5 },
                { name: 'Garmin Forerunner 165', spec: 'GPS · Cardíaco · AMOLED', price: 'R$ 1.899', parcel: 'ou 18x de R$ 105', img: IMGS.garmin },
                { name: 'Fones Bluetooth Pro', spec: 'ANC · 36h bateria · IPX5', price: 'R$ 449', parcel: 'ou 12x de R$ 37', img: IMGS.fones },
              ].map((p) => (
                <div
                  key={p.name}
                  className="bg-[var(--color-navy-700)] rounded-[20px] border border-[var(--color-gold)]/[0.08] overflow-hidden flex flex-col hover:border-[var(--color-gold)]/30 transition-all duration-300 group"
                >
                  <div className="bg-[var(--color-navy-800)] p-10 h-[240px] flex items-center justify-center overflow-hidden">
                    <img className="max-h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src={p.img} alt={p.name} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="font-[var(--font-body)] font-semibold text-[17px] text-[var(--color-text)]">{p.name}</h4>
                      <p className="mt-1 font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">{p.spec}</p>
                    </div>
                    <div className="mt-4">
                      <div className="font-[var(--font-mono)] font-bold text-[22px] text-[var(--color-gold)]">{p.price}</div>
                      <div className="mt-0.5 font-[var(--font-body)] text-xs text-[var(--color-text-secondary)]">{p.parcel}</div>
                      <a href="https://wa.me/5510991515253" target="_blank" rel="noopener noreferrer" className="mt-4 font-[var(--font-body)] font-medium text-[13px] text-[var(--color-gold)] hover:text-[var(--color-gold-light)] inline-flex items-center gap-1 transition-colors">
                        Ver detalhes →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ EDITORIAL FULL-BLEED ═══ */}
        <section className="relative w-full h-[500px] overflow-hidden select-none">
          <motion.img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={IMGS.editorial}
            alt="Detalhe smartphone"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <div className="absolute inset-0 bg-[#06101f]/70" />
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 text-center">
            <motion.h2
              className="font-[var(--font-display)] font-bold text-5xl text-[var(--color-text)] tracking-tight leading-tight max-w-[800px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Cada detalhe importa.
            </motion.h2>
            <motion.p
              className="mt-4 font-[var(--font-body)] text-lg text-[var(--color-text)]/70 max-w-[560px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Só trabalhamos com produtos originais. Sem imitação, sem surpresa.
            </motion.p>
          </div>
        </section>

        {/* ═══ SOBRE ═══ */}
        <Section id="sobre" className="w-full bg-[#06101f] py-[140px] overflow-hidden">
          <div className="w-full flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 pr-0">
              <div className="w-full overflow-hidden rounded-r-3xl max-h-[640px] shadow-2xl">
                <img
                  className="w-full h-full max-h-[640px] aspect-[3/4] object-cover object-center"
                  src={IMGS.sobre}
                  alt="Interior da loja Kobayashi"
                />
              </div>
            </div>
            <div className="w-full lg:w-[45%] px-6 md:px-10 lg:px-0 lg:pl-20 mt-12 lg:mt-0 flex flex-col justify-center items-start">
              <div className="flex items-center gap-3">
                <span className="w-10 h-0.5 bg-[var(--color-gold)] block" />
                <span className="font-[var(--font-body)] font-medium text-xs text-[var(--color-gold)] uppercase tracking-[3px]">
                  Nossa história
                </span>
              </div>
              <h3 className="mt-5 font-[var(--font-display)] font-semibold text-[34px] text-[var(--color-text)] leading-[1.25]">
                Tecnologia de verdade pra quem não aceita menos.
              </h3>
              <p className="mt-6 font-[var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-[1.75] max-w-[440px]">
                A Kobayashi Imports nasceu pra resolver um problema simples: quem mora no interior não deveria ter que ir até a capital pra comprar um celular bom pelo preço justo. Hoje, a loja é referência em Mirandópolis — com quase dois mil seguidores que confiam na procedência, no parcelamento honesto e no atendimento de quem conhece cada produto que vende.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-12">
                {[
                  { value: '1.900+', label: 'seguidores' },
                  { value: '18x', label: 'sem juros' },
                  { value: '100%', label: 'original' },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="font-[var(--font-mono)] font-bold text-[28px] text-[var(--color-gold)] leading-none">{s.value}</span>
                    <span className="mt-2 font-[var(--font-body)] text-xs text-[var(--color-text-secondary)] uppercase tracking-[1px]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ═══ CATEGORIAS ═══ */}
        <Section className="w-full bg-[var(--color-navy-800)] py-[140px]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20">
            <h2 className="font-[var(--font-display)] font-semibold text-4xl text-[var(--color-text)] text-left leading-tight">
              O que você encontra aqui
            </h2>
            <div className="mt-12 flex flex-col gap-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 h-[320px] bg-[var(--color-navy-700)] rounded-[20px] border border-[var(--color-gold)]/[0.06] overflow-hidden flex flex-row group hover:border-[var(--color-gold)]/30 transition-all duration-300">
                  <div className="w-1/2 h-full overflow-hidden bg-[#081426]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={IMGS.catCelulares} alt="Celulares" />
                  </div>
                  <div className="w-1/2 p-10 flex flex-col justify-center items-start">
                    <h3 className="font-[var(--font-display)] font-semibold text-[26px] text-[var(--color-text)]">Celulares</h3>
                    <p className="mt-2 font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)] leading-[1.6]">iPhone, Xiaomi, Samsung. Últimos lançamentos com nota fiscal e garantia de fábrica.</p>
                    <a href="https://wa.me/5510991515253" target="_blank" rel="noopener noreferrer" className="mt-5 font-[var(--font-body)] font-medium text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors inline-flex items-center gap-1">Explorar →</a>
                  </div>
                </div>
                <div className="lg:col-span-5 h-[320px] bg-[var(--color-navy-700)] rounded-[20px] border border-[var(--color-gold)]/[0.06] overflow-hidden flex flex-col group hover:border-[var(--color-gold)]/30 transition-all duration-300">
                  <div className="w-full h-[150px] overflow-hidden bg-[#081426]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={IMGS.catPerfumes} alt="Perfumes" />
                  </div>
                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-[var(--font-display)] font-semibold text-[22px] text-[var(--color-text)]">Perfumes</h3>
                      <p className="mt-1 font-[var(--font-body)] text-sm text-[var(--color-text-secondary)]">Fragrâncias originais importadas. Masculino e feminino.</p>
                    </div>
                    <a href="https://wa.me/5510991515253" target="_blank" rel="noopener noreferrer" className="mt-3 font-[var(--font-body)] font-medium text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors inline-flex items-center gap-1">Explorar →</a>
                  </div>
                </div>
              </div>
              {/* Row 2 (inverted) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 h-[320px] bg-[var(--color-navy-700)] rounded-[20px] border border-[var(--color-gold)]/[0.06] overflow-hidden flex flex-col group hover:border-[var(--color-gold)]/30 transition-all duration-300">
                  <div className="w-full h-[150px] overflow-hidden bg-[#081426]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={IMGS.catRelogios} alt="Relógios" />
                  </div>
                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-[var(--font-display)] font-semibold text-[22px] text-[var(--color-text)]">Relógios</h3>
                      <p className="mt-1 font-[var(--font-body)] text-sm text-[var(--color-text-secondary)]">Garmin, smartwatches e clássicos importados.</p>
                    </div>
                    <a href="https://wa.me/5510991515253" target="_blank" rel="noopener noreferrer" className="mt-3 font-[var(--font-body)] font-medium text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors inline-flex items-center gap-1">Explorar →</a>
                  </div>
                </div>
                <div className="lg:col-span-7 h-[320px] bg-[var(--color-navy-700)] rounded-[20px] border border-[var(--color-gold)]/[0.06] overflow-hidden flex flex-row group hover:border-[var(--color-gold)]/30 transition-all duration-300">
                  <div className="w-1/2 h-full overflow-hidden bg-[#081426]">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={IMGS.catEletronicos} alt="Eletrônicos" />
                  </div>
                  <div className="w-1/2 p-10 flex flex-col justify-center items-start">
                    <h3 className="font-[var(--font-display)] font-semibold text-[26px] text-[var(--color-text)]">Eletrônicos</h3>
                    <p className="mt-2 font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)] leading-[1.6]">PS5, fones Bluetooth, scooters elétricas e acessórios que fazem diferença.</p>
                    <a href="https://wa.me/5510991515253" target="_blank" rel="noopener noreferrer" className="mt-5 font-[var(--font-body)] font-medium text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors inline-flex items-center gap-1">Explorar →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ═══ CTA FINAL ═══ */}
        <Section id="contato" className="w-full bg-[#06101f] py-[120px] border-t border-[var(--color-gold)]/[0.06]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 flex flex-col items-center text-center">
            <h2 className="font-[var(--font-display)] font-bold text-[52px] text-[var(--color-text)] leading-[1.1] max-w-[800px]">
              Achou o que procurava?
            </h2>
            <p className="mt-5 font-[var(--font-body)] text-lg text-[var(--color-text-secondary)] max-w-[460px] leading-relaxed">
              Chama no WhatsApp, manda o modelo que quer e a gente resolve.
            </p>
            <a
              href="https://wa.me/5510991515253?text=Oi%2C+vi+o+site+da+Kobayashi+e+quero+saber+mais"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[#06101f] font-[var(--font-body)] font-semibold text-[16px] px-11 py-[18px] rounded-xl transition-all shadow-[0_4px_24px_rgba(212,168,67,0.25)] hover:shadow-[0_8px_32px_rgba(212,168,67,0.45)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chamar no WhatsApp
            </a>
            <span className="mt-4 font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)] text-center">
              (10) 99151-5253 · Respondemos rápido
            </span>
          </div>
        </Section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
