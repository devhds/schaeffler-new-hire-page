'use client'

import React, { useEffect, useRef } from 'react'
import { cubicBezier, motion } from 'framer-motion'
import Link from 'next/link'
import LabelText from '../Text/LabelText'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { NavigationProps } from './NavigationTypes'

const DesktopVersion = ({
    navContent,
    languages,
    currentNavigation,
    headerIsHidden,
    navIsInTopLocation,
}: NavigationProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (ref.current && !headerIsHidden) {
            const height = ref?.current?.getBoundingClientRect().height
            document.documentElement.style.setProperty(
                '--headerHeight',
                height + 'px'
            )
        } else {
            document.documentElement.style.setProperty(
                '--headerHeight',
                0 + 'px'
            )
        }
    }, [headerIsHidden])

    return (
        <>
            <motion.div
                ref={ref}
                variants={{
                    open: {
                        y: '0px',
                        opacity: 1,
                    },
                    close: {
                        y: '-95px',
                        opacity: 0,
                    },
                }}
                animate={headerIsHidden ? 'close' : 'open'}
                transition={{
                    duration: '0.8',
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                }}
                style={{
                    boxShadow: navIsInTopLocation
                        ? ''
                        : '0px 8px 24px rgba(0, 0, 0, .1)',
                }}
                className={`fixed left-0 top-0 z-[32] flex w-full flex-row items-center justify-between ${navIsInTopLocation ? '' : 'bg-primary-white'} sm:hidden xs:hidden`}
            >
                <div className="flex w-full flex-row items-center justify-between px-20 md:px-12 lg:px-12">
                    <div className="flex flex-row gap-x-8">
                        {navContent.map(item => {
                            return (
                                <Link
                                    style={{
                                        transitionTimingFunction:
                                            'cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                    className={`relative h-fit py-[31px] transition duration-[800ms] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:transition after:duration-[800ms] after:content-[''] ${navIsInTopLocation ? 'hover:text-primary-white' : 'hover:text-primary-green'}
                                  ${
                                      navIsInTopLocation
                                          ? currentNavigation === item.href &&
                                            `after:bg-primary-white`
                                          : currentNavigation === item.href &&
                                            `after:bg-primary-green`
                                  }
                                ${navIsInTopLocation ? 'hover:after:bg-primary-white' : 'hover:after:bg-primary-green'} ${navIsInTopLocation ? (currentNavigation === item.href ? 'text-primary-white' : 'text-primary-white') : currentNavigation === item.href ? 'text-primary-green' : 'text-primary-soft-black'} hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:content-['']`}
                                    key={item.text + 'desktop-version'}
                                    href={item.href}
                                >
                                    <LabelText
                                        text={item.text}
                                        size="small"
                                        color="currentColor"
                                    />
                                </Link>
                            )
                        })}
                    </div>
                    <div className="py-[15px]">
                        <LanguageSelector
                            languages={languages}
                            darkEdition={navIsInTopLocation}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default DesktopVersion
