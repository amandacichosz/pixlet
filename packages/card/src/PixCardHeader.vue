<script setup lang="ts">
import { PixHeader } from '@pixlet/header'

defineProps<{
  title: string
  subtitle?: string | string[]
  ariaLevel?: number
}>()

defineSlots<{
  actions?(): unknown
}>()
</script>

<template>
  <PixHeader
    class="pix-card__header"
    size="card"
    :title="title"
    :subtitle="subtitle"
    :aria-level="ariaLevel"
  >
    <template v-if="$slots.actions" #headerActions>
      <slot name="actions" />
    </template>
  </PixHeader>
</template>
