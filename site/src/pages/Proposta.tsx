import { motion } from 'motion/react'
import { useRef } from 'react'
import { useInView } from 'motion/react'

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Proposta() {
  return (
    <div className="w-full bg-[var(--color-navy-950)] min-h-screen">
      {/* Minimal header */}
      <header className="w-full py-8 px-6 md:px-10 lg:px-20">
        <div className="max-w-[800px] mx-auto flex items-center justify-between">
          <a href="/" className="font-[var(--font-body)] text-sm text-[var(--color-gold)] tracking-[4px] uppercase font-semibold">
            KOBAYASHI
          </a>
          <span className="font-[var(--font-mono)] text-[11px] text-[var(--color-text-secondary)] uppercase tracking-wider">
            Proposta LStudio Web
          </span>
        </div>
      </header>

      <main className="max-w-[800px] mx-auto px-6 md:px-10 lg:px-20 pb-32">
        {/* ═══ ABERTURA: CONFESSA A FICÇÃO ═══ */}
        <FadeIn>
          <div className="pt-16 pb-20 border-b border-[var(--color-gold)]/[0.08]">
            <h1 className="font-[var(--font-display)] font-bold text-[36px] md:text-[44px] text-[var(--color-text)] leading-[1.15]">
              Essa loja existe.
              <br />
              <span className="text-[var(--color-gold)]">Esse site, ainda não.</span>
            </h1>
            <p className="mt-8 font-[var(--font-body)] text-lg text-[var(--color-text)]/80 leading-[1.8] max-w-[640px]">
              O site que você acabou de ver foi construído pela LStudio Web como demonstração. A Kobayashi Imports é real — os produtos, o Instagram, o parcelamento em 18x. Mas o site é nosso, feito pra mostrar como ficaria se a loja tivesse uma vitrine digital à altura do que ela já vende.
            </p>
            <p className="mt-4 font-[var(--font-body)] text-lg text-[var(--color-text)]/80 leading-[1.8] max-w-[640px]">
              E mesmo assim — mesmo sendo uma demonstração — esse site já passa mais confiança do que a maioria das lojas de importados passa hoje na internet. Isso não é um problema de produto. É um problema de vitrine.
            </p>
          </div>
        </FadeIn>

        {/* ═══ TESTES VERIFICÁVEIS ═══ */}
        <FadeIn>
          <div className="py-20 border-b border-[var(--color-gold)]/[0.08]">
            <h2 className="font-[var(--font-display)] font-semibold text-[28px] text-[var(--color-text)]">
              Faz um teste rápido.
            </h2>
            <p className="mt-3 font-[var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-[1.7]">
              Pega o celular e tenta agora:
            </p>
            <div className="mt-10 flex flex-col gap-8">
              {[
                {
                  num: '01',
                  test: 'Pesquise "loja de importados Mirandópolis" no Google.',
                  result: 'O que apareceu na primeira tela? Se não apareceu um site profissional da loja, quem pesquisou — e pesquisa todo dia — foi embora sem saber que vocês existem.',
                },
                {
                  num: '02',
                  test: 'Abra o Instagram da Kobayashi fingindo que é um cliente novo.',
                  result: 'Em quanto tempo você achou o endereço, o horário e o preço daquele iPhone que viu no story? Se demorou mais de 10 segundos, o cliente desistiu antes.',
                },
                {
                  num: '03',
                  test: 'Olhe as mensagens do direct da loja.',
                  result: 'Quantas são perguntas que um site com catálogo, preço e WhatsApp responde sozinho? Cada mensagem dessas é tempo gasto que poderia virar venda direta.',
                },
              ].map((t) => (
                <div key={t.num} className="flex gap-6">
                  <span className="font-[var(--font-mono)] text-[14px] text-[var(--color-gold)] font-bold shrink-0 pt-1">{t.num}</span>
                  <div>
                    <p className="font-[var(--font-body)] font-semibold text-[16px] text-[var(--color-text)] leading-[1.6]">{t.test}</p>
                    <p className="mt-2 font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)] leading-[1.7]">{t.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ═══ A PERDA ═══ */}
        <FadeIn>
          <div className="py-20 border-b border-[var(--color-gold)]/[0.08]">
            <h2 className="font-[var(--font-display)] font-semibold text-[28px] text-[var(--color-text)]">
              Gente que nunca chegou a saber que vocês existem.
            </h2>
            <p className="mt-4 font-[var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[640px]">
              Não estou falando de venda perdida — isso é fácil de ver. Estou falando de gente que nunca nem soube que tinha uma loja de importados séria em Mirandópolis:
            </p>
            <ul className="mt-8 flex flex-col gap-5">
              {[
                'O cara que se mudou pra cidade, pesquisou "iPhone Mirandópolis" e foi direto pro Mercado Livre porque não achou site nenhum.',
                'A pessoa de cidade vizinha que queria um presente de aniversário — perfume importado — e pediu pra amiga indicar. A amiga não lembrou porque nunca viu a loja online.',
                'O pai que ia comprar um PS5 pro filho, abriu o Google, não encontrou nada profissional e decidiu ir até Presidente Prudente.',
                'O empresário que queria comprar 5 celulares pra equipe, precisava de nota fiscal, e não encontrou nenhum lugar confiável sem sair da região.',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] mt-2.5 shrink-0" />
                  <p className="font-[var(--font-body)] text-[15px] text-[var(--color-text)]/80 leading-[1.7]">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* ═══ O QUE MUDA ═══ */}
        <FadeIn>
          <div className="py-20 border-b border-[var(--color-gold)]/[0.08]">
            <h2 className="font-[var(--font-display)] font-semibold text-[28px] text-[var(--color-text)]">
              O que um site desses muda na prática.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Google te encontra', desc: 'Quem pesquisar "importados Mirandópolis" cai direto no seu site, não no concorrente ou no Mercado Livre.' },
                { title: 'WhatsApp já chega com o pedido', desc: 'O cliente vê o produto, o preço, o parcelamento e manda mensagem sabendo o que quer. Menos conversa, mais venda.' },
                { title: 'Confiança antes do primeiro contato', desc: 'Site profissional com produto, preço e garantia visíveis. O cliente decide comprar antes de mandar mensagem.' },
                { title: 'Funciona 24 horas', desc: 'Mesmo de madrugada ou no domingo, o site está mostrando seus produtos e recebendo contatos pelo WhatsApp.' },
                { title: 'Catálogo organizado', desc: 'Celulares, perfumes, relógios, eletrônicos — cada categoria no lugar certo, com foto e preço. Sem rolar feed infinito.' },
                { title: 'Região inteira te vê', desc: 'Não é só Mirandópolis. Lavínia, Guaraçaí, Murutinga — quem pesquisar na região encontra vocês.' },
              ].map((b) => (
                <div key={b.title} className="flex flex-col">
                  <h4 className="font-[var(--font-body)] font-semibold text-[16px] text-[var(--color-gold)]">{b.title}</h4>
                  <p className="mt-2 font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)] leading-[1.7]">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ═══ PROVA QUE NÃO É MAQUETE ═══ */}
        <FadeIn>
          <div className="py-20 border-b border-[var(--color-gold)]/[0.08]">
            <h2 className="font-[var(--font-display)] font-semibold text-[28px] text-[var(--color-text)]">
              Isso aqui não é maquete.
            </h2>
            <p className="mt-4 font-[var(--font-body)] text-[16px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[640px]">
              O site que você viu não é uma imagem estática colada num slide. Volta lá e testa:
            </p>
            <ul className="mt-8 flex flex-col gap-5">
              {[
                'Clica em "Ver Produtos" — ele rola suave até a seção de produtos.',
                'Passa o mouse nos cards de produto — a imagem cresce e a borda muda de cor.',
                'Clica em "Chamar no WhatsApp" — abre o WhatsApp direto com mensagem pronta.',
                'Abre no celular — o layout se adapta sozinho, sem quebrar nada.',
                'Rola a página inteira — cada seção aparece com animação própria, não tudo de uma vez.',
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-gold)] font-bold shrink-0 pt-0.5">→</span>
                  <p className="font-[var(--font-body)] text-[15px] text-[var(--color-text)]/80 leading-[1.7]">{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)] leading-[1.7] max-w-[640px]">
              Tudo isso funciona de verdade, no celular e no computador. É um site completo, pronto pra receber visita e converter em venda.
            </p>
          </div>
        </FadeIn>

        {/* ═══ COMO FUNCIONA ═══ */}
        <FadeIn>
          <div className="py-20 border-b border-[var(--color-gold)]/[0.08]">
            <h2 className="font-[var(--font-display)] font-semibold text-[28px] text-[var(--color-text)]">
              Como funciona.
            </h2>
            <div className="mt-10 flex flex-col gap-8">
              {[
                { step: '1', title: 'A gente conversa', desc: 'Você conta quais produtos quer destacar, o tom da loja, e o que mais importa pro seu cliente.' },
                { step: '2', title: 'Eu monto o site', desc: 'Design, textos, fotos, WhatsApp integrado — tudo pronto sem você precisar fazer nada técnico.' },
                { step: '3', title: 'Você aprova', desc: 'Mostro o resultado, a gente ajusta o que precisar, e publica quando você disser que está bom.' },
                { step: '4', title: 'Site no ar', desc: 'Seu site fica online com domínio próprio, aparecendo no Google, recebendo clientes 24 horas.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-gold)]/[0.12] border border-[var(--color-gold)]/20 flex items-center justify-center shrink-0">
                    <span className="font-[var(--font-mono)] text-sm text-[var(--color-gold)] font-bold">{s.step}</span>
                  </div>
                  <div>
                    <h4 className="font-[var(--font-body)] font-semibold text-[16px] text-[var(--color-text)]">{s.title}</h4>
                    <p className="mt-1 font-[var(--font-body)] text-[15px] text-[var(--color-text-secondary)] leading-[1.7]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ═══ CTA FECHAMENTO ═══ */}
        <FadeIn>
          <div className="pt-20 flex flex-col items-center text-center">
            <h2 className="font-[var(--font-display)] font-bold text-[36px] text-[var(--color-text)] leading-[1.15]">
              Quer um site assim
              <br />
              <span className="text-[var(--color-gold)]">pra Kobayashi?</span>
            </h2>
            <p className="mt-6 font-[var(--font-body)] text-lg text-[var(--color-text-secondary)] max-w-[480px] leading-[1.7]">
              Me chama no WhatsApp. A gente conversa sem compromisso e eu mostro exatamente o que faz sentido pro seu negócio.
            </p>
            <a
              href="https://wa.me/5517981187209?text=Oi+Lucas%2C+vi+o+site+da+Kobayashi+e+quero+conversar+sobre+fazer+um+pro+meu+neg%C3%B3cio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[#06101f] font-[var(--font-body)] font-semibold text-[16px] px-11 py-[18px] rounded-xl transition-all shadow-[0_4px_24px_rgba(212,168,67,0.25)] hover:shadow-[0_8px_32px_rgba(212,168,67,0.45)] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Falar com Lucas — LStudio Web
            </a>
            <span className="mt-4 font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)]">
              (17) 98118-7209 · WhatsApp pessoal
            </span>
          </div>
        </FadeIn>
      </main>
    </div>
  )
}
