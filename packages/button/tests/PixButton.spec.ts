import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { PixButton } from '../src'

describe('PixButton', () => {
  it('renders its slot with the default native type, variant, and size', () => {
    const wrapper = mount(PixButton, { slots: { default: 'Continue' } })

    expect(wrapper.element.tagName).toBe('BUTTON')
    expect(wrapper.text()).toBe('Continue')
    expect(wrapper.attributes('type')).toBe('button')
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['pix-button--primary', 'pix-button--md']))
  })

  it('forwards native attributes and click listeners', async () => {
    const wrapper = mount(PixButton, {
      props: { variant: 'secondary', size: 'sm', type: 'submit' },
      attrs: { 'aria-label': 'Save record', name: 'action', value: 'save' },
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['pix-button--secondary', 'pix-button--sm']))
    expect(wrapper.attributes()).toMatchObject({
      type: 'submit',
      'aria-label': 'Save record',
      name: 'action',
      value: 'save',
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it.each(['disabled', 'loading'] as const)('blocks native activation while %s', async (state) => {
    const wrapper = mount(PixButton, { props: { [state]: true } })

    expect(wrapper.element.disabled).toBe(true)
    expect(wrapper.attributes('aria-busy')).toBe(state === 'loading' ? 'true' : undefined)
    wrapper.element.click()
    expect(wrapper.emitted('click')).toBeUndefined()

    await wrapper.setProps({ [state]: false })
    expect(wrapper.element.disabled).toBe(false)
    expect(wrapper.attributes('aria-busy')).toBeUndefined()
  })
})
