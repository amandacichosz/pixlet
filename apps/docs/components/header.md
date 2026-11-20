<script setup lang="ts">
import HeaderActions from '../../../packages/header/demos/HeaderActions.vue'
</script>

# Header

`PixHeader` displays a left-aligned title and subtitle with room for actions on the right.

## Example

<div class="pix-demo-preview">
  <HeaderActions />
</div>

```vue
<script setup lang="ts">
import { PixButton } from '@pixlet/button'
import { PixHeader } from '@pixlet/header'
import '@pixlet/button/style.css'
import '@pixlet/header/style.css'
</script>

<template>
  <PixHeader size="page" title="Project settings" subtitle="Manage your project preferences" :aria-level="2">
    <template #headerActions>
      <PixButton>Save changes</PixButton>
    </template>
  </PixHeader>
</template>
```

Pass an array to show several subtitle items on one line when space allows. Bullets appear only between items on the same line.

```vue
<PixHeader size="card" title="Invitations" :subtitle="['3 pending', '12 accepted', 'Last sent yesterday']" />
```

## Sizes

| Size | Title | Subtitle |
| --- | ---: | ---: |
| `page` | 32 px | 16 px |
| `section` (default) | 24 px | 14 px |
| `card` | 20 px | 14 px |
| `small` | 16 px | 12 px |

Sizes use `rem` and scale with the root font size. Set `aria-level` according to the document hierarchy.

## API

| Prop | Type | Description |
| --- | --- | --- |
| `title` | `string` | Required title text. |
| `subtitle` | `string` \| `readonly string[]` | Optional text or a list of bullet-separated items below the title. |
| `size` | `'page'` \| `'section'` \| `'card'` \| `'small'` | Sets the title and subtitle size. Defaults to `section`. |
| `aria-level` | `number` | Optional heading level. Sets `role="heading"` and `aria-level` on the title. |

Use the `headerActions` slot for controls at the right edge of the header.
