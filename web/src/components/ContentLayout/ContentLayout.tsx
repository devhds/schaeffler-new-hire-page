'use client'

import React, { useEffect } from 'react'
import Navigation from '../Navigation/Navigation'

const ContentLayout = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const hashId = window.location.hash
            console.log(hashId)
            if (hashId) {
                const element = document.querySelector(hashId)
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    })
                }
            }
        }
    }, [])

    return (
        <main className="xs:px-6 ul:px-20 relative font-sans sm:px-8 md:px-12 lg:px-12 xl:px-20">
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
            <div id="#onboard-journey" className="h-[200vh]"></div>
            <div id="#cult-val" className="h-[200vh]"></div>
            <div id="#insights" className="h-[200vh]"></div>
            <div id="#faq" className="h-[200vh]"></div>
            <div id="#contact" className="h-[200vh]"></div>
        </main>
    )
}

export default ContentLayout
