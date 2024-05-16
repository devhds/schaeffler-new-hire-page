import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import BodyText from '../src/components/Text/BodyText'

export default {
    title: 'Theme/BodyText',
    component: BodyText,
} as Meta

const TemplateBodyText: StoryFn<any> = args => {
    return <BodyText {...args} />
}

export const BodyTextContent = TemplateBodyText.bind({})
BodyTextContent.args = {
    text: 'Body Text',
    size: 'base',
    color: 'text-primary-green',
    upperCase: false,
    fontWeight: 'normal',
    fontStyle: 'normal',
}
