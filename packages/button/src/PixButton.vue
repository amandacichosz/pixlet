<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md'
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
}>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button'
})

const isDisabled = computed(() => props.disabled || props.loading)
</script>

<template>
  <button
    class="pix-button"
    :class="[`pix-button--${variant}`,`pix-button--${size}`]"
    :type="type"
    :disabled="isDisabled"
    :aria-busy="loading ? 'true' : undefined"
  >
    <span v-if="loading" class="pix-button__spinner" aria-hidden="true" />
    <slot />
  </button>
</template>
