import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Accordion from '../src/components/Accordion/Accordion'

export default {
    title: 'Theme/Accordion',
    component: Accordion,
    argTypes: {},
} as Meta

const TemplateAccordion: StoryFn<any> = args => {
    return (
        <>
            <Accordion {...args} />
        </>
    )
}

export const AccordionContent = TemplateAccordion.bind({})
AccordionContent.args = {
    title: 'Accordion',
    description: 'Storybook description',
    items: [
        {
            id: '1io23nio1k23',
            headline:
                'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
            expandedText:
                "Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum' Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum'",
        },
        {
            id: '12j3n1oj2n3',
            headline:
                'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
            disable: true,
            expandedText:
                'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
        },
        {
            id: 'knkl67n7k5n',
            headline:
                'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
            expandedText:
                'Enabled Lorem oüsum set legit onwru am et aim adiam lorem isum',
        },
    ],
}
