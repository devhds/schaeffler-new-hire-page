import React, { useState } from 'react'
import { cubicBezier, motion } from 'framer-motion'
import LabelText from '../Text/LabelText'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import IconLinks from '../Links/IconLinks'
import { TeaserItem } from './TeaserTypes'

const TeaserLayout = ({
    text,
    overline,
    description,
    children,
    imageExist,
}: TeaserItem) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <motion.div
            onHoverStart={() => {
                setIsHovered(true)
            }}
            onHoverEnd={() => {
                setIsHovered(false)
            }}
            variants={{
                active: {
                    scale: 1,
                },
                default: {
                    scale: 0.95,
                },
            }}
            transition={{
                duration: 0.8,
                ease: cubicBezier(0.16, 1, 0.3, 1),
            }}
            initial="default"
            animate={isHovered ? 'active' : 'default'}
            className={`${imageExist ? ' md:h-[26rem] lg:h-[34.875rem] xl:h-[34.875rem]  ul:h-[34.875rem]' : 'md:h-[17rem] lg:h-[21.563rem] xl:h-[21.563rem] ul:h-[21.563rem]'} cursor-pointer bg-secondary-forest-100 sm:h-60 sm:!scale-100 xs:h-60 xs:!scale-100`}
        >
            <motion.div className="relative flex h-full flex-col justify-between p-6">
                <motion.div className="absolute left-10 right-10 top-6 z-10">
                    <motion.div
                        variants={{
                            default: {
                                opacity: 1,
                            },
                            hidden: {
                                opacity: 0,
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: cubicBezier(0.16, 1, 0.3, 1),
                        }}
                        initial="default"
                        animate={isHovered ? 'hidden' : 'default'}
                        className="absolute"
                    >
                        <LabelText
                            text={overline}
                            size="small"
                            upperCase
                            color="text-primary-white"
                        />
                    </motion.div>
                    <motion.div
                        variants={{
                            default: {
                                y: '30px',
                            },
                            active: {
                                y: '0px',
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: cubicBezier(0.16, 1, 0.3, 1),
                        }}
                        initial="default"
                        animate={isHovered ? 'active' : 'default'}
                    >
                        <Headlines
                            element="h4"
                            text={text}
                            color="text-primary-white"
                        />
                        <motion.div
                            className="mt-2"
                            variants={{
                                disable: {
                                    opacity: 0,
                                    y: '20px',
                                },
                                active: {
                                    opacity: 1,
                                    y: '0px',
                                },
                            }}
                            transition={{
                                duration: 0.8,
                                ease: cubicBezier(0.16, 1, 0.3, 1),
                            }}
                            initial="disable"
                            animate={isHovered ? 'active' : 'disable'}
                        >
                            {description && (
                                <BodyText
                                    text={description}
                                    size="medium"
                                    color="text-primary-white"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
                <IconLinks
                    href="/"
                    isTeaserItem
                    animate={isHovered}
                    className="absolute bottom-6 right-6 z-10 self-end"
                />
                {children}
            </motion.div>
        </motion.div>
    )
}

export default TeaserLayout
