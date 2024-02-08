import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import LanguageSelector from '../src/components/LanguageSelector/LanguageSelector'
import { LanguageContextProvider } from '../src/components/context/LanguageContext'

export default {
    title: 'Theme/LanguageSelector',
} as Meta

const Template: StoryFn<any> = args => {
    const { darkEdition } = args
    return (
        <LanguageContextProvider>
            <div
                className={`${darkEdition ? 'bg-primary-black' : 'bg-primary-white'} h-screen w-fit`}
            >
                <LanguageSelector {...args} />
            </div>
        </LanguageContextProvider>
    )
}

export const LanguageSelectorContent = Template.bind({})
LanguageSelectorContent.args = {
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
