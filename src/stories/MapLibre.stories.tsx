import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { MapLibre } from '../pages/MapLibre'

export default {
  title: 'Pages/MapLibre',
  component: MapLibre,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MapLibre>

const Template: ComponentStory<typeof MapLibre> = args => <MapLibre {...args} />

export const Default = Template.bind({})
