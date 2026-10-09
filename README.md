# PingoFin — landing page

Primeiro protótipo local da landing em Vue 3 + Vite, com componentes shadcn-vue adaptados sobre Reka UI, Tailwind CSS 4, Manrope local e Anime.js 4. A composição segue [DIRECAO_VISUAL_LANDING_PAGE.md](./DIRECAO_VISUAL_LANDING_PAGE.md): tipografia expressiva, capítulos claros/escuros, mascote, trilhos de cards e demonstração por abas.

O pedido de 06/10/2026 autoriza o Pingo **3D** nesta landing. Usamos a primeira proposta já existente em `assets/pingo/pingo-3d-acenando-v1.png`. O guia original ainda descreve a direção 2D anterior; não foi reescrito e a identidade da aplicação financeira não foi alterada.

## Rodar

Com Node compatível instalado:

```powershell
cd E:\Projects\PingoFin\pingo-landingpage
npm install
npm run dev
```

Prévia: [http://localhost:5174/](http://localhost:5174/). A porta é fixa e o servidor escuta apenas localhost. A aplicação financeira permanece na porta 3000.

Com o Node portátil configurado por scripts/setup-node.ps1 neste repositório:

```powershell
cd E:\Projects\PingoFin\pingo-landingpage
& ./scripts/npm.ps1 run dev
```

Para verificar a entrega:

```powershell
npm run typecheck
npm run format:check
npm run build
```

O build também executa o typecheck. A saída estática é `dist/`. `npm run preview` usa a mesma porta: encerre o dev antes de iniciar o preview. A publicação provisória pelo Sites do ChatGPT foi solicitada em 06/10/2026.

## Publicação provisória

Endereço provisionado: [prévia PingoFin](https://pingofin-previa.gabriellawliet23.chatgpt.site). O link torna-se ativo quando o Sites confirmar o deploy.

A hospedagem serve somente o build estático de `dist/`, com acesso público pelo link, conforme o pedido de compartilhamento. Não publica o app financeiro, sessões ou o JSON privado de alterações.

O cadastro está em `.openai/hosting.json`. Reutilize seu `project_id` nas atualizações; não crie outro Site. O fluxo de publicação salva o código correspondente ao build antes de enviar o pacote.

Esta publicação compartilha uma prévia do produto. Ela pode ser atualizada ou ter o acesso alterado depois.

## O que está pronto

- Header fixo que acompanha o fundo da seção, menu mobile com Escape e retorno de foco.
- Hero com dashboard real escuro, recorte nativo de resultado positivo, Pingo 3D complementar e CTA.
- Faixa em movimento, perguntas em trilho, jornada de quatro passos, trilho de telas e capítulo do Pingo.
- Comparação visual, demonstração em cinco abas, convite à exploração, FAQ e encerramento.
- Anime.js para entrada, aparição das seções, flutuação e faixa contínua. Controle global de pausa; loops pausam ao passar o mouse ou focar a cena. A preferência de movimento reduzido desativa os efeitos.
- Trilhos com rolagem nativa, snap, setas e teclado; abas e FAQ com os comportamentos acessíveis de Reka UI.

As telas são **capturas reais do produto**, feitas em 09/10/2026 com uma empresa temporária e dados sintéticos. A empresa foi removida após a captura. A landing não lê sessões, banco, APIs financeiras ou o histórico privado dos agentes. Não há formulário, checkout, integração de IA ou simulação de operação.

## Substituir as imagens

O catálogo único é [src/config/media.ts](./src/config/media.ts). Veja [docs/MEDIA_CATALOG.md](./docs/MEDIA_CATALOG.md) para cada espaço.

1. Preserve o original em `assets/`; coloque a cópia web em `public/media/`.
2. Atualize `src`, `alt`, `width`, `height` e `fit` do item correspondente no catálogo.
3. Confira desktop e celular. Informe as dimensões da variante móvel em `mobile`. Se o caminho falhar, o componente informa imagem indisponível.

Os antigos placeholders foram substituídos por capturas reais: visão geral clara/escura, entradas, saídas, previsto, relatórios e cronograma de parcelas. Os mesmos itens do catálogo alimentam os trilhos e as abas. Os PNGs originais e o manifesto ficam em `assets/product/`; a página carrega cópias WebP proporcionais.

Antes de usar prints reais, confira se contêm apenas dados autorizados para divulgação. Não copie telas com dados de clientes ou credenciais.

## Destinos públicos

`.env.example` documenta somente URLs públicas:

- `VITE_APPLICATION_URL`: destino de Entrar. No dev, há fallback para `http://localhost:3000/login`; no build de produção, sem URL configurada, o link não é exibido.
- `VITE_PILOT_URL`: destino real do piloto quando definido. Sem ele, o CTA convida a explorar a prévia.

Essas variáveis são incorporadas no bundle. Não inserir segredos. Copy comercial, canal de contato, planos e vídeos continuam pendentes.

## Organização

| Arquivo                               | Responsabilidade                                              |
| ------------------------------------- | ------------------------------------------------------------- |
| `src/App.vue`                         | Narrativa, conteúdo, navegação e interações da landing        |
| `src/styles.css`                      | Tokens e composição responsiva                                |
| `src/composables/useLandingMotion.ts` | Animações, pausa, preferência de movimento reduzido e limpeza |
| `src/config/media.ts`                 | Imagens, descrições, proporções e URLs públicas               |
| `src/components/MediaSlot.vue`        | Imagem ou placeholder, inclusive fallback de erro             |
| `src/components/Rail.vue`             | Trilhos acessíveis com setas e rolagem nativa                 |
| `src/components/ui/`                  | Adaptações locais de Button, Tabs e Accordion                 |
| `public/media/`                       | Cópias públicas dos assets usados                             |
| `docs/capturas/`                      | Evidências da conferência visual                              |

## Procedência

A [Wiser](https://app.mywiser.com.br/lp) orientou o ritmo e a composição. Nenhuma imagem, vídeo, fonte ou código da Wiser foi copiado. O Pingo veio do asset local já produzido; o prompt original foi preservado. Não houve nova geração de imagens nesta implementação.

Os componentes seguem os padrões de [shadcn-vue](https://www.shadcn-vue.com/) e [Reka UI](https://reka-ui.com/), com tokens e composição do PingoFin. O Button reaproveita a adaptação já existente no projeto irmão. [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) contém a licença aplicável às adaptações shadcn.

## Registro obrigatório

Agentes devem ler [AGENTS.md](./AGENTS.md), acrescentar uma entrada ao JSON privado do projeto irmão e executar seu validador `--worktree` antes da entrega. O registro da landing permanece em `../pingo-front-crm/data/agent-changes.json`; seu conteúdo nunca deve ser copiado para este site.

## Conferência de 06/10/2026

Build com TypeScript e format:check passaram. A prévia respondeu HTTP 200. No navegador, conferimos desktop, 390 px e 320 px, carregamento do Pingo, header claro/escuro, menu mobile/Escape, abas por clique/seta, FAQ por Enter, trilho por botão/seta e pausa/retomada dos efeitos. Em 320 px, a largura útil de 305 px ficou sem rolagem horizontal da página.

Capturas: [desktop](./docs/capturas/landing-desktop.png), [página completa](./docs/capturas/landing-completa.png) e [mobile](./docs/capturas/landing-mobile.png).

Não houve teste em aparelho físico, gesto de toque real, auditoria completa de acessibilidade/performance ou alteração da preferência de movimento do sistema durante o teste. A regra de movimento reduzido foi revisada no código. Os assets finais e a revisão comercial continuam pendentes.

## Estrutura padronizada

Site público independente do CRM. Build estático: npm ci e npm run build; publicar dist/. A documentação compartilhada fica em ../pingo-doc. Direção visual e catálogos específicos da landing permanecem aqui. [Migração e pendências de deploy](../pingo-doc/MIGRACAO_REPOSITORIOS.md).

## Histórico obrigatório

A fonte única é o JSON privado em `../pingo-front-crm/data/agent-changes.json`. Toda tarefa de agente deve acrescentar entrada imutável com resumo de até 300 caracteres Unicode e detalhes separados para mudanças complexas. Nunca copie o JSON para outro repositório, public/, bundle do navegador, banco ou localStorage.

No frontend, execute `node scripts/check-agent-changes.mjs --worktree` e inclua o JSON no stage. Commit do frontend deve preceder commits relacionados nos demais repositórios. Neles, atualize e inclua `.agent-change.json` com ID novo e SHA completo do commit do frontend que contém o registro. Os hooks leem o registro diretamente desse commit, recusam IDs reutilizados e não mantêm cópias do histórico.

Ative em cada clone: `git config --local core.hooksPath .githooks`. Não contornar a trava. Clone o frontend como irmão ou configure `PINGOFIN_FRONT_ROOT`. Linux usa Node compatível no PATH; Windows pode executar o setup-node.ps1 local.

## Validação no GitHub

O workflow `.github/workflows/validate.yml` executa verificações próprias deste repositório em push para main, pull request e acionamento manual. As Actions ficam fixadas por SHA e não recebem credenciais de produção. A publicação desta etapa é o código no GitHub; hospedagem e DNS serão configurados depois.
