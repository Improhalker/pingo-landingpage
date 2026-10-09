<script setup lang="ts">
import {
  TabsRoot,
  useForwardPropsEmits,
  type TabsRootProps,
  type TabsRootEmits,
} from 'reka-ui'
const props = defineProps<TabsRootProps>()
const emits = defineEmits<TabsRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>
<template>
  <TabsRoot v-bind="forwarded" data-slot="tabs"><slot /></TabsRoot>
</template>
