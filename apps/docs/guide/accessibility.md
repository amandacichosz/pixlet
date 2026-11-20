<script setup lang="ts">
import A11yBookmarklet from '../.vitepress/theme/components/A11yBookmarklet.vue'
</script>

# Accessibility

Use the A11y Scan bookmarklet to check Vue components as they render in a browser. It scans the current page and can group findings by Vue component when component metadata is available. A Vue development build usually shows more component names and paths.

## Install the bookmarklet

Show your browser’s bookmarks bar, then drag **A11y Scan** onto it. You can also activate the link here to scan this page.

<A11yBookmarklet />

To install without dragging, select **Copy bookmarklet URL**, create a new bookmark named **A11y Scan** in your browser’s bookmark manager, and paste the copied text into its URL field.

## Test a Vue component

1. Open the [Pixlet Button demos](/components/button) or a page in your Vue app.
2. Select **A11y Scan** in your bookmarks bar to open the scanner. In **Findings**, set **Group** to **Vue component** to find issues tied to a component. Open a finding to see its selector and suggested fix.
3. Change the component state and select **Rescan**. Try opening a dialog, showing a validation error, or triggering a loading state. Use **Rescan in 5s** if you need time to reveal the state.

The scanner combines axe-core with additional checks for issues like missing labels, low contrast, and broken ARIA references. **Keyboard walk** and **Tab order** help you inspect focus, and you can export findings as CSV or JSON.

Review the findings and test your component with a keyboard and a screen reader. Automated scans cover only part of accessibility. If the page blocks the CDN scripts used to load axe-core, the scanner’s custom checks can still run.
