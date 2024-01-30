import React from 'react'
import SegmentedButton from '../src/components/Button/SegmentedButton'
import { Meta, StoryFn } from '@storybook/react'

export default {
    title: 'Theme/SegmentedButton',
    argTypes: {},
} as Meta

const Template: StoryFn<any> = (args: {
    segments: Array<any>
    handleSelect: () => void
}) => {
    return (
        <div className={`m-20`}>
            <SegmentedButton {...args} />
        </div>
    )
}

export const TwoSegments = Template.bind({})
TwoSegments.args = {
    segments: [
        {
            label: 'View 1',
            value: 'view_1',
            icon: 'Map',
            disabled: false,
        },
        {
            label: 'View 2',
            value: 'view_2',
            icon: 'Map',
            disabled: false,
        },
    ],
    handleSelect: null,
}

export const ThreeSegments = Template.bind({})
ThreeSegments.args = {
    segments: [
        {
            label: 'View 1',
            value: 'view_1',
            icon: 'Map',
            disabled: false,
        },
        {
            label: 'View 2',
            value: 'view_2',
            icon: 'Map',
            disabled: true,
        },
        {
            label: 'View 3',
            value: 'view_3',
            disabled: false,
        },
    ],
    handleSelect: null,
}

export const FourSegments = Template.bind({})
FourSegments.args = {
    segments: [
        {
            label: 'View 1',
            value: 'view_1',
            icon: 'Map',
            disabled: false,
        },
        {
            label: 'View 2',
            value: 'view_2',
            icon: 'Map',
            disabled: false,
        },
        {
            label: 'View 3',
            value: 'view_3',
            disabled: true,
        },
        {
            label: 'View 4',
            value: 'view_4',
            disabled: false,
        },
    ],
    handleSelect: null,
}
