<script setup lang="ts">
import { ref } from 'vue'
import { PixButton } from '@pixlet/button'
import { PixCard, PixCardContent, PixCardHeader } from '@pixlet/card'
import { PixLink } from '@pixlet/link'
import '@pixlet/button/style.css'
import '@pixlet/card/style.css'
import '@pixlet/link/style.css'

defineOptions({ directives: { 'pix-link': PixLink } })

const showDetails = ref(false)
</script>

<template>
  <div class="card-examples">
    <PixCard>
      <PixCardHeader title="Project setup" subtitle="Pixlet for Vue 3" :aria-level="3">
        <template #actions>
          <PixButton :aria-expanded="showDetails" @click="showDetails = !showDetails">
            {{ showDetails ? 'Hide details' : 'Show details' }}
          </PixButton>
        </template>
      </PixCardHeader>

      <PixCardContent>
        Add components as you need them and style them with shared theme tokens.
        <p v-if="showDetails">Import the token stylesheet once at your app’s entry point.</p>
      </PixCardContent>

      <template #footer>
        <div class="card-example-links">
          <a v-pix-link href="/guide/installation">Installation</a>
          <a v-pix-link href="/guide/theming">Theming</a>
        </div>
      </template>
    </PixCard>

    <PixCard variant="border">
      <PixCardHeader title="Release notes" :subtitle="['Version 0.1.0', 'Vue 3']" :aria-level="3" />
      <PixCardContent>
        This release includes Button, Card, Header, and Link.
      </PixCardContent>
    </PixCard>
  </div>
</template>

<style scoped>
.card-examples {
  display: grid;
  gap: 1.5rem;
}

.card-example-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--pix-spacing-4, 16px);
}
</style>
