<script setup lang="ts">
import { PixButton } from '@pixlet/button'
</script>

<template>
  <div class="pix-demo">
    <PixButton>Primary</PixButton>
    <PixButton variant="secondary">Secondary</PixButton>
    <PixButton disabled>Disabled</PixButton>
  </div>
</template>

<style scoped>
.pix-demo { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
</style>
