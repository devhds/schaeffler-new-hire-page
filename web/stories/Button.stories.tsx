import React from 'react'
import Button from '../src/components/Button/Button'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'Theme/Button',
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'tertiary'],
        },
        icon: {
            options: [
                null,
                'Add',
                'Check',
                'Map',
                'ArrowForward',
                'ArrowOutward',
                'ExpandedLess',
                'Instagram',
                'Facebook',
                'Twitter',
                'Weibo',
                'YouTube',
                'Xing',
                'Wechat',
                'WhatsApp',
                'Linkedin',
            ],
            control: { type: 'select' },
        },
    },
} as Meta

const Template: StoryFn<any> = (args: {
    text: any
    type: any
    icon: any
    disabled: any
    onClick: any
}) => {
    return (
        <div className={`mt-20`}>
            <Button {...args} />
        </div>
    )
}

export const Primary = Template.bind({})
Primary.args = {
    text: 'Button Primary',
    type: 'primary',
    icon: null,
    disabled: false,
    onClick: null,
}

export const Secondary = Template.bind({})
Secondary.args = {
    text: 'Button Secondary',
    type: 'secondary',
    icon: null,
    disabled: false,
    onClick: null,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    text: 'Button Tertiary',
    type: 'tertiary',
    icon: null,
    disabled: false,
    onClick: null,
}
