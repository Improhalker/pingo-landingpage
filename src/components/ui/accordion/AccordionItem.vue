<script setup lang="ts">
import { AccordionItem } from 'reka-ui'
defineProps<{ value: string }>()
</script>
<template>
  <AccordionItem :value="value" class="faq-item" data-slot="accordion-item"
    ><slot
  /></AccordionItem>
</template>
