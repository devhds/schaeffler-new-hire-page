'use client'

import React from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import ParallaxText from '../Text/ParallaxText'
import VideoFullScreen from '../VideoFullScreen/VideoFullScreen'
import Quotes from '../Text/Quotes'
import Teaser from '../Teaser/Teaser'
import testImage from '../../../assets/images/bg-image.png'
import IsInViewLayout from './IsInViewLayout'

const ContentLayout = () => {
    return (
        <main className="relative font-sans">
            <Navigation
                navContent={[
                    {
                        text: 'Welcome',
                        href: '',
                    },
                    {
                        text: 'Onboarding Journey',
                        href: '#onboard-journey',
                    },
                    {
                        text: 'Culture & Values',
                        href: '#cult-val',
                    },
                    {
                        text: 'Insights',
                        href: '#insights',
                    },
                    {
                        text: 'FAQ',
                        href: '#faq',
                    },
                    {
                        text: 'Contact',
                        href: '#contact',
                    },
                ]}
                languages={[
                    {
                        value: 'DE',
                        label: 'DE',
                    },
                    {
                        value: 'EN',
                        label: 'EN',
                    },
                ]}
            />
            <Logo className="flex justify-end pt-6 sm:hidden sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:hidden xs:px-6 ul:px-20" />
            <ParallaxText
                text="Welcome"
                className="sm:my-14 md:my-30 lg:my-30 xl:my-40 xs:my-14 ul:my-40"
            />
            <Quotes
                text="Zitate max. 150 Zeichen Lorem ipsum dolor sit amet, cons ete ur sadipscing elitr, sed diam lore nonumy isi eirmod."
                author={{
                    name: 'Klaus Rosenfeld',
                    position: 'Vorstandsvorsitzender Schaeffler AG',
                }}
            />
            <VideoFullScreen
                src={null}
                headline="Hello Wordl!"
                description="Description"
            />
            <Teaser
                type="mixed"
                items={[
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
                ]}
            />
            <Teaser
                type="regular"
                items={[
                    {
                        id: 'kpl233m214n6jn134',
                        overline: 'Overline',
                        text: 'Headline Lorem ipsum dolor sit amet, consetetur.',
                        description:
                            'Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 150 Zeichen.',
                    },
                ]}
            />
        </main>
    )
}

export default ContentLayout
