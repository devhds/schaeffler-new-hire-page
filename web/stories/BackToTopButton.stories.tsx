import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import BackToTop from '../src/components/Button/BackToTop'

export default {
    title: 'Theme/BackToTopButton',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = (args: { disabled: boolean; onClick: any }) => {
    return (
        <div className={`mt-20`}>
            <BackToTop {...args} />
        </div>
    )
}

export const Default = Template.bind({})
Default.args = {
    disabled: false,
    onClick: null,
}
