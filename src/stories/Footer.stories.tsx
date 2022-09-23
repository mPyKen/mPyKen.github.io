import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Footer } from '../components/Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'mPyKen',
  url: 'https://github.com/mPyKen',
}
