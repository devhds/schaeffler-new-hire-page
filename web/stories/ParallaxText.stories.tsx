import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TextLinks from '../src/components/Links/TextLinks'
import ParallaxText from '../src/components/Text/ParallaxText'

export default {
    title: 'Theme/ParallaxText',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = (args: { text: string }) => {
    return (
        <div className={`h-screen`}>
            <ParallaxText {...args} />
        </div>
    )
}

export const ParallaxTextContent = Template.bind({})
ParallaxTextContent.args = {
    text: 'Welcome to storybook',
}
