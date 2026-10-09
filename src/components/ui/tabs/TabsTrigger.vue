<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { TabsTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'
const props = defineProps<{
  value: string
  disabled?: boolean
  class?: HTMLAttributes['class']
}>()
</script>
<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    data-slot="tabs-trigger"
    :class="
      cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-bold transition-colors data-[state=active]:bg-card data-[state=active]:text-foreground disabled:pointer-events-none disabled:opacity-50',
        props.class,
      )
    "
    ><slot
  /></TabsTrigger>
</template>
