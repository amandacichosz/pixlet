<script setup lang="ts">
defineSlots<{
  default(): unknown
}>()
</script>

<template>
  <div class="pix-card__content">
    <slot />
  </div>
</template>
