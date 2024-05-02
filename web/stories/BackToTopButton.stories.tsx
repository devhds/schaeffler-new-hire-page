import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import IconButton from '../src/components/Button/IconButton'

export default {
    title: 'Theme/IconButton',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = (args: {
    disabled: boolean
    onClick: any
    icon: string
}) => {
    return (
        <div className={`mt-20`}>
            <IconButton {...args} />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    disabled: false,
    onClick: null,
    icon: null,
}
