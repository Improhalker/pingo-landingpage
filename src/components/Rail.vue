<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft, ArrowRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
defineProps<{ label: string }>()
const rail = ref<HTMLElement | null>(null)
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
</script>
<template>
  <div class="rail-wrap">
    <div class="rail-controls">
      <Button
        variant="outline"
        size="icon"
        :aria-label="'Anterior: ' + label"
        @click="move(-1)"
        ><ArrowLeft aria-hidden="true" /></Button
      ><Button
        variant="outline"
        size="icon"
        :aria-label="'Próximo: ' + label"
        @click="move(1)"
        ><ArrowRight aria-hidden="true"
      /></Button>
    </div>
    <div
      ref="rail"
      class="rail"
      role="region"
      :aria-label="label"
      tabindex="0"
      @keydown="keyboard"
    >
      <slot />
    </div>
  </div>
</template>
