<script setup lang="ts">
import { PixButton } from '@pixlet/button'
import { PixHeader } from '@pixlet/header'
import '@pixlet/button/style.css'
import '@pixlet/header/style.css'
</script>

<template>
  <div class="header-examples">
    <PixHeader size="page" title="Project settings" subtitle="Manage your project preferences" :aria-level="3">
      <template #headerActions>
        <PixButton>Save changes</PixButton>
      </template>
    </PixHeader>
    <PixHeader size="section" title="Team access" subtitle="Manage who can view and edit this project" :aria-level="4" />
    <PixHeader
      size="card"
      title="Invitations"
      :subtitle="['3 pending', '12 accepted', 'Last sent yesterday']"
      :aria-level="5"
    />
    <PixHeader size="small" title="Pending" subtitle="Invitations awaiting a response" :aria-level="6" />
  </div>
</template>

<style scoped>
.header-examples {
  display: grid;
  gap: 1.5rem;
}
</style>
