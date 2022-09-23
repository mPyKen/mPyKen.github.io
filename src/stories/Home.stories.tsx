import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { Home } from '../pages/Home'

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = args => (
  <MemoryRouter initialEntries={['/']}>
    <Home {...args} />
  </MemoryRouter>
)
export const Default = Template.bind({})
