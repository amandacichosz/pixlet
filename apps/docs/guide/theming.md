# Theming

Import `@pixlet/tokens/tokens.css` before your application overrides. Pixlet uses three layers of CSS custom properties.

| Layer | Example | Purpose |
| --- | --- | --- |
| Primitive | `--pix-purple-500` | Raw palette values and reusable measurements |
| Semantic | `--pix-color-primary` | Roles shared across components |
| Component | `--pix-button-bg` | Overrides for a specific component |

Override semantic roles to theme multiple components. Include the matching foreground and hover colors when you change the primary color.

```css
[data-pix-theme='ocean'] {
  --pix-color-primary: #155b8a;
  --pix-color-primary-hover: #10486e;
  --pix-color-on-primary: #fff;
}
```

Apply the theme to the document or to a section. The built-in `forest` theme works with both appearances.

```html
<section data-pix-theme="forest" data-pix-mode="dark">
  <!-- Render Pixlet components here -->
</section>
```

The default appearance follows the system preference. Set `data-pix-mode` to `light`, `dark`, or `auto` on an element to control appearance for its subtree. Color switching uses the CSS `light-dark()` function, with light palette values as a fallback in older browsers. Use the semantic surface and text colors together when styling an application region.

```css
.panel {
  background-color: var(--pix-color-surface);
  color: var(--pix-color-text);
}
```

Set a component token on an ancestor or on an individual component to adjust that component alone.

```css
.compact-actions {
  --pix-button-radius: 4px;
  --pix-button-gap: 4px;
}
```
