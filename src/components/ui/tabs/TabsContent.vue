<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { TabsContent } from 'reka-ui'
import { cn } from '@/lib/utils'
const props = defineProps<{ value: string; class?: HTMLAttributes['class'] }>()
</script>
<template>
  <TabsContent
    :value="value"
    data-slot="tabs-content"
    :class="cn('mt-6 outline-none', props.class)"
    ><slot
  /></TabsContent>
</template>
