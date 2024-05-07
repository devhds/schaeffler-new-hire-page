import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Headlines from '../src/components/Headlines/Headlines'

export default {
    title: 'Theme/Headlines',
} as Meta

const Template: StoryFn<any> = (args: {
    text: string
    element: string
    color: any
}) => {
    return (
        <div className={`mt-20`}>
            <Headlines {...args} />
        </div>
    )
}

export const Headline1 = Template.bind({})
Headline1.args = {
    text: 'Good Morning!',
    element: 'h1',
    color: 'text-primary-soft-black',
}

export const Headline2 = Template.bind({})
Headline2.args = {
    text: 'Good Morning!',
    element: 'h2',
    color: 'light',
}
export const Headline3 = Template.bind({})
Headline3.args = {
    text: 'Good Morning!',
    element: 'h3',
    color: 'light',
}

export const Headline4 = Template.bind({})
Headline4.args = {
    text: 'Good Morning!',
    element: 'h4',
    color: 'light',
}
export const Headline5 = Template.bind({})
Headline5.args = {
    text: 'Good Morning!',
    element: 'h5',
    color: 'light',
}

export const Headline6 = Template.bind({})
Headline6.args = {
    text: 'Good Morning!',
    element: 'h6',
    color: 'light',
}
