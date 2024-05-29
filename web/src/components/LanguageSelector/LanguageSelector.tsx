'use client'

import React, { useCallback, useState } from 'react'
import { useLanguageContext } from '../context/LanguageContext'
import { IconList } from '../Icons'
import LabelText from '../Text/LabelText'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'
import { motion } from 'framer-motion'

interface LanguageSelectorProps {
    languages: Array<string | any>
    darkEdition?: boolean
    icon?: boolean
}

const LanguageSelector = ({
    languages,
    icon = false,
    darkEdition = false,
}: LanguageSelectorProps) => {
    const { language, updateLanguage } = useLanguageContext()
    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false)
    const ArrowIcon = IconList['ArrowDown']
    const Country = IconList['Country']

    const handleChange = useCallback(
        (value: string) => {
            updateLanguage(value)
        },
        [updateLanguage]
    )

    return (
        <div className="relative sm:-ml-4 md:-mr-4 lg:-mr-4 xl:-mr-4 xs:-ml-4 ul:-mr-4">
            <motion.button
                onClick={() => {
                    setDropDownOpen(!dropDownOpen)
                }}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`relative flex h-10 items-center justify-center rounded-[20px] px-4 py-2 transition duration-[800ms]  ${darkEdition ? 'hover-hover:hover:bg-transparent-white-20' : 'hover-hover:hover:bg-secondary-jade-20'}`}
            >
                <LabelText
                    text={language}
                    size="small"
                    color={
                        darkEdition
                            ? dropDownOpen
                                ? 'text-primary-white'
                                : 'text-primary-white'
                            : dropDownOpen
                              ? 'text-primary-green'
                              : 'text-primary-soft-black'
                    }
                />
                <motion.span
                    variants={{
                        initial: {
                            transform: 'rotate(0)',
                        },
                        active: {
                            transform: 'rotate(-180deg)',
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                    initial={'initial'}
                    animate={dropDownOpen ? 'active' : 'initial'}
                >
                    <ArrowIcon
                        color={
                            darkEdition
                                ? dropDownOpen
                                    ? fullConfig.theme.colors.primary['white']
                                    : fullConfig.theme.colors.primary['white']
                                : dropDownOpen
                                  ? fullConfig.theme.colors.primary['green']
                                  : fullConfig.theme.colors.primary[
                                        'soft-black'
                                    ]
                        }
                    />
                </motion.span>

                {icon && (
                    <div className="absolute right-[-24px]">
                        <Country />
                    </div>
                )}
            </motion.button>
            <motion.ul
                variants={{
                    opened: {
                        transition: {
                            type: 'spring',
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05,
                        },
                        boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.10)',
                        backgroundColor: fullConfig.theme.colors.primary.white,
                    },
                    closed: {
                        transition: {
                            type: 'spring',
                            bounce: 0,
                            duration: 0.3,
                        },
                        backgroundColor: 'rgba(255,255,255,0)',
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                initial={'closed'}
                animate={dropDownOpen ? 'opened' : 'closed'}
                className="absolute w-full rounded-[10px]"
            >
                {languages.map(item => (
                    <motion.li
                        variants={{
                            opened: {
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 24,
                                },
                            },
                            closed: {
                                opacity: 0,
                                transition: { duration: 0.2 },
                            },
                        }}
                        className={`${dropDownOpen ? 'cursor-pointer' : 'pointer-events-none'} px-4 py-2.5 first:border-b first:border-transparent-carbon-gray-12`}
                        onClick={() => {
                            handleChange(item.value)
                            setDropDownOpen(false)
                        }}
                        key={item.value}
                    >
                        <LabelText
                            text={item.label}
                            size="medium"
                            color="text-primary-soft-black"
                        />
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default LanguageSelector
