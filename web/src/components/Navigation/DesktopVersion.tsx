'use client'

import React, { useState } from 'react'
import {
    cubicBezier,
    motion,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import Link from 'next/link'
import LabelText from '../Text/LabelText'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

const DesktopVersion = ({
    navContent,
    darkEdition,
    languages,
    currentNavigation,
}: NavigationProps) => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous: number | any = scrollY.getPrevious()
        setIsScrolled(previous < latest)
    })

    return (
        <motion.div
            variants={{
                open: {
                    y: '0px',
                },
                close: {
                    y: '-95px',
                },
            }}
            animate={isScrolled ? 'close' : 'open'}
            transition={{
                duration: '0.8',
                ease: cubicBezier(0.16, 1, 0.3, 1),
            }}
            initial={'open'}
            className={`sticky left-0 top-0 z-[8] flex w-full flex-row items-center justify-between ${darkEdition ? '' : 'bg-primary-white'} sm:hidden xs:hidden`}
        >
            <div className="flex w-full flex-row items-center justify-between md:px-12 lg:px-12 xl:px-20 ul:px-20">
                <div className="flex flex-row gap-x-8">
                    {navContent.map(item => {
                        return (
                            <Link
                                style={{
                                    transitionTimingFunction:
                                        'cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                                className={`relative h-fit py-[31px] transition duration-[800ms] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:transition after:duration-[800ms] after:content-[''] ${darkEdition ? 'hover:text-primary-white' : 'hover:text-primary-green'}
                                  ${
                                      darkEdition
                                          ? currentNavigation === item.href &&
                                            `after:bg-primary-white`
                                          : currentNavigation === item.href &&
                                            `after:bg-primary-green`
                                  }
                                ${darkEdition ? 'hover:after:bg-primary-white' : 'hover:after:bg-primary-green'} ${darkEdition ? (currentNavigation === item.href ? 'text-primary-white' : 'text-primary-white') : currentNavigation === item.href ? 'text-primary-green' : 'text-primary-soft-black'} hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:content-['']`}
                                key={item.text}
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
                        darkEdition={darkEdition}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default DesktopVersion
