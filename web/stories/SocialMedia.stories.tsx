import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SocialMedia from '../src/components/SocialMedia/SocialMedia'

export default {
    title: 'Theme/SocialMedia',
    component: SocialMedia,
    argTypes: {},
} as Meta

const SocialMediaTemplate: StoryFn<any> = args => {
    return (
        <div>
            <SocialMedia {...args} />
        </div>
    )
}

export const SocialMediaContent = SocialMediaTemplate.bind({})
SocialMediaContent.args = {
    title: 'Social Media Title',
    socialMediaList: [
        {
            id: 'rnweornwoeir',
            icon: 'Twitter',
            href: '/',
        },
        {
            id: '123m1m235',
            icon: 'Linkedin',
            href: '/',
        },
        {
            id: '123m1l23l11',
            icon: 'Facebook',
            href: '/',
        },
        {
            id: '123m1l23l11',
            icon: 'YouTube',
            href: '/',
        },
        {
            id: '123m1l23l11',
            icon: 'Instagram',
            href: '/',
        },
    ],
}
