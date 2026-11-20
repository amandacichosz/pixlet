<script setup lang="ts">
import { ref } from 'vue'
import { PixLink } from '@pixlet/link'
import '@pixlet/link/style.css'

defineOptions({ directives: { 'pix-link': PixLink } })

const lightOn = ref(false)
</script>

<template>
  <p>Read the <a v-pix-link href="/guide/theming">theming guide</a> for color tokens.</p>
  <div class="light-toggle">
    <button v-pix-link type="button" :aria-pressed="lightOn" @click="lightOn = !lightOn">
      Toggle light
    </button>
    <span class="light-toggle__bulb" :class="{ 'is-lit': lightOn }" aria-hidden="true"></span>
  </div>
</template>

<style scoped>
.light-toggle {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.light-toggle__bulb {
  position: relative;
  width: 0.75rem;
  height: 0.85rem;
  margin-block-end: 0.25rem;
  border: 1.5px solid currentColor;
  border-radius: 50% 50% 42% 42%;
}

.light-toggle__bulb::after {
  position: absolute;
  inset-block-start: 100%;
  inset-inline: 25%;
  height: 0.25rem;
  border: 1px solid currentColor;
  border-block-start: 0;
  border-radius: 0 0 2px 2px;
  content: '';
}

.light-toggle__bulb.is-lit {
  background-color: #facc15;
  box-shadow: 0 0 0.45rem #facc15;
}
</style>
