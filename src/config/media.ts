export interface LandingMedia {
  src: string | null
  alt: string
  label: string
  width: number
  height: number
  fit?: 'contain' | 'cover'
  mobile?: { src: string; width: number; height: number }
}
// Static browser captures. Provenance and replacement instructions: docs/MEDIA_CATALOG.md.
// This public landing never connects to the financial application's data or session.
export const media = {
  hero: {
    src: '/media/pingo-3d-acenando-v1.png',
    alt: 'Pingo, mascote roxo com ponta amarela, sorrindo e acenando.',
    label: 'Pingo em 3D',
    width: 1254,
    height: 1254,
    fit: 'contain',
  },
  heroProduct: {
    src: '/media/product/dashboard-escuro.webp',
    alt: 'Dashboard real do PingoFin no tema escuro, com entradas, saídas, resultado positivo e gráfico de outubro de 2026. Dados de demonstração.',
    label: 'Visão geral',
    width: 2160,
    height: 2100,
    fit: 'contain',
    mobile: {
      src: '/media/product/dashboard-mobile.webp',
      width: 732,
      height: 966,
    },
  },
  benefits: [
    {
      src: '/media/product/recebido-card.webp',
      alt: 'Indicador real de entradas: R$ 6.250,00 recebidos em outubro de 2026. Dados de demonstração.',
      label: 'O que já entrou?',
      width: 710,
      height: 374,
      fit: 'contain',
    },
    {
      src: '/media/product/receber-card.webp',
      alt: 'Indicador real de pendências: R$ 7.250,00 a receber e nenhum valor em atraso. Dados de demonstração.',
      label: 'O que falta receber?',
      width: 1080,
      height: 298,
      fit: 'contain',
    },
    {
      src: '/media/product/pagar-card.webp',
      alt: 'Indicador real de pendências: R$ 1.140,00 a pagar. Dados de demonstração.',
      label: 'O que vem pela frente?',
      width: 1080,
      height: 298,
      fit: 'contain',
    },
    {
      src: '/media/product/resultado-card.webp',
      alt: 'Resultado mensal real: R$ 3.141,00 positivo, sinalizado em verde com seta para cima. Dados de demonstração.',
      label: 'Como está o mês?',
      width: 710,
      height: 374,
      fit: 'contain',
    },
  ],
  dashboard: {
    src: '/media/product/dashboard.webp',
    alt: 'Tela real de visão geral: entradas, saídas, resultado e gráfico diário de outubro de 2026. Dados de demonstração.',
    label: 'Visão geral',
    width: 2160,
    height: 2100,
    fit: 'contain',
    mobile: {
      src: '/media/product/dashboard-mobile.webp',
      width: 732,
      height: 966,
    },
  },
  revenues: {
    src: '/media/product/receitas.webp',
    alt: 'Tela real de receitas do PingoFin, com vendas, vencimentos, recebido, restante e situação. Dados de demonstração.',
    label: 'Entradas e recebimentos',
    width: 2160,
    height: 2100,
    fit: 'contain',
    mobile: {
      src: '/media/product/receitas-mobile.webp',
      width: 780,
      height: 1920,
    },
  },
  expenses: {
    src: '/media/product/despesas.webp',
    alt: 'Tela real de despesas do PingoFin, com filtros, vencimentos, pagamentos e situação. Dados de demonstração.',
    label: 'Saídas e pagamentos',
    width: 2160,
    height: 2100,
    fit: 'contain',
    mobile: {
      src: '/media/product/despesas-mobile.webp',
      width: 780,
      height: 1920,
    },
  },
  pending: {
    src: '/media/product/pendencias.webp',
    alt: 'Relatório real a receber e a pagar, com parcelas, vencimentos e valores previstos separados das baixas. Dados de demonstração.',
    label: 'Pendências e vencimentos',
    width: 2160,
    height: 2100,
    fit: 'contain',
    mobile: {
      src: '/media/product/pendencias-mobile.webp',
      width: 780,
      height: 1920,
    },
  },
  reports: {
    src: '/media/product/relatorios.webp',
    alt: 'Relatório mensal real de outubro de 2026, com totais, resultado e distribuição por categoria. Dados de demonstração.',
    label: 'Relatórios',
    width: 2160,
    height: 2100,
    fit: 'contain',
    mobile: {
      src: '/media/product/relatorios-mobile.webp',
      width: 780,
      height: 1920,
    },
  },
  companion: {
    src: '/media/product/cronograma.webp',
    alt: 'Cronograma real: entrada recebida e três parcelas de R$ 600,00 com vencimentos e lembretes individuais. Dados de demonstração.',
    label: 'Entrada e parcelas',
    width: 2160,
    height: 602,
    fit: 'contain',
    mobile: {
      src: '/media/product/parcelas-mobile.webp',
      width: 732,
      height: 2442,
    },
  },
  chart: {
    src: '/media/product/grafico.webp',
    alt: 'Gráfico real de entradas e saídas por dia, em outubro de 2026. Dados de demonstração.',
    label: 'Entradas e saídas',
    width: 2160,
    height: 1177,
    fit: 'contain',
  },
} satisfies Record<string, LandingMedia | LandingMedia[]>
export const applicationUrl =
  import.meta.env.VITE_APPLICATION_URL ||
  (import.meta.env.DEV ? 'http://localhost:3000/login' : '')
export const pilotUrl = import.meta.env.VITE_PILOT_URL || ''
