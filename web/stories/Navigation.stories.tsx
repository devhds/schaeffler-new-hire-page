import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Footer from '../src/components/Footer/Footer'
import Navigation from '../src/components/Navigation/Navigation'
import { LanguageContextProvider } from '../src/components/context/LanguageContext'

export default {
    title: 'Theme/Navigation',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = args => {
    const { darkEdition } = args
    return (
        <LanguageContextProvider>
            <div
                className={`${darkEdition ? 'bg-primary-black' : 'bg-primary-white'}`}
            >
                <Navigation {...args} />
            </div>
        </LanguageContextProvider>
    )
}

export const NavigationContent = Template.bind({})
NavigationContent.args = {
    navContent: [
        {
            text: 'Welcome',
            href: '',
        },
        {
            text: 'Onboarding Journey',
            href: '#onboard-journey',
        },
        {
            text: 'Culture & Values',
            href: '#cult-val',
        },
        {
            text: 'Insights',
            href: '#insights',
        },
        {
            text: 'FAQ',
            href: '#faq',
        },
        {
            text: 'Contact',
            href: '#contact',
        },
    ],
    languages: [
        {
            value: 'DE',
            label: 'DE',
        },
        {
            value: 'EN',
            label: 'EN',
        },
    ],
    darkEdition: false,
}
