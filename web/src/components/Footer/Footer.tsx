'use client'

import React, { useCallback } from 'react'
import { FooterTypes } from './FooterTypes'
import ParallaxText from '../Text/ParallaxText'
import Logo from '../Logo/Logo'
import TextLinks from '../Links/TextLinks'
import IconButton from '../Button/IconButton'
import LabelText from '../Text/LabelText'
import SocialIcon from '../Button/SocialIcon'

const Footer = ({ ...props }: FooterTypes) => {
    const handleBackToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    const {
        parallaxText,
        supportFields,
        socialIconsFields,
        infoFields,
        isDevelopmentPage,
    } = props

    return (
        <footer className="border-t-transparent-carbon-grey-12 relative z-[31] border-t bg-primary-white sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
            <div className="border-b-transparent-carbon-grey-12 flex border-b sm:-mx-8 sm:py-8 sm:pl-12 md:-mx-12 md:py-8 md:pl-12 lg:-mx-12 lg:py-12 lg:pl-20 xl:-mx-20 xl:py-12 xl:pl-20 xs:-mx-6 xs:justify-end xs:py-6 xs:pr-6 ul:-mx-20 ul:py-12 ul:pl-20">
                <IconButton onClick={handleBackToTop} icon="ExpandedLess" />
            </div>
            <div className="border-b-transparent-carbon-grey-12 border-b py-12 sm:py-8 md:py-8 xs:py-8">
                <ParallaxText
                    text={parallaxText}
                    className="sm:-mx-8 sm:mb-12 md:-mx-12 md:mb-12 lg:-mx-12 lg:mb-16 xl:-mx-20 xl:mb-20 xs:-mx-6 xs:mb-8 ul:-mx-20 ul:mb-20"
                    isFooter
                />
                <div
                    className={`flex flex-row-reverse items-center ${isDevelopmentPage ? 'justify-end' : 'justify-between'} sm:flex-col sm:items-end xs:flex-col xs:items-end`}
                >
                    {isDevelopmentPage ? '' : <Logo logoColor="#00893D" />}
                    {supportFields && (
                        <ul className="flex flex-row gap-x-10	sm:pt-6 xs:pt-6">
                            {supportFields.map(item => (
                                <li key={item._key}>
                                    <TextLinks
                                        href={item.externalHref}
                                        text={item.supportText}
                                        location="footer/menu"
                                        textSize="extra-large"
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="flex flex-row items-center justify-between py-6  sm:flex-col-reverse sm:pt-7 md:flex-col-reverse md:pt-7 xs:flex-col-reverse xs:pt-7">
                <div className="flex sm:flex-col-reverse sm:items-center xs:flex-col-reverse xs:items-center">
                    {isDevelopmentPage ? (
                        ''
                    ) : (
                        <>
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
                        </>
                    )}
                    <ul className="flex flex-row flex-wrap justify-center gap-x-4 xs:gap-y-4">
                        {infoFields.map(link => (
                            <li key={link._key}>
                                <TextLinks
                                    href={link?.internalHref}
                                    text={link.infoText}
                                    location="footer/menu"
                                    textSize="small"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="flex sm:pb-7 md:pb-7 xs:flex-wrap xs:justify-center xs:pb-7">
                    {socialIconsFields.map(item => (
                        <SocialIcon
                            key={item._key}
                            iconColor="text-primary-carbon-grey-100"
                            icon={item.icon}
                            className="mr-6 last:mr-0"
                            href={item.externalHref}
                        />
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer
