'use client'

import React from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import ParallaxText from '../Text/ParallaxText'
import VideoFullScreen from '../VideoFullScreen/VideoFullScreen'
import Quotes from '../Text/Quotes'

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
            <ParallaxText text="Welcome" />
            <Quotes
                text="Quote with image. Lorem ipsum dolor sit amet, cons ete ur sadipscing elitr, sed diam lore nonumy isi eirmod tempor."
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
        </main>
    )
}

export default ContentLayout
