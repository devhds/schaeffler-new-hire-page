import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import DisplayText from '../src/components/Text/DisplayText'

export default {
    title: 'Theme/DisplayText',
    component: DisplayText,
} as Meta

const TemplateDisplayText: StoryFn<any> = args => {
    return <DisplayText {...args} />
}
export const DisplayTextContent = TemplateDisplayText.bind({})
DisplayTextContent.args = {
    text: 'Display Text',
    size: 'normal',
    color: 'text-primary-green',
    upperCase: false,
}
