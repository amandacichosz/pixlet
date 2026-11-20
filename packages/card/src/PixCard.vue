<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'shadow' | 'border'
}>(), {
  variant: 'shadow',
})

defineSlots<{
  default(): unknown
  footer?(): unknown
}>()
</script>

<template>
  <div class="pix-card" :class="`pix-card--${variant}`">
    <slot />
    <div v-if="$slots.footer" class="pix-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
