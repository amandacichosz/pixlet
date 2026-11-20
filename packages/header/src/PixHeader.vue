<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  subtitle?: string | string[]
  ariaLevel?: number
  size?: 'page' | 'section' | 'card' | 'small'
}>(), {
  size: 'section',
})

defineSlots<{
  headerActions?(): unknown
}>()
</script>

<template>
  <div class="pix-header" :class="`pix-header--${size}`">
    <div class="pix-header__text">
      <div
        class="pix-header__title"
        :role="ariaLevel == null ? undefined : 'heading'"
        :aria-level="ariaLevel"
      >
        {{ title }}
      </div>
      <ul
        v-if="Array.isArray(subtitle) && subtitle.length"
        class="pix-header__subtitle pix-header__subtitle-list"
        role="list"
      >
        <li v-for="(item, index) in subtitle" :key="index" class="pix-header__subtitle-item">
          <span v-if="index > 0" class="pix-header__subtitle-bullet" aria-hidden="true">•</span>
          {{ item }}
        </li>
      </ul>
      <div v-else-if="typeof subtitle === 'string' && subtitle" class="pix-header__subtitle">
        {{ subtitle }}
      </div>
    </div>
    <div v-if="$slots.headerActions" class="pix-header__actions">
      <slot name="headerActions" />
    </div>
  </div>
</template>
