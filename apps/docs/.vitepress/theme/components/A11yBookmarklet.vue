<script setup lang="ts">
import { ref } from 'vue'
import bookmarkletSource from './a11y-scan-bookmarklet.txt?raw'

const bookmarklet = bookmarkletSource.trim()
const copyResult = ref<'copied' | 'manual'>()

async function copyBookmarklet() {
  try {
    await navigator.clipboard.writeText(bookmarklet)
    copyResult.value = 'copied'
  } catch {
    copyResult.value = 'manual'
  }
}
</script>

<template>
  <div class="bookmarklet">
    <div class="bookmarklet-actions">
      <a class="bookmarklet-link no-icon" :href="bookmarklet" draggable="true">A11y Scan</a>
      <button class="bookmarklet-copy" type="button" @click="copyBookmarklet">Copy bookmarklet URL</button>
    </div>
    <div role="status">
      <p v-if="copyResult === 'copied'">Bookmarklet URL copied.</p>
      <p v-else-if="copyResult === 'manual'">Select and copy the bookmarklet URL below.</p>
    </div>
    <textarea
      v-if="copyResult === 'manual'"
      class="bookmarklet-url"
      aria-label="Bookmarklet URL"
      rows="3"
      readonly
      :value="bookmarklet"
    />
  </div>
</template>

<style scoped>
.bookmarklet {
  margin: 16px 0;
}

.bookmarklet-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.bookmarklet-actions .bookmarklet-link,
.bookmarklet-copy {
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  text-decoration: none;
}

.bookmarklet-actions .bookmarklet-link {
  color: var(--pix-color-on-primary);
  background: var(--pix-color-primary);
  cursor: grab;
  transition: none;
}

.bookmarklet-actions .bookmarklet-link:hover {
  background: var(--pix-color-primary-hover);
}

.bookmarklet-copy {
  border-color: var(--vp-c-divider);
}

.bookmarklet-copy:hover {
  background: var(--vp-c-bg-soft);
}

.bookmarklet-link:focus-visible,
.bookmarklet-copy:focus-visible,
.bookmarklet-url:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.bookmarklet-url {
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 8px;
  font-family: var(--vp-font-family-mono);
}
</style>
