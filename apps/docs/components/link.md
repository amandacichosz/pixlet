<script setup lang="ts">
import LinkExamples from '../../../packages/link/demos/LinkExamples.vue'
</script>

# Link

`PixLink` is a Vue custom directive. Use `v-pix-link` on an anchor for navigation or on a native button for an action, like toggling the light below.

<div class="pix-demo-preview">
  <LinkExamples />
</div>

## Installation

```bash
pnpm add @pixlet/link @pixlet/tokens
```

Import `@pixlet/tokens/tokens.css` in your app to use Pixlet’s theme colors.

<<< ../../../packages/link/demos/LinkExamples.vue

## Behavior

Anchors with an `href` navigate with Enter. Buttons activate with Enter or Space and retain native form and disabled behavior. Use `type="button"` for actions inside forms that should avoid submitting the form.

The dotted underline is visible at rest. Hover and keyboard focus change it to a solid underline, and keyboard focus adds an outline.

## Styling tokens

| Token | Controls |
| --- | --- |
| `--pix-link-color` | Default text and underline color |
| `--pix-link-hover-color` | Text and underline color on hover and keyboard focus |
| `--pix-link-focus-ring` | Keyboard focus outline color |
