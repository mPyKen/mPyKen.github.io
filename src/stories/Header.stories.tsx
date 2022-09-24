import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router'

import { Header } from '../components/Header'

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => (
  <MemoryRouter initialEntries={['/']}>
    <Header {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
