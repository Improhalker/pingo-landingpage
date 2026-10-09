<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Pause,
  Play,
  LayoutDashboard,
  ChartColumn,
  ArrowDownLeft,
  ArrowUpRight as Outgoing,
  CalendarDays,
  Sparkles,
  CircleCheck,
  MoveUpRight,
} from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import MediaSlot from '@/components/MediaSlot.vue'
import Rail from '@/components/Rail.vue'
import { media, applicationUrl, pilotUrl } from '@/config/media'
import { useLandingMotion } from '@/composables/useLandingMotion'

const root = ref<HTMLElement | null>(null)
const paused = ref(false)
const mobileOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const headerTone = ref('dark')
const scrolled = ref(false)
const activeTab = ref('overview')
const { hold, release } = useLandingMotion(root, paused)
const benefits = [
  {
    title: 'O que já entrou?',
    copy: 'O recebido merece um lugar próprio. Assim, o que aconteceu não se mistura com o que você espera receber.',
    tag: 'Entradas',
  },
  {
    title: 'O que falta receber?',
    copy: 'Tenha uma visão das pendências para saber o que conferir e com quem conversar.',
    tag: 'Recebimentos',
  },
  {
    title: 'O que vem pela frente?',
    copy: 'Organize contas e vencimentos para olhar a rotina com um pouco mais de antecedência.',
    tag: 'Saídas',
  },
  {
    title: 'Como está o mês?',
    copy: 'Junte as informações do negócio em uma visão mais clara, com período e contexto.',
    tag: 'Visão geral',
  },
]
const steps = [
  {
    title: 'Registre.',
    copy: 'Dê um lugar às entradas e às saídas do seu negócio.',
  },
  {
    title: 'Confira.',
    copy: 'Separe o que estava previsto do que foi recebido ou pago.',
  },
  {
    title: 'Acompanhe.',
    copy: 'Volte às pendências e aos próximos vencimentos.',
  },
  { title: 'Entenda.', copy: 'Olhe o período com as informações reunidas.' },
]
const productViews = [
  {
    value: 'overview',
    label: 'Visão geral',
    icon: LayoutDashboard,
    asset: media.dashboard,
    title: 'Um olhar para o seu mês.',
    copy: 'Uma visão para reunir entradas, saídas e pendências, sempre com o período à vista.',
    stage: 'Tela real do produto',
  },
  {
    value: 'revenues',
    label: 'Entradas',
    icon: ArrowDownLeft,
    asset: media.revenues,
    title: 'Receber. E saber que recebeu.',
    copy: 'Acompanhe o que foi combinado e confira os recebimentos. Previsto e recebido têm significados diferentes.',
    stage: 'Tela real do produto',
  },
  {
    value: 'expenses',
    label: 'Saídas',
    icon: Outgoing,
    asset: media.expenses,
    title: 'Cada conta no seu lugar.',
    copy: 'A proposta é organizar despesas, pagamentos e vencimentos em uma rotina simples de conferir.',
    stage: 'Tela real do produto',
  },
  {
    value: 'pending',
    label: 'Pendências',
    icon: CalendarDays,
    asset: media.pending,
    title: 'O próximo passo fica mais claro.',
    copy: 'Uma visão para encontrar o que ainda precisa de atenção, sem misturar pendências com valores realizados.',
    stage: 'Tela real do produto',
  },
  {
    value: 'reports',
    label: 'Relatórios',
    icon: ChartColumn,
    asset: media.reports,
    title: 'O período, com contexto.',
    copy: 'Consulte o resultado do mês e os recebimentos e pagamentos por categoria.',
    stage: 'Tela real do produto',
  },
]
const previews = [
  {
    asset: media.revenues,
    number: '01',
    title: 'Receber com clareza.',
    copy: 'Combinado e recebido, cada um no seu lugar.',
  },
  {
    asset: media.expenses,
    number: '02',
    title: 'Organizar o que sai.',
    copy: 'Contas, pagamentos e próximos vencimentos.',
  },
  {
    asset: media.pending,
    number: '03',
    title: 'Voltar ao que importa.',
    copy: 'Uma rotina de consulta, revisão e acompanhamento.',
  },
]
const faqs = [
  {
    question: 'Para quem é o PingoFin?',
    answer:
      'Para pequenos negócios que buscam uma rotina financeira mais simples. Autoescolas são o primeiro público de validação, mas a proposta do produto é genérica.',
  },
  {
    question: 'Já posso usar todas essas telas?',
    answer:
      'As capturas mostram telas já implementadas do PingoFin: visão geral, receitas, despesas, parcelas e relatórios. Os dados são de demonstração. A liberação de acesso depende da preparação do piloto.',
  },
  {
    question: 'O Pingo já tem inteligência artificial?',
    answer:
      'Ainda não. O Pingo já tem uma interface de conversa local, mas não responde com IA, não analisa suas finanças e não registra operações. Aqui ele apresenta a personalidade da marca.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer:
      'Esta apresentação se adapta ao celular. Os fluxos financeiros do produto precisam ser validados conforme cada módulo fica pronto; a landing não comprova que todos eles já estejam disponíveis.',
  },
  {
    question: 'Como funciona o piloto?',
    answer:
      'O PingoFin está sendo preparado para validar a rotina com pequenos negócios. As condições do piloto, os canais de contato e a contratação ainda serão definidos. Por enquanto, você pode explorar esta prévia.',
  },
  {
    question: 'Vai ter planos pagos?',
    answer:
      'Os planos e preços ainda não foram definidos. Esta página não tem checkout nem contratação ativa.',
  },
]
let frame = 0
function updateHeader() {
  frame = 0
  scrolled.value = window.scrollY > 24
  const section = document
    .elementFromPoint(
      window.innerWidth / 2,
      (document.querySelector('.header-inner')?.getBoundingClientRect()
        .bottom ?? 88) + 4,
    )
    ?.closest<HTMLElement>('[data-tone]')
  if (section?.dataset.tone) headerTone.value = section.dataset.tone
}
function scheduleHeader() {
  if (!frame) frame = requestAnimationFrame(updateHeader)
}
function closeMenu() {
  mobileOpen.value = false
}
async function escapeMenu(event: KeyboardEvent) {
  if (event.key === 'Escape' && mobileOpen.value) {
    mobileOpen.value = false
    await nextTick()
    menuButton.value?.focus()
  }
}
onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', scheduleHeader, { passive: true })
  window.addEventListener('resize', scheduleHeader, { passive: true })
  window.addEventListener('keydown', escapeMenu)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', scheduleHeader)
  window.removeEventListener('resize', scheduleHeader)
  window.removeEventListener('keydown', escapeMenu)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <div ref="root" class="landing" :data-paused="paused">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header
      class="site-header"
      :data-tone="headerTone"
      :class="{ 'header-scrolled': scrolled, 'menu-open': mobileOpen }"
    >
      <div class="header-inner container">
        <a
          href="#inicio"
          class="wordmark"
          aria-label="PingoFin, início"
          @click="closeMenu"
        >
          <svg viewBox="0 0 26 32" aria-hidden="true" class="brand-drop">
            <path
              d="M13 1C10 8 2 13 2 21a11 11 0 0 0 22 0C24 13 16 8 13 1Z"
              fill="currentColor"
            />
            <path d="M13 1c3 4 7 6 8 10-5 0-9-2-8-10Z" fill="#fbbf24" />
          </svg>
          Pingo<span>Fin</span>
        </a>
        <nav class="desktop-nav" aria-label="Navegação principal">
          <a href="#como-funciona">Como funciona</a
          ><a href="#pingo">Conheça o Pingo</a><a href="#duvidas">Dúvidas</a>
        </nav>
        <div class="header-actions">
          <Button
            class="motion-toggle"
            variant="ghost"
            size="icon"
            :aria-label="paused ? 'Retomar animações' : 'Pausar animações'"
            :aria-pressed="paused"
            @click="paused = !paused"
          >
            <Play v-if="paused" :size="17" aria-hidden="true" /><Pause
              v-else
              :size="17"
              aria-hidden="true"
            />
          </Button>
          <a v-if="applicationUrl" :href="applicationUrl" class="login-link"
            >Entrar <ArrowUpRight :size="16" aria-hidden="true"
          /></a>
          <Button as-child class="header-cta"
            ><a href="#produto">Conhecer <ArrowUpRight aria-hidden="true" /></a
          ></Button>
          <button
            ref="menuButton"
            class="mobile-menu-button"
            :aria-expanded="mobileOpen"
            aria-controls="mobile-navigation"
            :aria-label="mobileOpen ? 'Fechar menu' : 'Abrir menu'"
            @click="mobileOpen = !mobileOpen"
          >
            <X v-if="mobileOpen" aria-hidden="true" /><Menu
              v-else
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <nav
        v-if="mobileOpen"
        id="mobile-navigation"
        class="mobile-nav container"
        aria-label="Navegação no celular"
      >
        <a href="#como-funciona" @click="closeMenu"
          >Como funciona <ArrowUpRight aria-hidden="true"
        /></a>
        <a href="#pingo" @click="closeMenu"
          >Conheça o Pingo <ArrowUpRight aria-hidden="true"
        /></a>
        <a href="#produto" @click="closeMenu"
          >Explore o produto <ArrowUpRight aria-hidden="true"
        /></a>
        <a href="#duvidas" @click="closeMenu"
          >Dúvidas <ArrowUpRight aria-hidden="true"
        /></a>
        <a v-if="applicationUrl" :href="applicationUrl"
          >Entrar <ArrowUpRight aria-hidden="true"
        /></a>
      </nav>
    </header>

    <main id="conteudo">
      <section id="inicio" class="hero dark-section" data-tone="dark">
        <div class="hero-grid container">
          <div class="hero-copy">
            <p class="eyebrow" data-enter>
              <span class="status-dot" /> PARA O SEU PEQUENO GRANDE NEGÓCIO
            </p>
            <h1 data-enter>
              Seu financeiro<br /><span>em dia.</span><br />Sem complicação<span
                class="yellow-dot"
                >.</span
              >
            </h1>
            <p class="hero-description" data-enter>
              Menos informação espalhada.<br />Mais clareza para tocar o seu
              negócio.
            </p>
            <div class="hero-actions" data-enter>
              <Button as-child size="lg" class="button-yellow"
                ><a href="#produto"
                  >Explore o PingoFin
                  <ArrowUpRight aria-hidden="true" /></a></Button
              ><a href="#pingo" class="text-link"
                >Conheça o Pingo <ArrowRight :size="18" aria-hidden="true"
              /></a>
            </div>
            <p class="quiet-note" data-enter>
              Uma nova rotina financeira. Em construção, com cuidado.
            </p>
          </div>
          <div
            class="hero-scene hero-product-scene"
            data-enter
            @mouseenter="hold"
            @mouseleave="release"
            @focusin="hold"
            @focusout="release"
          >
            <div class="product-glow" aria-hidden="true" />
            <div class="hero-product-frame">
              <MediaSlot :asset="media.heroProduct" eager screen />
            </div>
            <div class="hero-result-fragment" aria-hidden="true">
              <MediaSlot :asset="media.benefits[3]!" eager />
            </div>
            <div class="hero-pingo-companion" data-float aria-hidden="true">
              <MediaSlot :asset="media.hero" eager />
            </div>
            <p class="hero-capture-note">
              Interface real · dados de demonstração
            </p>
          </div>
        </div>
        <a class="scroll-cue container" href="#clareza"
          ><span>VEM VER COMO PODE SER MAIS LEVE</span
          ><span aria-hidden="true">↓</span></a
        >
      </section>

      <div
        class="ticker-band dark-section"
        data-tone="dark"
        @mouseenter="hold"
        @mouseleave="release"
        @focusin="hold"
        @focusout="release"
      >
        <div class="ticker-track" data-ticker>
          <div
            v-for="copy in 2"
            :key="copy"
            class="ticker-copy"
            :aria-hidden="copy === 2 ? true : undefined"
          >
            <span>Entradas</span><i>✦</i><span>Saídas</span><i>✦</i
            ><span>Pendências</span><i>✦</i><span>Seu negócio</span><i>✦</i>
          </div>
        </div>
      </div>

      <section
        id="clareza"
        class="benefits-section dark-section section-space"
        data-tone="dark"
      >
        <div class="container">
          <div class="section-heading split-heading" data-reveal>
            <div>
              <p class="eyebrow">CLAREZA MUDA A ROTINA</p>
              <h2>
                Boas perguntas.<br /><span class="text-lilac"
                  >Um lugar para olhar.</span
                >
              </h2>
            </div>
            <p>
              O seu negócio já tem muita coisa acontecendo. Organizar o
              financeiro pode começar pelo básico.
            </p>
          </div>
          <Rail label="Perguntas para organizar o financeiro">
            <article
              v-for="(benefit, index) in benefits"
              :key="benefit.title"
              class="benefit-card"
            >
              <div class="benefit-image">
                <MediaSlot :asset="media.benefits[index]!" />
              </div>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.copy }}</p>
            </article>
          </Rail>
          <p class="section-footnote">
            Recortes da interface real. Valores de demonstração, sem dados de
            clientes.
          </p>
        </div>
      </section>

      <section
        id="como-funciona"
        class="journey-section dark-section section-space"
        data-tone="dark"
      >
        <div class="journey-grid container">
          <div class="journey-intro" data-reveal>
            <p class="eyebrow">DO PRIMEIRO REGISTRO À VISÃO DO MÊS</p>
            <h2>
              Uma rotina.<br /><span class="text-lilac">Quatro passos.</span>
            </h2>
            <p>
              Sem precisar resolver tudo de uma vez. Um passo simples ajuda o
              próximo a fazer sentido.
            </p>
            <div class="journey-art">
              <MediaSlot :asset="media.companion" />
            </div>
          </div>
          <ol class="steps">
            <li v-for="(step, index) in steps" :key="step.title" data-reveal>
              <span class="step-number">0{{ index + 1 }}</span>
              <div>
                <h3>{{ step.title }}</h3>
                <p>{{ step.copy }}</p>
              </div>
              <ArrowUpRight class="step-arrow" aria-hidden="true" />
            </li>
          </ol>
        </div>
      </section>

      <section
        class="screens-section dark-section section-space"
        data-tone="dark"
      >
        <div class="container">
          <div class="section-heading split-heading" data-reveal>
            <div>
              <p class="eyebrow">ESPAÇO PARA O QUE IMPORTA</p>
              <h2>
                A rotina ganha<br /><span class="text-lilac"
                  >uma visão mais clara.</span
                >
              </h2>
            </div>
            <p>
              Entrar, conferir e seguir o dia. Estamos construindo uma
              experiência para o financeiro caber na sua rotina.
            </p>
          </div>
          <Rail label="Prévias das telas do PingoFin"
            ><article
              v-for="preview in previews"
              :key="preview.title"
              class="preview-card"
            >
              <div class="preview-meta">
                <span>{{ preview.number }} / PINGOFIN</span
                ><span>TELA REAL</span>
              </div>
              <MediaSlot :asset="preview.asset" screen />
              <div class="preview-copy">
                <h3>{{ preview.title }}</h3>
                <p>{{ preview.copy }}</p>
              </div>
            </article></Rail
          >
        </div>
      </section>

      <section
        id="pingo"
        class="pingo-section dark-section section-space"
        data-tone="dark"
      >
        <div class="pingo-story container">
          <div class="pingo-story-art" data-reveal>
            <span class="pingo-circle" aria-hidden="true" /><MediaSlot
              :asset="media.hero"
            /><span class="hello-sticker"
              >oi, vamos juntos? <Sparkles :size="18" aria-hidden="true"
            /></span>
          </div>
          <div class="pingo-story-copy" data-reveal>
            <p class="eyebrow">CONHEÇA QUEM DÁ VIDA A ESSA IDEIA</p>
            <h2>
              Seu negócio<br />é sério.<br /><span class="text-lilac"
                >A rotina pode<br />ser mais leve.</span
              >
            </h2>
            <p>
              O Pingo é a companhia roxa dessa jornada. Um jeito próximo de
              falar de dinheiro, sem perder a clareza.
            </p>
            <div class="pingo-status">
              <Sparkles :size="21" aria-hidden="true" />
              <p>
                <strong>Um assistente em construção.</strong><br />Por enquanto,
                personalidade e interface. A inteligência artificial vem em
                outra etapa.
              </p>
            </div>
          </div>
        </div>
        <p class="transition-line container" data-reveal>
          Organizar hoje.<br /><span>Respirar melhor amanhã.</span
          ><span class="transition-star" aria-hidden="true">✦</span>
        </p>
      </section>

      <section
        class="comparison-section light-section section-space"
        data-tone="light"
      >
        <div class="container comparison-grid">
          <div class="comparison-title" data-reveal>
            <p class="eyebrow">MENOS DISPERSÃO. MAIS CONTEXTO.</p>
            <h2>
              Chega de<br />juntar as peças<br /><span class="text-purple"
                >todo dia.</span
              >
            </h2>
          </div>
          <div class="comparison-panels" data-reveal>
            <div class="scattered-panel">
              <span class="panel-label">INFORMAÇÃO ESPALHADA</span
              ><span class="paper-note paper-one">anotação<br />no caderno</span
              ><span class="paper-note paper-two">“já pagou?”</span
              ><span class="paper-note paper-three"
                >vencimento<br />na conversa</span
              ><span class="paper-note paper-four">planilha<br />do mês</span
              ><span class="scattered-line" aria-hidden="true" />
            </div>
            <div class="organized-panel">
              <span class="panel-label">UMA ROTINA ORGANIZADA</span>
              <div>
                <CircleCheck :size="26" aria-hidden="true" /><span
                  >Registros em um lugar</span
                >
              </div>
              <div>
                <CircleCheck :size="26" aria-hidden="true" /><span
                  >Previsto e realizado separados</span
                >
              </div>
              <div>
                <CircleCheck :size="26" aria-hidden="true" /><span
                  >Um período para acompanhar</span
                >
              </div>
              <span class="small-wordmark">PingoFin <span>✦</span></span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="produto"
        class="product-section light-section section-space"
        data-tone="light"
      >
        <div class="container">
          <div class="section-heading product-heading" data-reveal>
            <p class="eyebrow">CONHEÇA A EXPERIÊNCIA</p>
            <h2>
              Um financeiro com<br /><span class="text-purple"
                >espaço para respirar.</span
              >
            </h2>
            <p>
              Explore as telas reais do PingoFin, com dados de demonstração.
            </p>
          </div>
          <Tabs
            v-model="activeTab"
            class="product-tabs"
            activation-mode="automatic"
          >
            <TabsList aria-label="Áreas do PingoFin" class="product-tab-list"
              ><TabsTrigger
                v-for="view in productViews"
                :key="view.value"
                :value="view.value"
                ><component :is="view.icon" :size="18" aria-hidden="true" />{{
                  view.label
                }}</TabsTrigger
              ></TabsList
            >
            <TabsContent
              v-for="view in productViews"
              :key="view.value"
              :value="view.value"
              ><div class="product-panel">
                <div class="product-panel-header">
                  <div>
                    <h3>{{ view.title }}</h3>
                    <p>{{ view.copy }}</p>
                  </div>
                  <span class="stage-label"><span />{{ view.stage }}</span>
                </div>
                <div class="product-screen">
                  <div class="browser-chrome" aria-hidden="true">
                    <i /><i /><i /><span
                      >pingofin · {{ view.label.toLowerCase() }}</span
                    >
                  </div>
                  <MediaSlot :asset="view.asset" screen />
                </div>
                <p class="product-disclaimer">
                  Interface real · dados de demonstração · sem dados de clientes
                </p>
              </div></TabsContent
            >
          </Tabs>
        </div>
      </section>

      <section
        class="pilot-section light-section section-space"
        data-tone="light"
      >
        <div class="container pilot-panel" data-reveal>
          <span class="pilot-star" aria-hidden="true">✦</span>
          <div>
            <p class="eyebrow">FEITO PARA CRESCER PERTO DE QUEM USA</p>
            <h2>
              Pequenos negócios.<br /><span class="text-purple"
                >Uma grande conversa.</span
              >
            </h2>
            <p>
              Estamos preparando o PingoFin para validar uma rotina financeira
              mais simples. Autoescolas são o nosso primeiro ponto de partida.
            </p>
            <p class="pilot-note">
              Piloto em preparação. Condições e canais de contato serão
              definidos.
            </p>
          </div>
          <Button as-child size="lg" class="button-purple"
            ><a :href="pilotUrl || '#produto'"
              >{{ pilotUrl ? 'Conhecer o piloto' : 'Explorar a prévia'
              }}<ArrowUpRight aria-hidden="true" /></a
          ></Button>
        </div>
      </section>

      <section
        id="duvidas"
        class="faq-section light-section section-space"
        data-tone="light"
      >
        <div class="container faq-grid">
          <div data-reveal>
            <p class="eyebrow">PODE PERGUNTAR</p>
            <h2>
              Vamos deixar<br /><span class="text-purple">mais claro?</span>
            </h2>
            <p>
              O que já existe, o que está sendo construído e o que vem depois.
            </p>
          </div>
          <Accordion type="single" collapsible class="faq-list"
            ><AccordionItem
              v-for="(faq, index) in faqs"
              :key="faq.question"
              :value="'faq-' + index"
              ><AccordionTrigger>{{ faq.question }}</AccordionTrigger
              ><AccordionContent
                ><p>{{ faq.answer }}</p></AccordionContent
              ></AccordionItem
            ></Accordion
          >
        </div>
      </section>

      <section class="closing-section dark-section" data-tone="dark">
        <div class="container closing-grid">
          <div class="closing-copy" data-reveal>
            <p class="eyebrow">MAIS CLAREZA PARA SEGUIR</p>
            <h2>
              Cuide do seu negócio.<br /><span class="text-lilac"
                >Dê um lugar<br />ao financeiro.</span
              >
            </h2>
            <Button as-child size="lg" class="button-yellow"
              ><a href="#produto"
                >Vem conhecer o PingoFin <MoveUpRight aria-hidden="true" /></a
            ></Button>
          </div>
          <div class="closing-pingo" data-reveal>
            <span class="closing-orbit" aria-hidden="true" /><MediaSlot
              :asset="media.hero"
            />
          </div>
        </div>
      </section>
    </main>
    <footer class="site-footer dark-section" data-tone="dark">
      <div class="container footer-inner">
        <a href="#inicio" class="wordmark"
          >Pingo<span>Fin</span
          ><span class="footer-star" aria-hidden="true">✦</span></a
        >
        <p>Um financeiro simples para pequenos negócios.</p>
        <a href="#duvidas"
          >Dúvidas <ArrowUpRight :size="16" aria-hidden="true"
        /></a>
      </div>
      <div class="container footer-bottom">
        <span>© {{ new Date().getFullYear() }} PingoFin</span
        ><span>Prévia em desenvolvimento · imagens e telas ilustrativas</span>
      </div>
    </footer>
  </div>
</template>
