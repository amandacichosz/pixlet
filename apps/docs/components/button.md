<script setup lang="ts">
import ButtonVariants from '../../../packages/button/demos/ButtonVariants.vue'
import ButtonSizes from '../../../packages/button/demos/ButtonSizes.vue'
import ButtonLoading from '../../../packages/button/demos/ButtonLoading.vue'
</script>

# Button

A clickable action component from `@pixlet/button`.

## Variants

<div class="pix-demo-preview">
  <ButtonVariants />
</div>

```vue
<PixButton variant="primary">Primary</PixButton>
<PixButton variant="secondary">Secondary</PixButton>
```

## Sizes

<div class="pix-demo-preview">
  <ButtonSizes />
</div>

## Loading

<div class="pix-demo-preview">
  <ButtonLoading />
</div>

## Installation

```bash
pnpm add @pixlet/button @pixlet/tokens
```

## API

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `'primary' \| 'secondary'` | `'primary'` |
| `size` | `'sm' \| 'md'` | `'md'` |
| `disabled` | `boolean` | `false` |
| `loading` | `boolean` | `false` |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |

The component forwards native button events and attributes through Vue's fallthrough attributes.

Use the default slot for the button label. A loading button keeps the slot visible, disables native activation, and exposes `aria-busy="true"`.

## Styling tokens

| Token | Controls |
| --- | --- |
| `--pix-button-bg` | Primary background |
| `--pix-button-fg` | Primary label color |
| `--pix-button-hover-bg` | Primary hover background |
| `--pix-button-secondary-bg` | Secondary background |
| `--pix-button-secondary-fg` | Secondary label and border color |
| `--pix-button-focus-ring` | Keyboard focus outline color |
| `--pix-button-radius` | Corner radius |
| `--pix-button-gap` | Gap between the spinner and label |
