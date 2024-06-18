'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import { cubicBezier, motion } from 'framer-motion'
import Link from 'next/link'
import LabelText from '../Text/LabelText'
import { NavigationTypes } from './NavigationTypes'
import { useRouter } from 'next/navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

interface DesktopVersionProps extends NavigationTypes {
    currentNavigation?: string
    headerIsHidden?: boolean
    navIsInTopLocation?: boolean
    currentLanguage: string
}

const DesktopVersion = ({
    navigationLinks,
    languages,
    currentNavigation,
    headerIsHidden,
    navIsInTopLocation,
    currentLanguage,
}: DesktopVersionProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const router = useRouter()

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

    const handleScrollTo = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault()
            router.push(`#${href}`)
            let hero = document.getElementById(href)
            if (hero) {
                hero.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        },
        [router]
    )

    return (
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
                    {navigationLinks.map(link => {
                        return (
                            <Link
                                style={{
                                    transitionTimingFunction:
                                        'cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                                className={`relative h-fit py-[31px] transition duration-[800ms] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:transition after:duration-[800ms] after:content-[''] ${navIsInTopLocation ? 'hover:text-primary-white' : 'hover:text-primary-green'}
                                  ${
                                      navIsInTopLocation
                                          ? currentNavigation ===
                                                link.slug.current &&
                                            `after:bg-primary-white`
                                          : currentNavigation ===
                                                link.slug.current &&
                                            `after:bg-primary-green`
                                  }
                                ${navIsInTopLocation ? 'hover:after:bg-primary-white' : 'hover:after:bg-primary-green'} ${navIsInTopLocation ? (currentNavigation === link.slug.current ? 'text-primary-white' : 'text-primary-white') : currentNavigation === link.slug.current ? 'text-primary-green' : 'text-primary-soft-black'} hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:content-['']`}
                                key={link._key + 'desktop-version'}
                                href={'#' + link.slug.current}
                                onClick={event =>
                                    handleScrollTo(event, link.slug.current)
                                }
                            >
                                <LabelText
                                    text={link.title}
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
                        currentLanguage={currentLanguage}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default DesktopVersion
