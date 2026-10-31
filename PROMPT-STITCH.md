# PROMPT-STITCH.md — Kobayashi Imports (v2 — reescrito)

## Informações do projeto

- **Tipo:** FICTÍCIO — preview pra convencer o dono a contratar
- **Negócio:** Kobayashi Imports — loja de importados em Mirandópolis/SP (interior)
- **Produtos principais:** celulares (iPhone, Xiaomi, Samsung), perfumes, relógios, eletrônicos (PS5, fones, scooter elétrica)
- **Diferenciais:** parcela em até 18x no cartão, entrega na região, quase 2 mil seguidores no Instagram
- **WhatsApp:** wa.me/message/GCG2U1RIDUQM1
- **Instagram:** @kobayashiimports
- **Conceito:** premium futurista com fotografia cinematográfica como protagonista. Inspiração Ferrari (hero full-bleed, editorial generoso) + Apple (produto respira no espaço). Navy + gold.

## O que mudou da v1

A v1 gerou um site genérico: hero sem imagem (muro preto), 4 cards idênticos repetidos duas vezes, zero fotografia, zero quebra de ritmo. Esta v2 trata cada seção como peça editorial — com imagens descritas pra o Stitch gerar, layouts variados entre seções, e direção visual específica em vez de spec de wireframe.

---

## Blocos reutilizáveis (referência — já estão embutidos em cada prompt de tela abaixo)

### Bloco de Estilo

Paleta escura premium: fundo principal #06101f (navy profundo), fundo secundário #0b1a30, superfície de cards #101f3a, superfície elevada #18294a, acento principal #d4a843 (gold quente, não amarelo neon — mais luxo, menos eletrônico), acento claro #e8c468, texto principal #edf0f7, texto secundário #7a8599, hairline rgba(212,168,67,0.10). Tipografia: headlines em "Playfair Display" (Google Fonts, peso 500-700 — serifada elegante pra títulos grandes, contrasta com o tema tech e quebra a monotonia sans-serif), corpo e navegação em "DM Sans" (peso 400-500), preços e specs técnicas em "Space Mono" (monospace, peso 700, cor gold). Container 1200px, padding lateral 80px desktop / 24px mobile, espaço entre seções 140px. Border-radius: cards 20px, botões 12px, imagens de produto 16px. Botão primário: fundo #d4a843, texto #06101f, peso 600, hover escurece 10%. Botão ghost: sem fundo, sem borda, texto #d4a843, underline offset 4px no hover.

### Bloco de Cabeçalho

Barra fixa no topo, altura 80px, fundo transparente (fica translúcido rgba(6,16,31,0.9) + backdrop-blur 24px ao rolar). Borda inferior: nenhuma — aparece só ao rolar, 1px rgba(212,168,67,0.06). Logo à esquerda: texto "KOBAYASHI" em DM Sans peso 700 tamanho 18px cor #d4a843 letter-spacing 4px uppercase, nenhum subtítulo. Navegação à direita (não ao centro): links "Produtos", "Sobre", "Contato" em DM Sans peso 400 tamanho 14px cor #7a8599 letter-spacing 0.5px, gap 48px, hover muda pra #edf0f7 (não pro gold — gold é só pro acento de ação). Último elemento: link "WhatsApp" com seta →, DM Sans peso 500 tamanho 14px cor #d4a843.

### Bloco de Rodapé

Fundo #050e1a (mais escuro que o body), padding 100px 80px. Layout: 2 colunas desiguais. Coluna esquerda (60%): logotipo "KOBAYASHI" em Playfair Display peso 700 tamanho 36px cor #d4a843, abaixo parágrafo "Importados com procedência, garantia e parcelamento. Mirandópolis e região." em DM Sans peso 400 tamanho 15px cor #7a8599 line-height 1.7, max-width 380px. Abaixo: linha com ícones de Instagram e WhatsApp (ícones simples 20px cor #7a8599, hover #d4a843, gap 20px). Coluna direita (40%): 2 sub-colunas. Sub-coluna 1: label "Menu" em DM Sans peso 600 tamanho 12px cor #edf0f7 uppercase letter-spacing 2px margin-bottom 20px, links: "Produtos", "Sobre", "Contato" em DM Sans peso 400 tamanho 14px cor #7a8599 gap vertical 14px. Sub-coluna 2: label "Contato" mesmo estilo, "Mirandópolis — SP", "(10) 99151-5253", "@kobayashiimports" em DM Sans peso 400 tamanho 14px cor #7a8599 gap vertical 14px. Abaixo de tudo: sem linha separadora, só "© 2026 Kobayashi Imports" em DM Sans peso 400 tamanho 12px cor rgba(122,133,153,0.5) margin-top 60px.

---

## PROMPT TELA 1 — HERO

```
[DESIGN SYSTEM & GEOMETRIA]

Layout desktop 1440px de largura. Paleta escura premium: fundo principal #06101f (navy profundo), fundo secundário #0b1a30, superfície de cards #101f3a, superfície elevada #18294a, acento principal #d4a843 (gold quente, não amarelo neon), acento claro #e8c468, texto principal #edf0f7, texto secundário #7a8599, hairline rgba(212,168,67,0.10). Tipografia: headlines em "Playfair Display" (Google Fonts, peso 500-700, serifada elegante), corpo e navegação em "DM Sans" (peso 400-500), preços em "Space Mono" (monospace, peso 700, cor gold). Container 1200px centrado, padding lateral 80px. Border-radius: cards 20px, botões 12px. Botão primário: fundo #d4a843, texto #06101f, peso 600.

[CABECALHO]

Barra fixa no topo, altura 80px, fundo transparente sobre a imagem do hero (sem backdrop-blur neste estado — fica translúcido só ao rolar). Logo à esquerda: "KOBAYASHI" em DM Sans peso 700 tamanho 18px cor #d4a843 letter-spacing 4px uppercase. Navegação à direita: links "Produtos", "Sobre", "Contato" em DM Sans peso 400 tamanho 14px cor rgba(237,240,247,0.7) gap 48px. Último: "WhatsApp →" em DM Sans peso 500 tamanho 14px cor #d4a843.

[CORPO DA PAGINA]

SEÇÃO HERO — ocupa 100% da viewport (altura 100vh), é a primeira coisa que o visitante vê.

IMAGEM DE FUNDO FULL-BLEED: fotografia cinematográfica em tela cheia de uma vitrine premium de loja de tecnologia à noite — vidro escuro refletindo luzes douradas, smartphones expostos em pedestais iluminados por baixo, ambiente sofisticado com iluminação low-key. A foto cobre os 100vh inteiros, edge-to-edge, sem margem. Overlay de gradiente por cima da foto: gradiente vertical de rgba(6,16,31,0) no topo para rgba(6,16,31,0.95) no bottom (a foto clareia no topo e escurece embaixo, onde fica o texto).

CONTEÚDO DO HERO posicionado no terço inferior da tela (alinhado à esquerda dentro do container de 1200px, não centralizado):

Headline em duas linhas: "O que há de melhor" em Playfair Display peso 400 tamanho 56px cor #edf0f7 line-height 1.15, e "chega primeiro aqui." na segunda linha em Playfair Display peso 700 tamanho 56px cor #d4a843 line-height 1.15. Letter-spacing -0.5px.

Parágrafo logo abaixo (margin-top 24px): "Celulares, relógios e perfumes importados com nota fiscal, garantia real e parcelamento em até 18x. Mirandópolis e região." em DM Sans peso 400 tamanho 18px cor rgba(237,240,247,0.75) max-width 480px line-height 1.7.

Dois botões lado a lado (margin-top 36px, gap 16px): "Ver Produtos" (fundo #d4a843, texto #06101f, DM Sans peso 600 tamanho 15px, padding 16px 36px, border-radius 12px) e "Falar no WhatsApp" (sem fundo, sem borda, DM Sans peso 500 tamanho 15px cor #d4a843, com seta → depois do texto).

NO LADO DIREITO do hero (alinhado ao terço direito da tela, flutuando sobre a foto), renderizar uma composição de 3 produtos sobrepostos com profundidade: um iPhone inclinado em primeiro plano, um relógio Garmin levemente atrás e acima, e um frasco de perfume atrás. Cada produto com sombra sutil e glow dourado suave por trás (rgba(212,168,67,0.08) radial). Os produtos devem parecer flutuar sobre o fundo fotográfico.

[RODAPE]

Será renderizado no último prompt.

Com base em todo o sistema de design e seções detalhadas acima, renderize a interface visual completa (layout desktop 1440px) no Canvas, exibindo todas as seções, cards, componentes e botões.
```

---

## PROMPT TELA 2 — PRODUTOS EM DESTAQUE

```
[DESIGN SYSTEM & GEOMETRIA]

Layout desktop 1440px. Paleta escura premium: fundo principal #06101f, fundo secundário #0b1a30, superfície de cards #101f3a, superfície elevada #18294a, acento #d4a843 (gold quente), texto principal #edf0f7, texto secundário #7a8599, hairline rgba(212,168,67,0.10). Headlines em "Playfair Display" (serifada, peso 500-700), corpo em "DM Sans" (peso 400-500), preços em "Space Mono" (monospace, peso 700, cor gold). Container 1200px, padding 80px. Cards border-radius 20px, botões 12px. Botão primário: fundo #d4a843, texto #06101f. Botão ghost: texto #d4a843, sem fundo, sem borda.

[CABECALHO]

Já renderizado no prompt anterior.

[CORPO DA PAGINA]

SEÇÃO — PRODUTOS EM DESTAQUE (fundo #06101f, padding vertical 140px):

No topo da seção, alinhado à esquerda: texto "Destaques" em DM Sans peso 600 tamanho 12px cor #d4a843 uppercase letter-spacing 3px. Abaixo (margin-top 12px): headline "Os mais procurados da loja." em Playfair Display peso 600 tamanho 40px cor #edf0f7. Abaixo (margin-top 8px): sub-texto "Todos com garantia, nota fiscal e parcelamento." em DM Sans peso 400 tamanho 16px cor #7a8599.

PRODUTO DESTAQUE PRINCIPAL (margin-top 60px): layout horizontal full-width, fundo #0b1a30, border-radius 24px, overflow hidden. Lado esquerdo (55%): fotografia de um iPhone 18 Pro Max em ângulo 3/4, flutuando sobre fundo escuro com reflexo sutil embaixo e glow radial dourado leve (rgba(212,168,67,0.06)) por trás do aparelho. A foto preenche toda a metade esquerda do card. Lado direito (45%): padding 60px. Badge no topo: retângulo arredondado fundo rgba(212,168,67,0.12) padding 6px 16px border-radius 8px, texto "Lançamento" em Space Mono peso 600 tamanho 11px cor #d4a843 uppercase. Abaixo: nome "iPhone 18 Pro Max" em Playfair Display peso 600 tamanho 32px cor #edf0f7. Abaixo: specs "256GB · Titânio Natural · Câmera 48MP · Tela 6.9" OLED" em DM Sans peso 400 tamanho 14px cor #7a8599 line-height 1.6. Abaixo (margin-top 32px): preço "R$ 10.999" em Space Mono peso 700 tamanho 34px cor #d4a843. Abaixo: "ou 18x de R$ 611" em DM Sans peso 400 tamanho 14px cor #7a8599. Botão (margin-top 28px): "Tenho interesse →" fundo #d4a843 texto #06101f DM Sans peso 600 tamanho 15px padding 14px 32px border-radius 12px.

GRID DE 3 PRODUTOS MENORES (margin-top 32px, gap 24px):

Cada card: fundo #101f3a, border-radius 20px, borda 1px rgba(212,168,67,0.06). Parte superior: área de imagem com fundo #0b1a30, padding 40px, altura 240px. O produto renderizado como fotografia flutuando no centro com sombra sutil e glow radial dourado leve por trás. Parte inferior: padding 28px 24px. Nome em DM Sans peso 600 tamanho 17px cor #edf0f7. Specs em DM Sans peso 400 tamanho 13px cor #7a8599 margin-top 4px. Preço em Space Mono peso 700 tamanho 22px cor #d4a843 margin-top 16px. Parcela em DM Sans peso 400 tamanho 12px cor #7a8599. Link "Ver detalhes →" sem borda, DM Sans peso 500 tamanho 13px cor #d4a843 margin-top 16px.

Card 1: imagem de PlayStation 5 branco, "PlayStation 5", "Digital · 1TB SSD", "R$ 3.999", "ou 18x de R$ 222".
Card 2: imagem de Garmin Forerunner 165 com pulseira preta e tela AMOLED acesa mostrando dados de corrida, "Garmin Forerunner 165", "GPS · Cardíaco · AMOLED", "R$ 1.899", "ou 18x de R$ 105".
Card 3: imagem de fones Bluetooth brancos estilo AirPods em case aberto, "Fones Bluetooth Pro", "ANC · 36h bateria · IPX5", "R$ 449", "ou 12x de R$ 37".

[RODAPE]

Será renderizado no último prompt.

Com base em todo o sistema de design e seções detalhadas acima, renderize a interface visual completa (layout desktop 1440px) no Canvas, exibindo todas as seções, cards, componentes e botões.
```

---

## PROMPT TELA 3 — SEÇÃO SURPRESA (full-bleed) + SOBRE

```
[DESIGN SYSTEM & GEOMETRIA]

Layout desktop 1440px. Paleta escura premium: fundo principal #06101f, fundo secundário #0b1a30, superfície de cards #101f3a, acento #d4a843 (gold quente), texto principal #edf0f7, texto secundário #7a8599. Headlines em "Playfair Display" (serifada, peso 500-700), corpo em "DM Sans" (peso 400-500), dados em "Space Mono" (monospace). Container 1200px, padding 80px.

[CABECALHO]

Já renderizado.

[CORPO DA PAGINA]

SEÇÃO SURPRESA — FAIXA FULL-BLEED (largura 100% da viewport, sem container, sem padding lateral — vai de borda a borda):

Fundo: fotografia full-bleed de close-up de mãos segurando um smartphone premium com tela acesa, ambiente escuro com iluminação quente dourada lateral. A foto ocupa 100% da largura e tem altura de 500px. Overlay gradiente escuro por cima: rgba(6,16,31,0.7) uniforme pra manter legibilidade.

Sobre a foto, centralizado, textos sobrepostos: frase "Cada detalhe importa." em Playfair Display peso 700 tamanho 48px cor #edf0f7 letter-spacing -0.5px. Abaixo: "Só trabalhamos com produtos originais. Sem imitação, sem surpresa." em DM Sans peso 400 tamanho 18px cor rgba(237,240,247,0.7). Não tem botão, não tem CTA — é uma pausa editorial visual que quebra o ritmo da página.

SEÇÃO — SOBRE A KOBAYASHI (fundo #06101f, padding vertical 140px):

Layout assimétrico: NÃO é split 50/50. É uma composição editorial com imagem dominante.

IMAGEM (lado esquerdo, 50% da largura): fotografia de interior de loja de tecnologia premium — balcão de vidro iluminado com produtos expostos (smartphones, relógios), ambiente clean com iluminação pontual dourada, piso escuro, prateleiras ao fundo com caixas organizadas. Border-radius 24px no canto superior direito e inferior direito (cantos esquerdos retos — a imagem sangra pra fora do container à esquerda, colando na borda da viewport). Aspect-ratio 3:4.

TEXTO (lado direito, 45% da largura, padding-left 80px, alinhado verticalmente ao centro da imagem):

Label: linha horizontal de 40px cor #d4a843 (hairline decorativa, não texto), seguida de "Nossa história" em DM Sans peso 500 tamanho 12px cor #d4a843 uppercase letter-spacing 3px, na mesma linha.

Headline (margin-top 20px): "Tecnologia de verdade pra quem não aceita menos." em Playfair Display peso 600 tamanho 34px cor #edf0f7 line-height 1.25.

Parágrafo (margin-top 24px): "A Kobayashi Imports nasceu pra resolver um problema simples: quem mora no interior não deveria ter que ir até a capital pra comprar um celular bom pelo preço justo. Hoje, a loja é referência em Mirandópolis — com quase dois mil seguidores que confiam na procedência, no parcelamento honesto e no atendimento de quem conhece cada produto que vende." em DM Sans peso 400 tamanho 16px cor #7a8599 line-height 1.75 max-width 440px.

3 indicadores inline (margin-top 40px, dispostos em linha horizontal, gap 48px): cada um é um número em Space Mono peso 700 tamanho 28px cor #d4a843, com label abaixo em DM Sans peso 400 tamanho 12px cor #7a8599 uppercase letter-spacing 1px. Indicador 1: "1.900+" / "seguidores". Indicador 2: "18x" / "sem juros". Indicador 3: "100%" / "original".

[RODAPE]

Será renderizado no próximo prompt.

Com base em todo o sistema de design e seções detalhadas acima, renderize a interface visual completa (layout desktop 1440px) no Canvas, exibindo todas as seções, cards, componentes e botões.
```

---

## PROMPT TELA 4 — CATEGORIAS + CTA + RODAPÉ

```
[DESIGN SYSTEM & GEOMETRIA]

Layout desktop 1440px. Paleta escura premium: fundo principal #06101f, fundo secundário #0b1a30, superfície de cards #101f3a, superfície elevada #18294a, acento #d4a843 (gold quente), texto principal #edf0f7, texto secundário #7a8599, hairline rgba(212,168,67,0.10). Headlines em "Playfair Display" (serifada, peso 500-700), corpo em "DM Sans" (peso 400-500), dados em "Space Mono" (monospace, peso 700, cor gold). Container 1200px, padding 80px. Cards 20px border-radius.

[CABECALHO]

Já renderizado.

[CORPO DA PAGINA]

SEÇÃO — CATEGORIAS (fundo #0b1a30, padding vertical 140px):

NÃO usar grid de 4 cards iguais (isso é o padrão genérico). Em vez disso, usar layout de mosaico assimétrico:

Layout: 2 linhas. Linha 1: card grande (60% largura) + card menor (40% largura), gap 24px. Linha 2: card menor (40% largura) + card grande (60% largura), gap 24px. Gap vertical entre linhas: 24px.

Título no topo (alinhado à esquerda): "O que você encontra aqui" em Playfair Display peso 600 tamanho 36px cor #edf0f7. Sem label acima, sem subtexto — direto e limpo.

Card grande de Celulares (60% × 320px altura): fundo #101f3a, border-radius 20px, borda 1px rgba(212,168,67,0.06). Interior em layout horizontal — lado esquerdo: fotografia de 3 smartphones empilhados em ângulo (iPhone, Samsung e Xiaomi), fundo com glow dourado sutil. Lado direito: padding 40px. Título "Celulares" em Playfair Display peso 600 tamanho 26px cor #edf0f7. Descrição "iPhone, Xiaomi, Samsung. Últimos lançamentos com nota fiscal e garantia de fábrica." em DM Sans peso 400 tamanho 15px cor #7a8599 line-height 1.6. Link "Explorar →" em DM Sans peso 500 tamanho 14px cor #d4a843 margin-top 20px.

Card menor de Perfumes (40% × 320px altura): fundo #101f3a, border-radius 20px, borda 1px rgba(212,168,67,0.06). Layout vertical. Fotografia de frascos de perfume importados em fundo escuro com iluminação lateral dourada, ocupando metade superior. Abaixo: padding 32px. "Perfumes" em Playfair Display peso 600 tamanho 22px cor #edf0f7. "Fragrâncias originais importadas. Masculino e feminino." em DM Sans peso 400 tamanho 14px cor #7a8599. "Explorar →" cor #d4a843.

Card menor de Relógios (40% × 320px): mesmo estilo do de Perfumes mas com fotografia de um smartwatch Garmin com tela AMOLED acesa em fundo escuro. "Relógios" + "Garmin, smartwatches e clássicos importados." + "Explorar →".

Card grande de Eletrônicos (60% × 320px): mesmo estilo do card grande de Celulares mas com fotografia de PS5 + fone bluetooth + scooter elétrica compostos juntos. "Eletrônicos" + "PS5, fones Bluetooth, scooters elétricas e acessórios que fazem diferença." + "Explorar →".

SEÇÃO — CTA FINAL (fundo #06101f, padding vertical 120px, border-top 1px rgba(212,168,67,0.06)):

Layout centralizado, minimalista, editorial. Sem gradiente, sem card — só tipografia com peso.

Headline em Playfair Display peso 700 tamanho 52px cor #edf0f7 text-align center line-height 1.1: "Achou o que procurava?"

Sub-texto (margin-top 20px): "Chama no WhatsApp, manda o modelo que quer e a gente resolve." em DM Sans peso 400 tamanho 18px cor #7a8599 text-align center max-width 460px margin auto.

Botão centralizado (margin-top 40px): "Chamar no WhatsApp" com ícone de WhatsApp à esquerda do texto. Fundo #d4a843, texto #06101f, DM Sans peso 600 tamanho 16px, padding 18px 44px, border-radius 12px.

Abaixo do botão (margin-top 16px): "(10) 99151-5253 · Respondemos rápido" em DM Sans peso 400 tamanho 13px cor #7a8599.

[RODAPE]

Fundo #050e1a (mais escuro que o body), padding 100px 80px. Layout: 2 colunas desiguais. Coluna esquerda (60%): logotipo "KOBAYASHI" em Playfair Display peso 700 tamanho 36px cor #d4a843, abaixo parágrafo "Importados com procedência, garantia e parcelamento. Mirandópolis e região." em DM Sans peso 400 tamanho 15px cor #7a8599 line-height 1.7, max-width 380px. Abaixo: ícones de Instagram e WhatsApp (20px, cor #7a8599, gap 20px). Coluna direita (40%): 2 sub-colunas. Sub-coluna 1: label "Menu" em DM Sans peso 600 tamanho 12px cor #edf0f7 uppercase letter-spacing 2px margin-bottom 20px, links "Produtos", "Sobre", "Contato" em DM Sans peso 400 tamanho 14px cor #7a8599 gap 14px. Sub-coluna 2: label "Contato" mesmo estilo, "Mirandópolis — SP", "(10) 99151-5253", "@kobayashiimports" em DM Sans peso 400 tamanho 14px cor #7a8599 gap 14px. Rodapé: "© 2026 Kobayashi Imports" em DM Sans peso 400 tamanho 12px cor rgba(122,133,153,0.5) margin-top 60px.

Com base em todo o sistema de design e seções detalhadas acima, renderize a interface visual completa (layout desktop 1440px) no Canvas, exibindo todas as seções, cards, componentes e botões.
```

---

## Prompts de fallback

Se o Stitch devolver só a paleta em qualquer prompt:

```
Agora renderize a tela visual completa conforme o prompt enviado.
```

Se travar depois da primeira seção de qualquer tela:

```
Continue renderizando todas as seções restantes do prompt. Mantenha: fundo #06101f/#0b1a30, acento #d4a843, Playfair Display para headlines, DM Sans para corpo, Space Mono para preços.
```

---

## Prompts de refino (um por vez, aplicar se necessário)

### Refino 1 — Gold saiu neon/amarelo em vez de dourado quente

```
A cor de acento está amarela demais. Corrija para #d4a843 (gold quente, tom de ouro envelhecido), não #ffd700 (amarelo neon). Aplique em todos os elementos de acento: botões, preços, labels, links, badges. Não altere layout nem conteúdo.
```

### Refino 2 — Hero sem fotografia de fundo

```
O hero precisa de fotografia cinematográfica full-bleed como fundo. Gere uma imagem de vitrine de loja de tecnologia premium à noite, com smartphones expostos em pedestais iluminados por baixo, iluminação low-key dourada, vidro escuro. A foto deve preencher 100vh edge-to-edge. Aplique overlay gradiente de transparente no topo para #06101f 95% no bottom. O texto fica sobre esse gradiente, no terço inferior esquerdo.
```

### Refino 3 — Tipografia não serifada nos headlines

```
Os headlines devem usar "Playfair Display" (serifada do Google Fonts), não sans-serif. É o que dá o toque premium editorial que diferencia de template genérico. "DM Sans" fica só pra corpo, navegação e labels. "Space Mono" pra preços. Não altere cores nem layout.
```

### Refino 4 — Cards de categoria saíram em grid uniforme 4x1

```
Os cards de categoria NÃO devem ser 4 retângulos iguais. Use mosaico assimétrico: 2 linhas, cada uma com card grande (60%) + card menor (40%), invertidos entre linhas. Cards grandes têm layout horizontal (foto à esquerda, texto à direita). Cards menores têm layout vertical (foto em cima, texto embaixo). Cada card tem fotografia do produto específico da categoria, não ícone genérico.
```

### Refino 5 — Faixa surpresa sem impacto

```
A faixa "Cada detalhe importa" precisa de fotografia full-bleed de close-up de mãos segurando smartphone premium com iluminação dourada lateral. Sem container, vai de borda a borda da viewport. Overlay escuro rgba(6,16,31,0.7) sobre a foto. Texto centralizado: "Cada detalhe importa." em Playfair Display 700 48px branco. Sem botão, sem CTA — é uma pausa editorial.
```

### Refino 6 — Sobre/história ficou genérico split 50/50

```
A seção "Sobre" precisa de assimetria editorial. A imagem à esquerda deve sangrar pra fora do container (cantos esquerdos retos, colando na borda da viewport; cantos direitos com border-radius 24px). O texto fica no lado direito com padding-left generoso de 80px. Inclua 3 indicadores numéricos (1.900+ seguidores, 18x sem juros, 100% original) em Space Mono abaixo do parágrafo.
```

### Refino 7 — Espaçamento apertado entre seções

```
O espaçamento vertical entre seções está muito apertado. Cada seção precisa de padding vertical de 140px (topo e bottom). O container tem max-width 1200px com padding lateral de 80px. Cards com padding interno mínimo de 32px. Não altere cores, tipografia nem conteúdo.
```

### Refino 8 — Produto destaque (iPhone) sem impacto visual

```
O card de produto destaque do iPhone precisa ocupar a largura toda do container (não 1/3). Layout horizontal: foto à esquerda (55%, iPhone em ângulo 3/4 flutuando com glow dourado sutil atrás), texto à direita (45%, com badge "Lançamento", nome em 32px, specs, preço grande em Space Mono 34px gold, botão). Fundo do card: #0b1a30, border-radius 24px.
```

---

## Sequência de execução

1. Abra o Google Stitch
2. Cole o **PROMPT TELA 1 — HERO** e espere gerar. Se devolver só paleta: mande o fallback.
3. Cole o **PROMPT TELA 2 — PRODUTOS EM DESTAQUE** e espere gerar.
4. Cole o **PROMPT TELA 3 — SEÇÃO SURPRESA + SOBRE** e espere gerar.
5. Cole o **PROMPT TELA 4 — CATEGORIAS + CTA + RODAPÉ** e espere gerar.
6. Revise e aplique os refinos que forem necessários (um por vez).
7. Baixe o zip, extraia em `C:\Site Kobayasshi Imports\site\` e me avise.
