import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Footer from '../src/components/Footer/Footer'

export default {
    title: 'Theme/Footer',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = args => {
    return (
        <>
            <Footer {...args} />
        </>
    )
}

export const FooterContent = Template.bind({})
FooterContent.args = {
    data: {
        support: [
            {
                id: '1',
                href: '/lorem-ipsum-1',
                text: 'Lorem ipsum 1',
            },
            {
                id: '2',
                href: '/lorem-ipsum-2',
                text: 'Lorem ipsum 2',
            },
            {
                id: '3',
                href: '/lorem-ipsum-3',
                text: 'Lorem ipsum 3',
            },
        ],
        links: [
            {
                id: 'leg_not',
                href: '/legal-notice',
                text: 'Legal notice',
            },
            {
                id: 'pr_pol',
                href: '/privacy-policy',
                text: 'Privacy policy',
            },
            {
                id: 'cond_of_use',
                href: '/condition-of-use',
                text: 'Condition of use',
            },
            {
                id: 'cookie_pol',
                href: '/cookie-policy',
                text: 'Cookie policy',
            },
            {
                id: 'netiquette',
                href: '/netiquette',
                text: 'Netiquette',
            },
        ],
        socialLinks: [
            {
                icon: 'Twitter',
                href: 'https://twitter.com/',
            },
            {
                icon: 'Linkedin',
                href: 'https://linkedin.com/',
            },
            {
                icon: 'YouTube',
                href: 'https://youtube.com/',
            },
        ],
    },
}
