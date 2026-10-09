<script setup lang="ts">
import { ref, watch } from 'vue'
import { Image } from '@lucide/vue'
import type { LandingMedia } from '@/config/media'
const props = withDefaults(
  defineProps<{
    asset: LandingMedia
    eager?: boolean
    screen?: boolean
    responsive?: boolean
  }>(),
  { eager: false, screen: false, responsive: true },
)
const failed = ref(false)
watch(
  () => props.asset,
  () => {
    failed.value = false
  },
)
</script>
<template>
  <div
    class="media-slot"
    :class="{
      'media-unavailable': !asset.src || failed,
      'has-mobile-media': responsive && asset.mobile,
    }"
    :style="{
      '--media-ratio': asset.width + '/' + asset.height,
      '--mobile-media-ratio': asset.mobile
        ? asset.mobile.width + '/' + asset.mobile.height
        : undefined,
    }"
  >
    <picture v-if="asset.src && !failed">
      <source
        v-if="responsive && asset.mobile"
        media="(max-width: 640px)"
        :srcset="asset.mobile.src"
        :width="asset.mobile.width"
        :height="asset.mobile.height"
      />
      <img
        :src="asset.src"
        :alt="asset.alt"
        :width="asset.width"
        :height="asset.height"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : 'auto'"
        decoding="async"
        :style="{ objectFit: asset.fit || 'contain' }"
        @error="failed = true"
      />
    </picture>
    <div
      v-else
      class="unavailable-content"
      role="img"
      :aria-label="asset.alt + ' Imagem indisponível.'"
    >
      <Image :size="28" aria-hidden="true" /><span
        >{{ asset.label }}<small>Imagem indisponível</small></span
      >
    </div>
    <slot />
  </div>
</template>
