# PingoFin — Landing page

Site público Vue/Vite, narrativa, animações acessíveis e assets 3D. Não acessar sessão, dados de empresas ou registros privados. Preservar procedência e o Site existente.

Leia README.md, ../pingo-doc/MIGRACAO_REPOSITORIOS.md e, antes de alterar código do produto, ../pingo-doc/DEFINICAO_PRODUTO.md, ARCHITECTURE.md, DESIGN_SYSTEM.md e docs/referencias-visuais/README.md. O estado implementado está no README histórico e nas validações, não apenas no planejamento inicial.

# PingoFin — landing page

Leia DIRECAO_VISUAL_LANDING_PAGE.md, README.md e ../pingo-doc/AGENTS.md.
O pedido de 06/10/2026 autoriza uma landing Vue dinâmica com shadcn-vue e Anime.js. O Pingo 3D é a direção atual solicitada pelo usuário, substituindo a recomendação 2D do guia apenas para esta landing. Assets finais ainda estão sendo produzidos.
Não alterar o app financeiro para construir marketing. Não copiar sessão, dados privados ou o JSON de logs para esta página pública.
Toda alteração de agente exige nova entrada em ../pingo-front-crm/data/agent-changes.json: resumo até 300 caracteres e objeto separado para detalhes. Preservar entradas existentes e executar o validador --worktree na raiz do pingo-front-crm.
Mídias: catálogo em src/config/media.ts e arquivos públicos em public/media. Preservar assets originais e o guia. Screenshots atuais são capturas reais com dados sintéticos, documentadas em docs/MEDIA_CATALOG.md e assets/product/manifest.json. Preservar a procedência e variantes móveis. Não fabricar interfaces para substituir capturas indisponíveis.
Não inventar preços, clientes, depoimentos, contatos ou IA funcionando. O CTA inicial explora a página; convite ao piloto depende de URL real configurada.
Animações devem respeitar movimento reduzido e oferecer pausa. Trilhos precisam de swipe, setas e teclado; abas/FAQ precisam ser acessíveis.
Validar build, typecheck, formatação, desktop/mobile, teclado, header claro/escuro e console. Registrar só verificações realmente executadas. Em 06/10/2026 o usuário autorizou publicação provisória pelo ChatGPT para compartilhar. Usar o Site registrado em .openai/hosting.json e publicar apenas a landing estática. A oferta comercial segue indefinida. Preservar o cadastro e o público nas próximas atualizações.

## Histórico obrigatório

A fonte única é o JSON privado em `../pingo-front-crm/data/agent-changes.json`. Toda tarefa de agente deve acrescentar entrada imutável com resumo de até 300 caracteres Unicode e detalhes separados para mudanças complexas. Nunca copie o JSON para outro repositório, public/, bundle do navegador, banco ou localStorage.

No frontend, execute `node scripts/check-agent-changes.mjs --worktree` e inclua o JSON no stage. Commit do frontend deve preceder commits relacionados nos demais repositórios. Neles, atualize e inclua `.agent-change.json` com ID novo e SHA completo do commit do frontend que contém o registro. Os hooks leem o registro diretamente desse commit, recusam IDs reutilizados e não mantêm cópias do histórico.

Ative em cada clone: `git config --local core.hooksPath .githooks`. Não contornar a trava. Clone o frontend como irmão ou configure `PINGOFIN_FRONT_ROOT`. Linux usa Node compatível no PATH; Windows pode executar o setup-node.ps1 local.
