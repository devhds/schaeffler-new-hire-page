import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import TeasersLayout from '../src/components/Teasers/TeasersLayout'
import testImage from '../assets/images/bg-image.png'

const testSrc = '/pexels_videos_1448735.mp4'

export default {
    title: 'Theme/Teaser',
} as Meta

const Template: StoryFn<any> = args => {
    return <TeasersLayout {...args} />
}

export const SingleTeaser = Template.bind({})
SingleTeaser.args = {
    headline: 'Single Teaser',
    items: [
        {
            id: 'kpl233m214n6jn134',
            overline: 'Overline',
            href: '/',
            text: 'Headline Lorem ipsum dolor sit amet, consetetur.',
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
    ],
}

export const DoubleTeaser = Template.bind({})
DoubleTeaser.args = {
    headline: 'Double Teaser',
    items: [
        {
            id: '32n4on23o32n4oi23n4',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet, consetetur.',
            href: '/',
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
        {
            id: '1934509ofm1m231',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet.',
            video: testSrc,
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
    ],
}

export const TripleTeaser = Template.bind({})
TripleTeaser.args = {
    headline: 'Double Teaser',
    items: [
        {
            id: '1934509olm1m231',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet.',
            video: testSrc,
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
        {
            id: '1934508ofm1m231',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet.',
            image: { src: testImage, alt: 'testImage' },
            href: '/',
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
        {
            id: '1934109ofm1m231',
            overline: 'Overline',
            text: 'Headline Lorem ipsum dolor sit amet.',
            video: testSrc,
            description:
                'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
        },
    ],
}
