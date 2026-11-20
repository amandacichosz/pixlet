<script setup lang="ts">
import CardExamples from '../../../packages/card/demos/CardExamples.vue'
</script>

# Card

Use `PixCard`, `PixCardHeader`, and `PixCardContent` to group related information and actions.

## Examples

<div class="pix-demo-preview">
  <CardExamples />
</div>

<<< ../../../packages/card/demos/CardExamples.vue

## API

| Component | Props and slots |
| --- | --- |
| `PixCard` | `variant` accepts `shadow` (default) or `border` for a border without a shadow. Use the default slot for the header and content and the optional `footer` slot for supporting content. |
| `PixCardHeader` | Pass `title`, optional `subtitle` text or an array of strings, and optional `aria-level` to the Header at size `card`. Use the `actions` slot for controls in the header. |
| `PixCardContent` | Place content in the padded default slot. |

Import `@pixlet/card/style.css` to style the Card and its Header.
