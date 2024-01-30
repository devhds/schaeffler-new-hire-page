import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import IconLinks from '../src/components/Links/IconLinks'

export default {
    title: 'Theme/IconLinks',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = (args: {
    href: string
    isDownloadLink: boolean
}) => {
    return (
        <>
            <IconLinks {...args} />
        </>
    )
}

export const LinkExternal = Template.bind({})
LinkExternal.args = {
    href: 'https://google.com/',
    isDownloadLink: false,
}

export const LinkInternal = Template.bind({})
LinkInternal.args = {
    href: '/page',
    isDownloadLink: false,
}

export const LinkDownload = Template.bind({})
LinkDownload.args = {
    href: { url: '#', originalFileName: 'Download' },
    isDownloadLink: true,
}
