'use client'

import React from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import ParallaxText from '../Text/ParallaxText'
import VideoFullScreen from '../VideoFullScreen/VideoFullScreen'
import Footer from '../Footer/Footer'

const ContentLayout = () => {
    return (
        <main className="relative font-sans sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
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
            <Logo className="flex justify-end pt-6 sm:hidden xs:hidden" />
            <ParallaxText text="Welcome" />
            <VideoFullScreen
                src={null}
                headline="Hello Wordl!"
                description="Description"
            />
        </main>
    )
}

export default ContentLayout
