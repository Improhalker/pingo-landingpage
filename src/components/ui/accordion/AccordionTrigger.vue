<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from 'reka-ui'
import { Plus } from '@lucide/vue'
</script>
<template>
  <AccordionHeader
    ><AccordionTrigger class="faq-trigger" data-slot="accordion-trigger"
      ><slot /><Plus
        aria-hidden="true"
        :size="22"
        class="faq-icon" /></AccordionTrigger
  ></AccordionHeader>
</template>
