# PingoFin — direção visual da landing page

**Data da análise:** 06/10/2026.  
**Referência de composição:** [landing page da Wiser](https://app.mywiser.com.br/lp?u).  
**Identidade de origem:** [DESIGN_SYSTEM do PingoFin](../pingo-doc/DESIGN_SYSTEM.md), especialmente a direção B · Acolhedora.  
**Status:** guia para criação da landing; propostas de composição, animação e conteúdo ainda precisam de protótipo. Este documento não implementa o site nem produz os vídeos.

## 1. A direção que queremos

A landing do PingoFin deve ter o impacto visual, o ritmo de descoberta e o cuidado responsivo da referência: abertura expressiva, mascote com presença, títulos grandes, produto em destaque, trilhas de cards, alternância entre áreas escuras e claras e fechamento memorável.

A identidade continua sendo PingoFin: **roxo como protagonista, amarelo como detalhe, Manrope e Pingo em 2D**. A Wiser orienta a estrutura e a linguagem de apresentação. O design system existente orienta marca, leitura, confiança e aparência das telas financeiras.

A sensação pretendida é: **um financeiro organizado, acompanhado por um personagem próximo, em uma apresentação moderna e bem cuidada**. O visitante deve entender o benefício antes de precisar conhecer termos financeiros.

O Pingo ganha movimento e cenas próprias para a landing. Ele continua sendo o personagem já definido, com corpo de gota roxo, ponta amarela curvada, contorno escuro, olhos expressivos e rosto amigável.

## 2. Como a referência foi analisada

### Evidência disponível

- A página indicada foi aberta e seu conteúdo completo foi consultado pelo navegador.
- Houve inspeção visual em viewport **1280 × 720** do hero, da faixa de termos, dos cards ilustrados, do passo a passo e de trechos da transição para fundo claro.
- A troca entre logo claro e escuro foi observada visualmente. O comportamento do header foi complementado pela leitura do CSS e JavaScript públicos.
- Foram identificados dois vídeos na página, no hero e no encerramento, com reprodução automática, repetição, áudio desligado e reprodução inline.
- As regras responsivas, os sliders e a reorganização mobile foram analisados nos arquivos públicos de estilo e layout.
- Foram lidos os documentos de produto, arquitetura, design system, referências visuais, manifesto e validação do `sistemafinanceiro`. A prancha oficial e o PNG individual normal do Pingo também foram vistos.

### Limites da análise

O navegador deixou de responder durante a tentativa de mudar para **390 × 844**. Portanto, **não houve conferência visual completa do mobile**, nem teste real de gesto de arrastar, setas, tabs ou FAQ. As descrições de mobile abaixo se baseiam nas regras públicas de CSS/JavaScript; não são uma declaração de que esses fluxos foram testados em celular.

Também não houve inspeção visual de cada seção desktop, medição de desempenho, teste de checkout, download dos vídeos ou exportação de assets da Wiser. As medidas citadas descrevem a referência ou são propostas para PingoFin, conforme indicado. O site pode mudar depois desta data.

## 3. O que dá força à estética da Wiser

### Contraste e ritmo

A primeira parte usa quase preto, texto claro e destaques quentes em rosa/laranja. Mais adiante aparecem áreas quase brancas e superfícies de tom papel. A alternância faz o visitante perceber mudanças de assunto e dá espaço para demonstrações mais objetivas.

Os fundos consultados incluem `#08060E` no hero, `#0D0E11` em blocos escuros, `#FBFAF9` nas áreas claras e `#F2F1ED` nas superfícies de papel. São informações da referência, **não a paleta proposta para PingoFin**.

### Hierarquia e composição

O título da abertura é muito maior que o texto de apoio, ocupa várias linhas e destaca uma parte da mensagem. O vídeo divide a cena com o texto, enquanto pequenos cards flutuantes conectam a ilustração ao produto.

Há bastante espaço entre capítulos. Nem todo conteúdo fica dentro de um card: frases amplas, telas grandes, faixas e cenas ilustradas alternam com grupos menores. Essa variação evita uma página formada apenas por grades repetidas.

A referência usa Space Grotesk nos títulos e Inter no corpo. Para PingoFin, manter **Manrope**, ampliando sua escala para marketing. O valor da referência está no contraste entre tamanhos e pesos, não em adotar outra fonte.

### Movimento com diferentes funções

O mascote cria vínculo; os cards explicam benefícios; as telas demonstram o produto; as faixas criam continuidade. Esses elementos não precisam se mover ao mesmo tempo.

Importante para a produção: os quatro cards ilustrados da Wiser e o personagem do passo a passo são imagens. A presença do mascote na página não significa que cada aparição seja um vídeo.

## 4. Mapa das seções da referência e tradução para PingoFin

Os nomes da primeira coluna são rótulos desta análise, não transcrições dos títulos do site. A ordem considera os blocos presentes na página consultada.

| Ordem | Bloco identificado              | Papel na narrativa                          | Tradução para PingoFin                                                 |
| ----- | ------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| 01    | Navegação fixa                  | Orientar e manter acesso à ação principal.  | Logo adaptativo, âncoras de seção, Entrar e CTA comercial.             |
| 02    | Abertura com vídeo              | Apresentar promessa, personagem e chamada.  | Benefício financeiro simples, vídeo do Pingo e convite à demonstração. |
| 03    | Faixa de termos                 | Dar ritmo e resumir temas.                  | Entradas, saídas, pendências, vencimentos e organização.               |
| 04    | Quatro cards ilustrados         | Tornar benefícios visuais e memoráveis.     | Uma pergunta financeira por card, acompanhada pelo Pingo.              |
| 05    | Jornada numerada                | Explicar um processo curto.                 | Registrar, conferir, acompanhar e entender.                            |
| 06    | Faixa de confiança              | Reforçar controle e previsibilidade.        | Mensagens sustentadas pelo produto, sem selos inventados.              |
| 07    | Trilho de telas                 | Mostrar continuidade entre recursos.        | Telas ou prévias identificadas de entradas, saídas e pendências.       |
| 08    | Declaração central              | Unir a proposta em uma frase ampla.         | Organização financeira com linguagem próxima.                          |
| 09    | Comparação de cenários          | Relacionar uma dificuldade à solução.       | Informação dispersa versus rotina centralizada.                        |
| 10    | Três capítulos de produto       | Aprofundar a demonstração.                  | Receber, pagar e acompanhar, respeitando o estágio de cada módulo.     |
| 11    | Transição para claro            | Marcar uma mudança de ritmo.                | Passagem do universo do Pingo para explicação objetiva.                |
| 12    | Benefícios em área clara        | Ampliar os casos de uso.                    | Recebido versus previsto, consulta e uso no celular.                   |
| 13    | Demonstração por abas           | Permitir exploração focada.                 | Visão geral, entradas, saídas e pendências.                            |
| 14    | Resumo da jornada               | Relembrar etapas e controle.                | Registrar, revisar e acompanhar.                                       |
| 15    | Reconhecimento com mascote      | Criar vínculo e valor comercial.            | Cena de rotina organizada; formato opcional.                           |
| 16    | Oferta comercial                | Explicar alternativas de contratação.       | Convite ao piloto agora; planos quando definidos.                      |
| 17    | Perguntas frequentes            | Resolver dúvidas antes da ação.             | Público, estágio atual, mobile, contratação e suporte.                 |
| 18    | Encerramento com vídeo e rodapé | Reforçar a mensagem e oferecer saída clara. | Pingo próximo ao CTA, contatos e links institucionais reais.           |

O bloco de premiações da Wiser pertence à estratégia comercial dela. Para PingoFin, aproveitar a **pausa emocional com o mascote**, sem pressupor prêmios, comunidade, recompensas ou programa de fidelidade.

## 5. Estrutura recomendada para a primeira landing do PingoFin

A referência é longa e repete argumentos em formatos diferentes. Para a primeira versão, preservar essa riqueza visual com menos capítulos. A profundidade pode crescer quando houver mais telas e evidências reais.

### 5.1 Header adaptativo

- Logo à esquerda; âncoras “Como funciona”, “Conheça o Pingo” e “Dúvidas”.
- “Entrar” somente com destino público definido para a aplicação.
- CTA principal sugerido: **“Conhecer o PingoFin”** ou **“Quero participar do piloto”**, conforme o fluxo comercial disponível.
- Fundo discreto no topo; superfície legível ao rolar; cores coordenadas com a seção sob o header.

### 5.2 Hero escuro com vídeo do Pingo

**Mensagem candidata:** “Seu financeiro em dia. Sem complicação.”

**Apoio candidato:** “Conheça a proposta do PingoFin: organizar o financeiro do seu pequeno negócio com uma experiência simples e próxima.”

Desktop: texto à esquerda e cena do Pingo à direita. O personagem organiza uma mesa ilustrada com cartões, calendário e notebook. Um detalhe amarelo aponta para o CTA ou para o benefício principal.

Adicionar no máximo dois pequenos cards visuais. Em um conceito ilustrativo, eles podem distinguir “Recebido” e “A receber”; não devem parecer notificações reais ou comprovar uma operação automática.

Enquanto a oferta estiver em piloto, comunicar esse estágio junto ao CTA. Avaliações, estrelas, contagens de clientes e logos de empresas só entram com evidência e autorização reais.

### 5.3 Faixa e cards de benefícios

Faixa curta de temas, seguida de quatro cards visuais:

1. **O que já entrou?** Pingo com uma pasta de recebimentos.
2. **O que ainda falta receber?** Pingo apontando para um calendário.
3. **Quais contas estão chegando?** Pingo ao lado de uma lista de vencimentos.
4. **Como está o mês?** Pingo com uma visualização simples de entradas e saídas.

São temas do produto planejado. Na landing publicada, cada card precisa indicar corretamente o que já está disponível e o que ainda é uma prévia. Não publicar um benefício planejado como funcionalidade existente.

### 5.4 Como funciona

Organizar quatro passos curtos ao redor do Pingo no desktop:

- Registrar as informações.
- Conferir valores e situação.
- Acompanhar recebimentos e pagamentos.
- Entender o período.

Essa sequência é uma proposta editorial para o produto financeiro futuro. A página atual não deve apresentar esse fluxo como já executável se os módulos ainda não estiverem entregues.

Mobile: transformar o mapa em uma sequência vertical de cenas, com imagens recortadas e texto legível. A ordem deve continuar clara sem animação.

### 5.5 Produto em movimento e comparação

Um trilho de telas apresenta a experiência. Depois, um bloco curto conecta a dor ao objetivo:

| Hoje, na rotina dispersa                       | Proposta do PingoFin                |
| ---------------------------------------------- | ----------------------------------- |
| Informações em conversas e anotações.          | Um lugar organizado para consultar. |
| Dificuldade para separar previsto de recebido. | Situações e valores identificados.  |
| Contas lembradas de última hora.               | Vencimentos visíveis na rotina.     |

Usar conteúdo demonstrativo identificado. Não inventar percentuais de economia, aumento de receita ou resultado financeiro garantido.

### 5.6 Conheça o Pingo

Uma seção com mais personalidade: personagem em destaque e texto sobre proximidade, organização e linguagem humana. Pode incluir um segundo loop curto em contexto financeiro.

Se explicar assistência por IA, identificar como **recurso planejado** enquanto não estiver conectado. A animação do mascote não deve simular uma análise financeira ou resposta de IA em funcionamento.

### 5.7 Área clara com demonstração por abas

Mudar para fundo claro/lilás suave. Apresentar uma tela por vez, com título, explicação curta e descrição acessível. Abas sugeridas: “Visão geral”, “Entradas”, “Saídas” e “Pendências”.

Na primeira versão, usar apenas telas reais disponíveis ou protótipos marcados como tal. As prévias da galeria de desenvolvimento são exemplos com dados sintéticos; não são evidência de módulos financeiros implementados.

### 5.8 Piloto ou planos

Hoje, priorizar um convite ao piloto com condições reais. Quando preços e limites forem definidos, substituir pelo comparativo de contratação.

Não reproduzir preços, nomes de planos, alegação de plano mais vendido ou benefícios comerciais da Wiser. A hipótese de preço do documento de produto também não é tabela comercial aprovada.

### 5.9 FAQ

Perguntas candidatas:

- Para quem o PingoFin está sendo criado?
- O que está disponível nesta fase?
- Posso conhecer a experiência pelo celular?
- O Pingo já usa inteligência artificial?
- Como funciona a participação no piloto?
- Como falar com a equipe?

Respostas curtas, atualizadas a partir do estado real do produto e do atendimento disponível.

### 5.10 CTA final e rodapé

Voltar ao fundo escuro. Pingo acena ou apresenta um cartão visual próximo à chamada final. O texto e o botão são elementos da página, separados do vídeo.

Rodapé simples com marca, contato e documentos institucionais existentes. Links pendentes precisam ser resolvidos antes da publicação.

## 6. Direção de cores, tipografia e forma

### Paleta da landing

Reutilizar a base existente; criar aliases específicos de marketing, sem alterar os tokens da aplicação autenticada.

| Papel proposto          | Base PingoFin | Uso na landing                              |
| ----------------------- | ------------- | ------------------------------------------- |
| Fundo escuro            | `#18121F`     | Hero, universo do mascote e CTA final.      |
| Superfície escura       | `#241B2D`     | Cards sobre fundo escuro.                   |
| Roxo principal          | `#5B2A86`     | Ações e identidade em área clara.           |
| Roxo de apoio           | `#7C45B1`     | Destaques e luz discreta em área escura.    |
| Texto claro             | `#F6F0FA`     | Títulos e logo sobre fundo escuro.          |
| Texto secundário escuro | `#C5B8CE`     | Explicações sobre fundo escuro.             |
| Fundo claro             | `#FAF8FC`     | Capítulos objetivos e FAQ.                  |
| Fundo secundário claro  | `#F4F0F7`     | Demonstração por abas e oferta.             |
| Superfície clara        | `#FFFFFF`     | Telas e cards de conteúdo.                  |
| Texto principal claro   | `#241B2B`     | Títulos, números e explicações.             |
| Texto secundário claro  | `#756A7C`     | Conteúdo complementar.                      |
| Amarelo                 | `#FBBF24`     | Ponta do Pingo, sinais e detalhes pequenos. |
| Amarelo suave           | `#FFE7A3`     | Pequenos apoios ilustrados.                 |

O encanto das cores da Wiser vem também do contraste entre fundo, texto e acento. Traduzir esse contraste para o roxo/amarelo. Evitar que rosa/laranja passe a ser uma segunda identidade dominante.

Um trecho de título pode usar lilás claro ou um gradiente discreto entre tons de roxo. O amarelo permanece pontual. A assinatura visual deve continuar reconhecível sem gradiente, brilho ou animação.

### Escala proposta para marketing

| Elemento           | Desktop                   | Mobile                               |
| ------------------ | ------------------------- | ------------------------------------ |
| Título do hero     | 64–88 px, Manrope 800     | 38–52 px, conforme largura e quebra. |
| Título de seção    | 40–64 px, Manrope 700–800 | 28–36 px.                            |
| Título de card     | 20–24 px                  | 18–22 px.                            |
| Corpo              | 16–18 px                  | 16 px.                               |
| Texto complementar | 14–16 px                  | Pelo menos 14 px.                    |

Essas medidas são propostas, não valores já validados. Usar escala fluida, entrelinha confortável e quebras editoriais. Testar acentos, números longos e zoom; não comprimir uma frase até caber.

### Espaço, cantos e profundidade

- Container sugerido de 1120–1240 px; margens laterais de 16–24 px no mobile.
- Espaçamento de seção sugerido de 80–128 px no desktop e 48–80 px no mobile, ajustado ao conteúdo.
- Cards partem do raio de 16 px existente. Cenários ilustrados podem explorar 20–24 px como extensão de marketing.
- Botões partem dos controles de 44 px; CTAs principais podem ter 48–54 px.
- A Wiser usa pílulas amplamente. Para PingoFin, manter por padrão os cantos da direção B; uma forma mais arredondada na landing é uma proposta a testar, não uma mudança do design system do app.
- Elevação leve, bordas bem definidas e glass reservado ao header. Iluminação cenográfica discreta pode existir nos vídeos; evitar transformar o Pingo em personagem 3D.

## 7. Logo que acompanha o fundo

### O que a Wiser faz

O header é fixo e muda sua apresentação conforme a seção que passa por ele. O logo claro aparece sobre o escuro; o logo escuro aparece sobre o claro. Na área clara, o header fica mais limpo, sem a mesma cápsula escura da rolagem.

A leitura do código também mostrou um detalhe: no estado claro, links de navegação e a ação de login desktop são ocultados visualmente e deixam de receber ponteiro; logo e CTA permanecem. O login mobile tem uma regra própria para continuar visível. Esse comportamento não foi testado por teclado.

Portanto, a mudança percebida envolve **logo, superfície e densidade do header**, e não apenas inversão de cores.

### Proposta para PingoFin

| Fundo sob o header | Wordmark proposto                  | Detalhe da marca                    | Header                                           |
| ------------------ | ---------------------------------- | ----------------------------------- | ------------------------------------------------ |
| Escuro             | Claro, baseado em `#F6F0FA`.       | Amarelo preservado.                 | Superfície escura com contraste.                 |
| Claro              | Roxo escuro, baseado em `#371653`. | Amarelo preservado em área pequena. | Superfície clara ou transparente quando legível. |

Essas são **variantes a produzir e validar** a partir da marca oficial; não existem como assets finais desta tarefa. Não redesenhar a tipografia do logo usando simplesmente Manrope.

Regras de comportamento:

1. Cada seção declara se sua superfície é clara ou escura.
2. O estado do header acompanha a superfície na altura em que ele está, não o tema do sistema operacional nem apenas a seção com maior área visível.
3. Wordmark, texto, ícones e superfície mudam juntos. Reservar as mesmas dimensões nas duas variantes para não deslocar a navegação.
4. Usar transição curta de cor/opacidade, aproximadamente 120–180 ms, sem piscar perto da fronteira entre seções.
5. Nos trechos com vídeo ou fundos mistos, preferir um header com superfície consistente para garantir leitura.
6. Preservar âncoras e acesso no PingoFin; não ocultar controles focáveis só para repetir o efeito da referência.
7. O mascote colorido não é invertido ou recolorido. Adaptar o fundo e a versão do wordmark, preservando o personagem.

A alternância editorial entre seções claras e escuras é uma decisão da página. Ela é independente do seletor claro/escuro da aplicação financeira.

## 8. Sliders, trilhos e navegação de conteúdo

### Tipos identificados na referência

| Tipo                      | Comportamento identificado                                                  | Aplicação sugerida                   |
| ------------------------- | --------------------------------------------------------------------------- | ------------------------------------ |
| Faixa de termos           | Movimento linear contínuo; inclinada no desktop e reta no mobile.           | Vocabulário financeiro curto.        |
| Cards do mascote          | Quatro peças no desktop; mobile com largura de 78vw, snap e setas de 46 px. | Benefícios ilustrados do Pingo.      |
| Trilho de telas           | Sequência duplicada em movimento contínuo; CSS pausa no hover.              | Prévia de telas com legendas.        |
| Narrativa de produto      | Três painéis e movimento ligado à rolagem; regras próprias para mobile.     | Demonstração em capítulos, opcional. |
| Sequência de telas mobile | Imagens específicas para celular; trilho com movimento contínuo.            | Telas legíveis no formato correto.   |
| Abas                      | Troca explícita do módulo demonstrado.                                      | Explorar um recurso de cada vez.     |

Os valores acima pertencem à referência. O slider de cards é diferente do trilho automático de screenshots e das abas; não tratar todos como um único componente.

### Critérios para os sliders PingoFin

- No mobile, mostrar um card principal e parte do seguinte para indicar continuidade; ponto de partida: 78–86% da largura disponível.
- Permitir gesto horizontal sem bloquear a rolagem vertical da página.
- Oferecer anterior/próximo com nome acessível, foco visível e alvo de pelo menos 44 px. Arrastar não pode ser o único acesso.
- Manter título e descrição fora das imagens. Texto financeiro essencial não deve depender de pixels de uma screenshot.
- Para trilhos automáticos, disponibilizar pausa, pausar no foco/hover e apresentar alternativa estática com movimento reduzido.
- Duplicações usadas para um loop não podem duplicar leitura por leitor de tela nem criar controles focáveis extras.
- Abas precisam de estado selecionado, associação ao painel e navegação por teclado. No mobile, acomodar os nomes sem reduzir a fonte.
- Não criar rolagem horizontal da página inteira. O deslocamento deve permanecer dentro do trilho.

Preferir rolagem natural na primeira versão. A narrativa horizontal presa à rolagem da Wiser pode inspirar um capítulo futuro, mas precisa justificar o custo e funcionar sem prender o visitante, inclusive no teclado e com movimento reduzido.

## 9. Direção mobile

### O que as regras públicas da Wiser mostram

O mobile foi redesenhado em vez de simplesmente reduzir o desktop:

- Até 900 px, vários grupos passam para uma coluna; os planos deixam a grade de três colunas.
- Até 640 px, o hero coloca a mídia antes do texto e reposiciona o CTA acima do título dentro do bloco de copy.
- Uma regra posterior define a mídia do hero em proporção 16:10, ocupando a largura com margens compensadas; o vídeo recebe leve ampliação.
- Pequenos cards flutuantes somem, reduzindo sobreposição.
- O logo diminui; a navegação de âncoras desktop dá lugar a um conjunto compacto de ações. As regras consultadas não sustentam recomendar um hamburger como reprodução fiel da referência.
- Os cards ilustrados viram uma sequência deslizada com snap e botões explícitos.
- O passo a passo passa a usar cenas alternadas: texto de um lado e tela inclinada do outro, intercaladas pelo mascote. Há regras posteriores que substituem a versão inicial de timeline simples.
- Existem screenshots dedicadas ao celular. Elas não são apenas as imagens desktop encolhidas.
- A faixa de termos perde a inclinação; a narrativa ganha conteúdo específico para mobile.

Esses comportamentos foram inferidos a partir das regras finais e dos assets declarados. A aparência final, o corte do vídeo, a legibilidade e os gestos ainda precisam de inspeção visual.

### Tradução recomendada para PingoFin

**Hero:** experimentar o Pingo primeiro, como na referência, mas manter uma promessa curta e um CTA cedo na leitura. Evitar uma ilustração tão alta que afaste toda explicação da primeira tela. A ordem final precisa ser validada em 320, 375 e 390 px.

**Vídeo:** produzir enquadramento mobile próprio. Rosto, ponta amarela, mãos e objetos relevantes precisam sobreviver ao corte. Não depender de recortar automaticamente um cenário largo.

**Cards:** uma pergunta por peça, com Pingo em pose específica. Mostrar o próximo card parcialmente e oferecer setas. Não esconder conteúdo útil apenas para caber na composição.

**Passo a passo:** cenas empilhadas e alternadas, com screenshots maiores que os detalhes decorativos. Se a inclinação comprometer números ou labels, manter a tela reta e inclinar apenas o apoio ilustrado.

**Produto:** usar capturas reais no layout mobile. Nas telas ilustrativas, identificar período, base e dados de exemplo. Evitar vender legibilidade com screenshots cuja tipografia é impossível de ler no celular.

**Oferta e FAQ:** cartões empilhados e perguntas em largura confortável. Informações necessárias à decisão comercial não ficam escondidas em um slider automático.

**Header:** logo compacto, CTA e acesso compatíveis com a largura. Se houver menu, fazê-lo acessível e operável; ele é uma decisão própria do PingoFin.

## 10. Vídeos do Pingo — briefing de produção

Objetivo: obter a presença e a continuidade do mascote vistas na referência, em um universo de organização financeira coerente com o Pingo.

### Linguagem visual

- Animação 2D, com acabamento limpo, pequenos volumes gráficos e contorno consistente.
- Pingo oficial como referência visual obrigatória. O PNG normal é uma proposta individual; a prancha é a fonte para verificar identidade.
- Cenários simples: mesa, notebook, calendário, pastas e cartões. Evitar dinheiro caindo, jackpots, foguetes de lucro ou animações que sugiram enriquecimento.
- Roxo dominante, detalhe amarelo e áreas claras de apoio. Poucos elementos por cena, com a ação do personagem fácil de reconhecer.
- Expressões e gestos próximos: acenar, observar, separar cartões, apontar e apresentar uma organização concluída na cena ilustrativa.
- Textos, valores e CTA ficam em HTML na landing. Produzir a animação sem palavras geradas dentro do vídeo.

### Roteiros propostos

| Asset sugerido       | Cena                                                                          | Duração candidata              | Papel                                 |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------ | ------------------------------------- |
| `pingo-hero-desktop` | Pingo recebe cartões dispersos, separa em duas pastas e apresenta o notebook. | 6–10 s, loop.                  | Introduzir organização e proximidade. |
| `pingo-hero-mobile`  | A mesma ideia com poucos objetos, personagem central e enquadramento próprio. | 6–10 s, loop.                  | Preservar clareza no celular.         |
| `pingo-organizacao`  | Pingo olha um calendário, destaca um item e aponta para uma lista ordenada.   | 4–6 s, loop ou aparição única. | Apoiar o capítulo de rotina.          |
| `pingo-final`        | Pingo acena e apresenta uma placa sem texto ou aponta para o botão externo.   | 5–8 s, loop.                   | Dar presença ao encerramento.         |

São nomes e roteiros propostos; nenhum desses arquivos foi criado nesta tarefa.

### Storyboard do hero

1. Pingo olha para poucos cartões espalhados sobre a mesa.
2. Ele aproxima os cartões, com gesto simples e intencional.
3. Duas pastas os agrupam; a distinção entre recebido e previsto é explicada pelo HTML ao redor da cena.
4. Pingo apresenta uma tela ilustrada organizada e olha para o visitante.
5. A composição volta suavemente ao início, sem salto evidente.

Essa é uma metáfora visual. Não mostrar um pagamento real sendo registrado sozinho, um chat respondendo como IA conectada ou um selo de operação confirmada. Se futuramente houver demonstração funcional, a cena precisa reproduzir o fluxo real de revisão e confirmação.

### Entrega técnica proposta

- Arquivo mestre com resolução suficiente para derivados; desktop e mobile exportados separadamente.
- MP4 como alternativa amplamente utilizável; WebM opcional quando houver ganho medido. Não presumir transparência em MP4.
- Preferir fundo já compatível com a seção. Se transparência for necessária, validar o formato e os navegadores antes de depender dela.
- Poster estático de cada cena, mantendo a mesma área reservada do vídeo e evitando deslocamento de layout.
- Reprodução sem som e inline. Para movimento reduzido, exibir o poster; nenhuma informação essencial depende da animação.
- Pausar vídeos fora da área visível e evitar carregar todos os loops junto da primeira tela. Ter alternativa para falha de reprodução e economia de dados.
- Como ponto de partida de orçamento, buscar até cerca de 3 MB para o hero mobile e 5 MB para o desktop, revisando qualidade e custo em conexão limitada. Essas são metas de produção, não medições desta tarefa.
- Revisar consistência da silhueta, ponta amarela, mãos, rosto e contorno quadro a quadro. Rejeitar deformações e objetos aparecendo sem continuidade.

### Prompt-base para a futura produção

> Animar o mascote Pingo usando a referência oficial fornecida. Preservar corpo de gota roxo, ponta amarela curvada, contorno roxo escuro, olhos expressivos e estilo 2D. Cena de organização financeira com notebook, calendário e poucos cartões sem texto. Pingo separa os cartões com gestos leves, apresenta a mesa organizada e olha amigavelmente para o visitante. Paleta roxa com amarelo pontual, cenário limpo, câmera estável, composição com espaço para texto HTML externo e loop suave. Não gerar letras, números, interface legível ou confirmação de transação no vídeo. Não alterar identidade nem converter o personagem em 3D.

O prompt é um briefing; ferramenta, método de animação e aprovação dos vídeos permanecem em aberto. Validar primeiro um storyboard e os enquadramentos antes de produzir todas as cenas.

## 11. Assets existentes e próximos assets

| Material existente      | Caminho de origem                                                        | Uso neste projeto                                                |
| ----------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Identidade oficial      | `../pingo-doc/docs/assets/pingo-referencia.jpg`                  | Consulta de marca e invariantes; não usar a prancha como avatar. |
| Pingo normal            | `../pingo-doc/docs/referencias-visuais/pingo/pingo-normal.png`   | Base individual para estudo de personagem.                       |
| Pingo pensando          | `../pingo-doc/docs/referencias-visuais/pingo/pingo-pensando.png` | Referência de expressão; não simular IA processando.             |
| Pingo insight           | `../pingo-doc/docs/referencias-visuais/pingo/pingo-insight.png`  | Referência de gesto e expressão.                                 |
| Gráficos dos dois temas | `../pingo-doc/docs/referencias-visuais/graficos/`                | Exemplos sintéticos identificados.                               |
| Catálogo e procedência  | `../pingo-doc/docs/referencias-visuais/manifest.json`            | Consultar status, dimensões e limitações.                        |
| Tokens implementados    | `../pingo-doc/frontend/app/design-core/`                         | Alinhar os papéis visuais da landing com o produto.              |

Próximos materiais a produzir: variantes oficiais do wordmark para claro/escuro, quatro ilustrações de benefícios, storyboards, vídeos com posters e capturas de produto aprovadas para marketing.

Na implementação futura, copiar apenas os assets aprovados para a landing, com procedência registrada. A página pública não deve depender em produção dos caminhos locais do projeto irmão.

## 12. Estado do produto e conteúdo publicável

Os documentos consultados descrevem autenticação, administração da plataforma, shell, temas, referências visuais e conversa local do Pingo. Módulos financeiros, integração de IA, billing e planos comerciais não estão demonstrados como entregues nesses materiais. Revalidar o código antes de escrever a copy definitiva: o produto pode evoluir depois desta análise.

Para a landing:

- Separar demonstração real, conceito ilustrativo e recurso planejado.
- Usar valores sintéticos apenas em demonstrações claramente identificadas.
- Distinguir venda de dinheiro recebido e despesa de pagamento. Não chamar acumulado ilustrativo de saldo disponível comprovado.
- Descrever o Pingo atual como personagem/interface local; não prometer consultas inteligentes ou registros automáticos em funcionamento.
- Não inferir integração com banco, WhatsApp, Pix automático ou emissão de boleto a partir de uma ilustração.
- Depoimentos, métricas, condições comerciais e selos só entram quando houver fonte real.

## 13. Checklist para o futuro protótipo

- [ ] Abertura comunica o benefício e o estágio do produto rapidamente.
- [ ] Roxo/amarelo, Manrope e identidade do Pingo continuam reconhecíveis.
- [ ] Desktop e mobile têm composições próprias, com ordem de leitura coerente.
- [ ] Logo e header acompanham as superfícies claras/escuras sem piscar.
- [ ] Navegação permanece legível e acessível durante a transição.
- [ ] Sliders têm swipe, botões, teclado, pausa quando automática e alternativa estática.
- [ ] Screenshots financeiras são legíveis e seus dados demonstrativos estão identificados.
- [ ] Vídeos têm poster, corte mobile aprovado e alternativa sem movimento.
- [ ] Texto comum atende 4,5:1; texto grande e controles atendem os critérios aplicáveis de 3:1.
- [ ] Não há informação transmitida apenas por cor ou por vídeo.
- [ ] Foram conferidos 320, 375, 390, 768, 1024 e 1440 px, zoom de 200% e teclado.
- [ ] Não há overflow da página, CTA coberto ou salto de layout após carregar mídia.
- [ ] Conteúdo comercial corresponde às funções e condições realmente disponíveis.

Os critérios acima são verificações futuras; não foram executados sobre uma landing PingoFin nesta tarefa.

## 14. Procedência e decisões pendentes

**Fonte externa:** [Wiser — página indicada pelo usuário](https://app.mywiser.com.br/lp?u), consultada em 06/10/2026 por navegador e leitura dos arquivos públicos da página. Nenhum asset da Wiser foi adotado para publicação.

**Fontes internas:** [README](../pingo-doc/docs/LEGACY_MONOREPO_README.md), [definição do produto](../pingo-doc/DEFINICAO_PRODUTO.md), [arquitetura](../pingo-doc/ARCHITECTURE.md), [design system](../pingo-doc/DESIGN_SYSTEM.md), [guia das referências](../pingo-doc/docs/referencias-visuais/README.md), [manifesto](../pingo-doc/docs/referencias-visuais/manifest.json) e [validação histórica](../pingo-doc/docs/BOOTSTRAP_VALIDATION.md).

**Direção estabelecida neste guia:** estrutura inspirada na Wiser, marca PingoFin preservada, vídeos 2D com contexto financeiro, ritmo claro/escuro, logo adaptativo e mobile tratado como composição própria.

**Ainda em aberto:** copy final, CTA/destino comercial, tamanho definitivo da página, enquadramentos dos vídeos, variantes do wordmark, assets de produção, telas disponíveis para marketing e eventual formato de planos.

**Conferência pendente da referência:** inspeção visual completa em mobile e testes das interações. A análise de código responsivo informa a proposta, mas não substitui essa etapa.

