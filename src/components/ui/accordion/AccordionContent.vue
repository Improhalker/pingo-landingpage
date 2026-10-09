<script setup lang="ts">
import { AccordionContent } from 'reka-ui'
</script>
<template>
  <AccordionContent class="faq-content" data-slot="accordion-content"
    ><div class="faq-answer"><slot /></div
  ></AccordionContent>
</template>
