# Imagens reais do produto

Catálogo consumido pela landing: `src/config/media.ts`. Capturas PNG originais: `assets/product/`. Versões WebP: `public/media/product/`. Manifesto com dimensões, hashes, rotas e procedência: `assets/product/manifest.json`.

| Chave         | Painel real                                                    | Uso                                                           |
| ------------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| `heroProduct` | Visão geral, tema escuro                                       | Hero, com resultado nativo sobreposto e Pingo 3D complementar |
| `benefits[0]` | Indicador de entradas do mês                                   | O que já entrou?                                              |
| `benefits[1]` | Indicador geral a receber                                      | O que falta receber?                                          |
| `benefits[2]` | Indicador geral a pagar                                        | O que vem pela frente?                                        |
| `benefits[3]` | Resultado positivo do mês                                      | Como está o mês? e recorte no hero                            |
| `companion`   | Cronograma de entrada + três parcelas, vencimentos e lembretes | Jornada de quatro passos                                      |
| `dashboard`   | Visão geral clara, indicadores e gráfico diário                | Aba Visão geral                                               |
| `revenues`    | Vendas, recebimentos, restante e situação                      | Trilho de telas e aba Entradas                                |
| `expenses`    | Despesas, pagamentos, filtros e situação                       | Trilho de telas e aba Saídas                                  |
| `pending`     | Relatório a receber e a pagar                                  | Trilho de telas e aba Pendências                              |
| `reports`     | Resultado mensal e distribuição por categoria                  | Aba Relatórios                                                |
| `hero`        | Pingo 3D existente                                             | Apoio no hero, capítulo do Pingo e encerramento               |

## Procedência e dados

Capturas feitas em 09/10/2026 no navegador Chromium, com Playwright, usando as telas existentes do Nuxt/Laravel em localhost:3000. Viewport desktop 1440 × 1400 e mobile 390 × 960, escala 2. Os indicadores e cronograma foram capturados diretamente pelos elementos nativos.

Empresa temporária **PingoFin · Demonstração**, período outubro/2026, oito vendas, seis despesas, clientes e categorias sintéticos. Os lançamentos foram criados pelas Actions reais, incluindo uma entrada recebida e três parcelas com vencimentos individuais. A fixture foi removida após as capturas, com identidade e quantidades conferidas. Nenhum cliente real aparece nos arquivos.

As variantes móveis usam capturas da interface em 390 px; a visão geral móvel prioriza os três indicadores nativos, e o cronograma usa as parcelas em cards. `MediaSlot` escolhe a variante com `picture/source` até 640 px, preservando sua proporção. Nenhuma tela se conecta a APIs ou sessões a partir da landing.

O tratamento é apenas conversão WebP e redução proporcional até 2160 px. Não foram acrescentados textos, números, legendas ou interfaces nos pixels. Sombras, molduras e perspectiva sutil pertencem ao CSS; descrições e identificação de demonstração ficam em HTML. Não houve geração de imagens por IA.

Também foram preservadas capturas de detalhe completo e gráfico diário para reutilização. Elas não precisam ser carregadas pela página.

## Substituir uma captura

1. Capture a tela real com dados sintéticos, sem documentos, e-mails, credenciais ou dados de clientes reais.
2. Preserve o PNG em `assets/product/` e converta uma cópia WebP para `public/media/product/`.
3. Atualize caminho, descrição e dimensões no catálogo. Se houver variante móvel, mantenha as dimensões próprias em `mobile`.
4. Atualize o manifesto e confira o componente nos dois tamanhos. O fallback de erro informa “Imagem indisponível”; não fabrica um dashboard.

## Pingo e referência

Pingo original: `assets/pingo/pingo-3d-acenando-v1.png`; prompt preservado na mesma pasta. A versão 3D existente permanece complementar e não representa uma aprovação definitiva de branding.

A [Wiser](https://app.mywiser.com.br/lp?u) foi consultada para enquadramento, profundidade e equilíbrio entre produto e mascote. Nenhum asset, código ou identidade da Wiser foi incorporado. Nenhum novo asset do Figma foi exportado.
