import React from 'react'
import SocialIcon from '../src/components/Button/SocialIcon'
import { Meta, StoryFn } from '@storybook/react'
import Teaser from '../src/components/Teaser/Teaser'
import testImage from '../assets/images/bg-image.png'

export default {
    title: 'Theme/Teaser',
} as Meta

const Template: StoryFn<any> = args => {
    return <Teaser {...args} />
}

export const MixedTeaser = Template.bind({})
MixedTeaser.args = {
    type: 'mixed',
    items: [
        {
            id: '32n4on23o32n4oi23n4',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet, consetetur.',
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
        {
            id: '1934509ofm1m231',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet.',
            image: testImage,
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
    ],
}

export const SingleTeaser = Template.bind({})
SingleTeaser.args = {
    type: 'regular',
    items: [
        {
            id: 'kpl233m214n6jn134',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet, consetetur.',
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
    ],
}
