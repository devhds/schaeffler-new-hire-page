import React from 'react'
import SocialIcon from '../src/components/Button/SocialIcon'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'Theme/SocialIcon',
    argTypes: {
        icon: {
            options: [
                null,
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
    disabled: boolean
    href: string
    icon: string
}) => {
    return (
        <div className={`m-20`}>
            <SocialIcon {...args} />
        </div>
    )
}

export const Icon = Template.bind({})
Icon.args = {
    disabled: false,
    href: 'https://google.com/',
    icon: 'Instagram',
}
