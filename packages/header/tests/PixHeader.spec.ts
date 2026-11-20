import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { PixHeader } from '../src'

describe('PixHeader', () => {
  it('renders the title alone by default', () => {
    const wrapper = mount(PixHeader, { props: { title: 'Project settings' } })

    expect(wrapper.text()).toBe('Project settings')
    expect(wrapper.classes()).toContain('pix-header--section')
    expect(wrapper.find('[role="heading"], [aria-level]').exists()).toBe(false)
    expect(wrapper.find('.pix-header__subtitle').exists()).toBe(false)
    expect(wrapper.find('.pix-header__actions').exists()).toBe(false)
  })

  it('applies heading semantics to the title only when a level is supplied', async () => {
    const wrapper = mount(PixHeader, {
      props: {
        title: 'Project settings',
        subtitle: 'Manage your project preferences',
        'aria-level': 2,
      },
      slots: { headerActions: '<button>Save changes</button>' },
    })

    const heading = wrapper.get('[role="heading"]')
    expect(heading.text()).toBe('Project settings')
    expect(heading.attributes('aria-level')).toBe('2')
    expect(wrapper.get('.pix-header__subtitle').text()).toBe('Manage your project preferences')
    expect(wrapper.get('.pix-header__actions button').text()).toBe('Save changes')

    await wrapper.setProps({ size: 'small' })
    expect(wrapper.classes()).toContain('pix-header--small')
    expect(heading.attributes('aria-level')).toBe('2')

    await wrapper.setProps({ 'aria-level': undefined })
    expect(wrapper.find('[role="heading"], [aria-level]').exists()).toBe(false)
  })

  it('renders subtitle arrays as a list with decorative separators', async () => {
    const wrapper = mount(PixHeader, {
      props: { title: 'Invitations', subtitle: ['3 pending', '12 accepted', 'Last sent yesterday'] },
    })

    const items = wrapper.get('[role="list"]').findAll('li')
    expect(items).toHaveLength(3)
    expect(items[0].text()).toBe('3 pending')
    expect(items[1].text()).toContain('12 accepted')
    expect(items[2].text()).toContain('Last sent yesterday')
    expect(items[0].find('[aria-hidden="true"]').exists()).toBe(false)
    expect(wrapper.findAll('li [aria-hidden="true"]')).toHaveLength(2)

    await wrapper.setProps({ subtitle: [] })
    expect(wrapper.find('.pix-header__subtitle').exists()).toBe(false)
  })
})
