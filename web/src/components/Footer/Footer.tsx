'use client'

import React from 'react'
import ParallaxText from '../Text/ParallaxText'
import Logo from '../Logo/Logo'
import LabelText from '../Text/LabelText'
import SocialIcon from '../Button/SocialIcon'
import TextLinks from '../Links/TextLinks'

interface FooterData {
    support: Array<any>
    links: Array<any>
    socialLinks: Array<any>
}

interface FooterProps {
    data: FooterData
}

const Footer = ({ data }: FooterProps) => {
    return (
        <footer className="relative z-50 border-t border-t-transparent-carbon-gray-12 bg-primary-white sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
            <div className="border-b border-b-transparent-carbon-gray-12 py-12 sm:py-8 md:py-8 xs:py-8">
                <ParallaxText
                    text="We pioneer motion"
                    className=" sm:-mx-8 md:-mx-12 lg:-mx-12 xl:-mx-20 xs:-mx-6 ul:-mx-20"
                />
                <div className="flex flex-row-reverse items-center justify-between sm:flex-col sm:items-end xs:flex-col xs:items-end">
                    <Logo />
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
                        text="Copyright © Schaeffler AG 2023"
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
                <ul className="flex sm:pb-7 md:pb-7 xs:pb-7">
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
