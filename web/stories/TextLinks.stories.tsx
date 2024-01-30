import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TextLinks from '../src/components/Links/TextLinks'

export default {
    title: 'Theme/TextLinks',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = (args: {
    text: string
    href: string
    disabled: boolean
}) => {
    return (
        <div className={`m-20`}>
            <TextLinks {...args} />
        </div>
    )
}

export const LinkExternal = Template.bind({})
LinkExternal.args = {
    disabled: false,
    href: 'https://google.com/',
    text: 'External Link',
}

export const LinkInternal = Template.bind({})
LinkInternal.args = {
    disabled: false,
    href: '/page',
    text: 'Internal Link',
}
