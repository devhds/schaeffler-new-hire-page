'use client'

import React, { useCallback, useEffect, useState } from 'react'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import LabelText from '../Text/LabelText'
import Logo from '../Logo/Logo'
import { Squash as MenuButton } from 'hamburger-react'
import {
    cubicBezier,
    motion,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'

interface NavigationProps {
    navContent: Array<string | any>
    languages: Array<string | any>
    darkEdition?: boolean
    currentNavigation?: string
}

const Navigation = ({ ...props }: NavigationProps) => {
    const [currentNavigation, setCurrentNavigation] = useState<string>('')
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (window !== undefined) {
            setCurrentNavigation(window.location.hash)
        }
    }, [currentNavigation, pathname, searchParams, setCurrentNavigation])

    useEffect(() => {
        if (currentNavigation !== '') {
            const element = document.getElementById(currentNavigation)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                })
            }
        }
    }, [currentNavigation])

    return (
        <>
            <DesktopNavigation
                {...props}
                currentNavigation={currentNavigation}
            />
            <MobileNavigation
                {...props}
                currentNavigation={currentNavigation}
            />
        </>
    )
}

const DesktopNavigation = ({
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

const MobileNavigation = ({ darkEdition }: NavigationProps) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    const menuHandler = useCallback(() => {
        setMenuIsOpen(!menuIsOpen)
        document.body.classList.toggle('modal-open')
    }, [menuIsOpen])

    return (
        <>
            <div className="sticky left-0 top-0 z-[8] flex w-full flex-row items-center justify-between bg-primary-white md:hidden lg:hidden xl:hidden ul:hidden">
                <div className="flex w-full flex-row items-center justify-between py-6  sm:px-8  xs:px-6">
                    <div
                        className="flex flex-row items-center overflow-hidden"
                        onClick={menuHandler}
                    >
                        <div className="z-[1] bg-primary-white">
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
                            className="absolute sm:left-[81px] xs:left-[71px]"
                        >
                            <LabelText
                                text={'Menu'}
                                upperCase
                                size="small"
                                color={
                                    darkEdition
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
                            className="absolute sm:left-[81px] xs:left-[71px]"
                        >
                            <LabelText
                                text={'Close'}
                                upperCase
                                size="small"
                                color={
                                    darkEdition
                                        ? 'text-primary-white'
                                        : 'text-primary-soft-black'
                                }
                            />
                        </motion.div>
                    </div>
                    <Logo />
                </div>
            </div>
            <motion.div
                variants={{
                    active: {
                        x: '0',
                    },
                    disable: {
                        x: '-100%',
                    },
                }}
                className="fixed left-0 top-[96px] z-30 h-full w-full bg-primary-white md:hidden lg:hidden xl:hidden ul:hidden"
                animate={menuIsOpen ? 'active' : 'disable'}
                transition={{
                    duration: 0.2,
                    ease: 'easeIn',
                }}
                initial={'disable'}
            ></motion.div>
        </>
    )
}

export default Navigation
