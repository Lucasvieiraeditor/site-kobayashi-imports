# DESIGN.md — Kobayashi Imports

## Identidade

Loja de importados em Mirandópolis, interior de São Paulo. Vende celulares (iPhone, Xiaomi, Samsung), perfumes, relógios e eletrônicos. Parcela em até 18x no cartão. Entrega na região. Quase 2 mil seguidores no Instagram.

## Conceito Visual

Premium futurista com DNA tech. O site precisa passar a sensação de loja confiável de importados — não camelô, não marketplace genérico. Referência: precisão editorial da Apple (produto como protagonista, espaço em branco generoso, tipografia refinada) adaptada pra um fundo escuro que remete ao universo tech/gaming/premium que a loja já usa no Instagram.

## Paleta de Cores

Extraída diretamente do Instagram da @kobayashiimports:

- **Fundo principal:** #050d1a (navy quase preto)
- **Fundo secundário:** #0a1628 (navy escuro)
- **Fundo terciário/cards:** #0f1f38 (navy médio)
- **Superfície elevada:** #162a4a (navy claro)
- **Acento primário:** #ffd700 (dourado/gold — cor dominante nos posts)
- **Acento secundário:** #ffe44d (dourado claro, pra hover/destaque)
- **Texto principal:** #e8edf5 (branco suave)
- **Texto secundário:** #8b95a8 (cinza azulado)
- **Texto sobre acento:** #050d1a (navy escuro sobre gold)
- **Borda sutil:** rgba(255, 215, 0, 0.12) (gold 12% pra hairlines)
- **Gradiente hero:** linear-gradient(135deg, #0a1628 0%, #162a4a 50%, #0f1f38 100%)

## Tipografia

- **Headlines:** "Outfit", sans-serif — geométrica, moderna, boa legibilidade em peso bold sobre fundo escuro. Não é batida como Inter/Roboto.
- **Corpo:** "DM Sans", sans-serif — complementa a Outfit com boa leitura em tamanhos menores.
- **Detalhe/label:** "JetBrains Mono", monospace — pra preços, specs técnicas, badges. Dá o toque tech.

### Escala tipográfica

- Hero display: 64px / weight 700 / line-height 1.05 / letter-spacing -1.5px
- Display: 48px / weight 600 / line-height 1.1 / letter-spacing -0.5px
- Heading: 32px / weight 600 / line-height 1.2
- Subheading: 24px / weight 500 / line-height 1.3
- Body: 17px / weight 400 / line-height 1.6
- Caption/label: 13px / weight 500 / line-height 1.4 / letter-spacing 0.5px / uppercase
- Preço: 28px / weight 700 / monospace / gold

## Espaçamento

- Container máximo: 1200px, centrado
- Padding lateral: 64px desktop, 24px mobile
- Espaço entre seções: 120px desktop, 80px mobile
- Gap de grid de produtos: 24px
- Padding interno de card: 32px
- Border-radius dos cards: 16px
- Border-radius dos botões: 12px

## Componentes-chave

### Cards de produto
- Fundo #0f1f38 com borda 1px rgba(255,215,0,0.08)
- Hover: borda sobe pra rgba(255,215,0,0.25), sutil box-shadow gold
- Imagem do produto centralizada, sem fundo, com leve glow por trás
- Nome em Outfit 600, preço em JetBrains Mono gold, badge de parcela

### Botões
- Primário: fundo #ffd700, texto #050d1a, weight 600, hover escurece pra #e6c200
- Secundário: borda 1px #ffd700, texto #ffd700, fundo transparente, hover preenche

### Header
- Transparente com backdrop-blur, fixo no topo
- Logo à esquerda, nav ao centro, CTA WhatsApp à direita
- Borda inferior 1px rgba(255,215,0,0.08)

### WhatsApp CTA
- Botão flutuante canto inferior direito
- Ícone WhatsApp + texto "Faça seu pedido"
- Fundo #25D366, border-radius 50px

## Efeitos e Motion

- Reveal on scroll com translateY(30px) → 0 + opacity 0 → 1, ease-out 0.6s
- Cards de produto com hover scale(1.02) + border glow
- Hero com partículas sutis ou grid animado no fundo (efeito tech/futurista)
- Parallax leve nas imagens de produto do hero
- Transição de página suave

## Princípios

1. Produto é protagonista — fundo escuro faz o produto brilhar
2. Gold com parcimônia — acento, nunca fundo inteiro
3. Espaço generoso — respira como Apple, não empilha como marketplace
4. Tipografia com hierarquia clara — headline > subhead > body > caption
5. Mobile-first — 60%+ do público vem do Instagram, ou seja, celular
