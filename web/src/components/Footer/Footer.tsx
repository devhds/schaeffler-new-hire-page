'use client'

import React, { useCallback } from 'react'
import ParallaxText from '../Text/ParallaxText'
import Logo from '../Logo/Logo'
import LabelText from '../Text/LabelText'
import SocialIcon from '../Button/SocialIcon'
import TextLinks from '../Links/TextLinks'
import IconButton from '../Button/IconButton'
import { FooterProps } from './FooterTypes'

const Footer = ({ data }: FooterProps) => {
    const handleBackToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <footer className="relative z-50 border-t border-t-transparent-carbon-gray-12 bg-primary-white sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
            <div className="flex border-b border-b-transparent-carbon-gray-12 sm:-mx-8 sm:py-8 sm:pl-12 md:-mx-12 md:py-8 md:pl-12 lg:-mx-12 lg:py-12 lg:pl-20 xl:-mx-20 xl:py-12 xl:pl-20 xs:-mx-6 xs:justify-end xs:py-6 xs:pr-6 ul:-mx-20 ul:py-12 ul:pl-20">
                <IconButton onClick={handleBackToTop} icon="ExpandedLess" />
            </div>
            <div className="border-b border-b-transparent-carbon-gray-12 py-12 sm:py-8 md:py-8 xs:py-8">
                <ParallaxText
                    text="We pioneer motion"
                    className="sm:-mx-8 sm:mb-12 md:-mx-12 md:mb-12 lg:-mx-12 lg:mb-16 xl:-mx-20 xl:mb-20 xs:-mx-6 xs:mb-8 ul:-mx-20 ul:mb-20"
                    isFooter
                />
                <div className="flex flex-row-reverse items-center justify-between sm:flex-col sm:items-end xs:flex-col xs:items-end">
                    <Logo logoColor="#00893D" />
                    <ul className="flex flex-row gap-x-10	sm:pt-6 xs:pt-6">
                        {data.support.map(item => (
                            <li key={item.id}>
                                <TextLinks
                                    href={item.href}
                                    text={item.text}
                                    location="footer/menu"
                                    textSize="extra-large"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between py-6  sm:flex-col-reverse sm:pt-7 md:flex-col-reverse md:pt-7 xs:flex-col-reverse xs:pt-7">
                <div className="flex sm:flex-col-reverse sm:items-center xs:flex-col-reverse xs:items-center">
                    <LabelText
                        text="Copyright © Schaeffler AG 2024"
                        size="small"
                        color="text-primary-carbon-grey-80"
                        className="sm:pt-6 xs:pt-6"
                    />
                    <LabelText
                        text="|"
                        size="small"
                        className="mx-4 sm:hidden xs:hidden"
                        color="text-primary-carbon-grey-80"
                    />
                    <ul className="flex flex-row flex-wrap justify-center gap-x-4 xs:gap-y-4">
                        {data.links.map(link => (
                            <li key={link.id}>
                                <TextLinks
                                    href={link.href}
                                    text={link.text}
                                    location="footer/menu"
                                    textSize="small"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="flex sm:pb-7 md:pb-7 xs:flex-wrap xs:justify-center xs:pb-7">
                    {data.socialLinks.map(item => (
                        <SocialIcon
                            key={item.icon}
                            iconColor="text-primary-carbon-grey-100"
                            icon={item.icon}
                            className="mr-6 last:mr-0"
                            href={item.href}
                        />
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
