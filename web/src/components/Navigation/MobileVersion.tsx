'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Squash as MenuButton } from 'hamburger-react'
import { cubicBezier, motion } from 'framer-motion'
import LabelText from '../Text/LabelText'
import Logo from '../Logo/Logo'
import { NavigationTypes } from './NavigationTypes'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

interface MobileVersionProps extends NavigationTypes {
    currentNavigation?: string
    headerIsHidden?: boolean
    navIsInTopLocation?: boolean
    currentLanguage: string
}

const MobileVersion = ({
    navigationLinks,
    languages,
    currentNavigation,
    headerIsHidden,
    navIsInTopLocation,
    currentLanguage,
}: MobileVersionProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const router = useRouter()

    const menuHandler = useCallback(() => {
        setMenuIsOpen(!menuIsOpen)
        document.body.classList.toggle('modal-open')
    }, [menuIsOpen])

    useEffect(() => {
        if (ref.current && !headerIsHidden) {
            const height = ref?.current?.getBoundingClientRect().height
            document.documentElement.style.setProperty(
                '--headerHeightMobile',
                height + 'px'
            )
        } else {
            document.documentElement.style.setProperty(
                '--headerHeightMobile',
                0 + 'px'
            )
        }
    }, [headerIsHidden])

    const handleScrollTo = useCallback(
        (
            e:
                | React.MouseEvent<HTMLAnchorElement>
                | React.TouchEvent<HTMLAnchorElement>,
            href: string
        ) => {
            e.preventDefault()
            let hero = document.getElementById(href)
            router.push(`#${href}`)
            menuHandler()
            setTimeout(() => {
                if (hero) {
                    hero.scrollIntoView({
                        behavior: 'smooth',
                    })
                }
            }, 500)
        },
        [menuHandler, router]
    )

    useEffect(() => {
        document.body.classList.remove('modal-open')
    }, [])

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
                        : menuIsOpen
                          ? ''
                          : '0px 8px 24px rgba(0, 0, 0, .1)',
                }}
                className={`fixed left-0 top-0 z-[33] flex w-full flex-row items-center justify-between ${navIsInTopLocation ? '' : 'bg-primary-white'} md:hidden lg:hidden xl:hidden ul:hidden`}
            >
                <div className="flex w-full flex-row items-center justify-between py-4 sm:px-8 xs:px-6">
                    <div
                        className="flex flex-row items-center overflow-hidden"
                        onClick={menuHandler}
                    >
                        <div
                            className={`relative -left-[12px] z-[1] ${menuIsOpen ? 'text-primary-soft-black' : navIsInTopLocation ? 'text-primary-white' : 'text-primary-soft-black'}`}
                        >
                            <MenuButton
                                toggled={menuIsOpen}
                                size={24}
                                easing="ease-in"
                                duration={0.2}
                            />
                        </div>
                        <motion.div
                            variants={{
                                menuOpen: {
                                    opacity: 1,
                                },
                                menuClose: {
                                    opacity: 0,
                                },
                            }}
                            animate={menuIsOpen ? 'menuClose' : 'menuOpen'}
                            transition={{
                                duration: 0.2,
                                ease: 'easeIn',
                            }}
                            className="absolute sm:left-[69px] xs:left-[59px]"
                        >
                            <LabelText
                                text={'Menu'}
                                upperCase
                                size="small"
                                color={
                                    menuIsOpen
                                        ? 'text-primary-soft-black'
                                        : navIsInTopLocation
                                          ? 'text-primary-white'
                                          : 'text-primary-soft-black'
                                }
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                menuOpen: {
                                    opacity: 1,
                                },
                                menuClose: {
                                    opacity: 0,
                                },
                            }}
                            animate={menuIsOpen ? 'menuOpen' : 'menuClose'}
                            transition={{
                                duration: 0.2,
                                ease: 'easeIn',
                            }}
                            initial={'menuClose'}
                            className="absolute sm:left-[69px] xs:left-[59px]"
                        >
                            <LabelText
                                text={'Close'}
                                upperCase
                                size="small"
                                color={
                                    menuIsOpen
                                        ? 'text-primary-soft-black'
                                        : 'text-primary-white'
                                }
                            />
                        </motion.div>
                    </div>
                    <Logo
                        logoColor={
                            menuIsOpen
                                ? '#00893D'
                                : navIsInTopLocation
                                  ? '#FFFFFF'
                                  : '#00893D'
                        }
                    />
                </div>
            </motion.div>
            <motion.div
                variants={{
                    active: {
                        x: '0',
                    },
                    disable: {
                        x: '-100%',
                    },
                }}
                className="fixed left-0 top-0 z-[32] h-full w-full bg-primary-white pt-[96px] md:hidden lg:hidden xl:hidden ul:hidden"
                animate={menuIsOpen ? 'active' : 'disable'}
                transition={{
                    duration: 0.2,
                    ease: 'easeIn',
                }}
                initial={'disable'}
            >
                {navigationLinks && (
                    <div className="flex flex-col items-center pb-14 sm:px-8 xs:px-6">
                        {navigationLinks.map(link => {
                            return (
                                <Link
                                    style={{
                                        transitionTimingFunction:
                                            'cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                    className={`relative ${currentNavigation === link.slug.current ? 'text-primary-soft-black' : 'text-primary-carbon-grey-100'} flex w-full justify-start border-b-[1px] border-primary-carbon-grey-20 py-4`}
                                    key={link._key + 'mobile-version'}
                                    href={'#' + link.slug.current}
                                    onClick={e =>
                                        handleScrollTo(e, link.slug.current)
                                    }
                                >
                                    <LabelText
                                        text={link.title}
                                        size="medium"
                                        color="currentColor"
                                    />
                                </Link>
                            )
                        })}
                    </div>
                )}
                <div className="flex w-fit items-center py-[15px] sm:px-8 xs:px-6">
                    <LanguageSelector
                        icon
                        languages={languages}
                        currentLanguage={currentLanguage}
                    />
                </div>
            </motion.div>
        </>
    )
}

export default MobileVersion
