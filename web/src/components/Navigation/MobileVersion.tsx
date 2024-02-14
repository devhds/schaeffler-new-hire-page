'use client'

import React, { useCallback, useState } from 'react'
import { Squash as MenuButton } from 'hamburger-react'
import { motion } from 'framer-motion'
import LabelText from '../Text/LabelText'
import Logo from '../Logo/Logo'

const MobileVersion = ({ darkEdition }: NavigationProps) => {
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

export default MobileVersion
