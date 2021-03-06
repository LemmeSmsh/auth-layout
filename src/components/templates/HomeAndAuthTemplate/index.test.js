import React from 'react'
import { mount, shallow } from 'enzyme'
import HomeAndAuthTemplate from '.'

const wrap = (props = {}) => (
  shallow(<HomeAndAuthTemplate header="header" footer="footer" {...props}>test</HomeAndAuthTemplate>)
)

it('mounts', () => {
  mount(<HomeAndAuthTemplate header="header" footer="footer">test</HomeAndAuthTemplate>)
})

it('renders children when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.contains('test')).toBe(true)
})

it('renders header', () => {
  const wrapper = wrap()
  expect(wrapper.contains('header')).toBe(true)
})

it('renders hero', () => {
  const wrapper = wrap({ hero: 'hero' })
  expect(wrapper.contains('hero')).toBe(true)
})

it('renders sponsor', () => {
  const wrapper = wrap({ sponsor: 'sponsor' })
  expect(wrapper.contains('sponsor')).toBe(true)
})

it('renders footer', () => {
  const wrapper = wrap()
  expect(wrapper.contains('footer')).toBe(true)
})
