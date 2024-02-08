import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import LabelText from '../src/components/Text/LabelText'

export default {
    title: 'Theme/LabelText',
    component: LabelText,
    argTypes: {
        color: {
            control: { type: 'select' },
            options: {
                white: 'text-primary-white',
                'soft-black': 'text-primary-soft-black',
                green: 'text-primary-green',
            },
        },
    },
} as Meta

const TemplateLabelText: StoryFn<any> = args => {
    return <LabelText {...args} />
}
export const LabelTextContent = TemplateLabelText.bind({})
LabelTextContent.args = {
    text: 'Label Text',
    size: 'medium',
    color: 'text-primary-green',
    upperCase: false,
}
