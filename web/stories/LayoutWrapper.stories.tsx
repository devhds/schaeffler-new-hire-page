import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import IconLinks from '../src/components/Links/IconLinks'
import LayoutWrapper from '../src/components/LayoutWrapper/LayoutWrapper'
import Headlines from '../src/components/Headlines/Headlines'

export default {
    title: 'Theme/LayoutWrapper',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = args => {
    return (
        <div className="bg-secondary-apple-60 sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:hidden xs:px-6 ul:px-20">
            <LayoutWrapper {...args} />
            <Headlines element="h1" text="Good Morning!" color="light" />
        </div>
    )
}

export const Layout = Template.bind({})
