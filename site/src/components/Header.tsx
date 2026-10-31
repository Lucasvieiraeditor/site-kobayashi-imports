import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050e1d]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <div className="h-20 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-between">
        <a
          href="/"
          className="font-[var(--font-body)] text-[15px] text-[var(--color-gold)] tracking-[4px] uppercase font-semibold select-none"
        >
          KOBAYASHI
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {['Produtos', 'Sobre', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-[var(--font-body)] text-[14px] tracking-[0.04em] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/5510991515253"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[var(--font-body)] text-[14px] tracking-[0.04em] font-medium text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors duration-200 flex items-center gap-1"
        >
          WhatsApp →
        </a>
      </div>
    </header>
  )
}
