<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { TabsList } from 'reka-ui'
import { cn } from '@/lib/utils'
const props = defineProps<{ class?: HTMLAttributes['class']; loop?: boolean }>()
</script>
<template>
  <TabsList
    :loop="loop ?? true"
    data-slot="tabs-list"
    :class="
      cn(
        'inline-flex items-center rounded-xl bg-muted p-1 text-muted-foreground',
        props.class,
      )
    "
    ><slot
  /></TabsList>
</template>
