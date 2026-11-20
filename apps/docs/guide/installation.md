# Installation

Pixlet components are individually installable packages. This starter has not been published to npm yet.

Once published, consumers can run:

```bash
pnpm add @pixlet/button @pixlet/tokens
```

Import the component and styles:

```vue
<script setup lang="ts">
import { PixButton } from '@pixlet/button'
import '@pixlet/tokens/tokens.css'
import '@pixlet/button/style.css'
</script>

<template>
  <PixButton>Continue</PixButton>
</template>
```

The `@pixlet` npm scope must be available to you before publishing under that name.
