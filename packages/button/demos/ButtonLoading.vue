<script setup lang="ts">
import { ref } from 'vue'
import { PixButton } from '@pixlet/button'
const loading = ref(false)
</script>

<template>
  <PixButton :loading="loading" @click="loading = !loading">
    {{ loading ? 'Saving…' : 'Save changes' }}
  </PixButton>
  <button v-if="loading" class="reset" @click="loading = false">Reset demo</button>
</template>

<style scoped>
.reset { margin-left: 12px; text-decoration: underline; }
</style>
