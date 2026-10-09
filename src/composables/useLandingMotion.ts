import { animate, stagger } from 'animejs'
import { nextTick, onMounted, onBeforeUnmount, watch, type Ref } from 'vue'

// Essential content stays readable before JavaScript runs and after cleanup.
export function useLandingMotion(
  root: Ref<HTMLElement | null>,
  paused: Ref<boolean>,
) {
  let animations: ReturnType<typeof animate>[] = []
  let continuous: ReturnType<typeof animate>[] = []
  let observer: IntersectionObserver | undefined
  let preference: MediaQueryList | undefined
  function addLoop(
    target: Parameters<typeof animate>[0],
    options: Parameters<typeof animate>[1],
  ) {
    const animation = animate(target, options)
    animations.push(animation)
    continuous.push(animation)
  }
  function clear() {
    observer?.disconnect()
    animations.forEach((animation) => animation.revert())
    animations = []
    continuous = []
  }
  function start() {
    clear()
    if (!root.value || paused.value || preference?.matches) return
    animations.push(
      animate(root.value.querySelectorAll('[data-enter]'), {
        opacity: [0, 1],
        y: [24, 0],
        duration: 950,
        delay: stagger(100),
        ease: 'out(3)',
      }),
    )
    root.value
      .querySelectorAll<HTMLElement>('[data-float]')
      .forEach((element, index) => {
        addLoop(element, {
          y: [-7, 7],
          rotate: [-1, 1],
          duration: 3800 + index * 600,
          alternate: true,
          loop: true,
          ease: 'inOutSine',
        })
      })
    const ticker = root.value.querySelector<HTMLElement>('[data-ticker]')
    if (ticker)
      addLoop(ticker, {
        translateX: ['0%', '-50%'],
        duration: 38000,
        loop: true,
        ease: 'linear',
      })
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            observer?.unobserve(entry.target)
            animations.push(
              animate(entry.target, {
                opacity: [0, 1],
                y: [28, 0],
                duration: 850,
                ease: 'out(3)',
              }),
            )
          })
        },
        { threshold: 0.12 },
      )
      root.value
        .querySelectorAll('[data-reveal]')
        .forEach((element) => observer?.observe(element))
    }
  }
  onMounted(() => {
    preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    preference.addEventListener('change', start)
    start()
  })
  watch(paused, async () => {
    await nextTick()
    start()
  })
  onBeforeUnmount(() => {
    clear()
    preference?.removeEventListener('change', start)
  })
  function hold() {
    continuous.forEach((animation) => animation.pause())
  }
  function release() {
    if (!paused.value && !preference?.matches)
      continuous.forEach((animation) => animation.play())
  }
  return { hold, release }
}
