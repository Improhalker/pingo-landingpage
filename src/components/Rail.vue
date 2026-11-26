<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowLeft, ArrowRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
// Horizontal rail: native swipe with scroll snap, arrow buttons and arrow keys when focused.
// With `grid`, wide screens show every card in a grid and hide the controls.
withDefaults(defineProps<{ label: string; grid?: boolean }>(), {
  grid: false,
})
const rail = ref<HTMLElement | null>(null)
const atStart = ref(true)
const atEnd = ref(false)
function update() {
  const element = rail.value
  if (!element) return
  atStart.value = element.scrollLeft <= 4
  atEnd.value =
    element.scrollLeft + element.clientWidth >= element.scrollWidth - 4
}
function move(direction: number) {
  const element = rail.value
  if (!element) return
  const card = element.firstElementChild as HTMLElement | null
  element.scrollBy({
    left:
      direction *
      ((card?.getBoundingClientRect().width ?? element.clientWidth) + 20),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'instant'
      : 'smooth',
  })
}
function keyboard(event: KeyboardEvent) {
  if (
    event.target !== rail.value ||
    !['ArrowLeft', 'ArrowRight'].includes(event.key)
  )
    return
  event.preventDefault()
  move(event.key === 'ArrowLeft' ? -1 : 1)
}
onMounted(() => {
  update()
  window.addEventListener('resize', update, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('resize', update))
</script>
<template>
  <div class="rail-wrap" :class="{ 'rail-grid': grid }">
    <div class="rail-controls">
      <Button
        variant="outline"
        size="icon"
        :aria-label="'Anterior: ' + label"
        :disabled="atStart"
        @click="move(-1)"
        ><ArrowLeft aria-hidden="true" /></Button
      ><Button
        variant="outline"
        size="icon"
        :aria-label="'Próximo: ' + label"
        :disabled="atEnd"
        @click="move(1)"
        ><ArrowRight aria-hidden="true"
      /></Button>
    </div>
    <div
      ref="rail"
      class="rail"
      role="region"
      :aria-label="label + '. Deslize ou use as setas para ver mais.'"
      tabindex="0"
      @keydown="keyboard"
      @scroll.passive="update"
    >
      <slot />
    </div>
  </div>
</template>
