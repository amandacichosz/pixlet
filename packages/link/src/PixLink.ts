import type { ObjectDirective } from 'vue'

const linkAttribute = 'data-pix-link'

export const PixLink: ObjectDirective<HTMLAnchorElement | HTMLButtonElement> = {
  beforeMount(element) {
    element.setAttribute(linkAttribute, '')
  },
  getSSRProps() {
    return { [linkAttribute]: '' }
  },
}
