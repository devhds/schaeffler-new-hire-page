import React, { useState } from 'react'
import { Item } from './TeaserTypes'
import { cubicBezier, motion } from 'framer-motion'
import LabelText from '../Text/LabelText'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import { TeasersTransition } from './TeasersLayout'
import Image from 'next/image'
import IconLinks from '../Links/IconLinks'
import Button from '../Button/Button'
import { VideoModalContext } from '../context/VideoModalContext'
import Link from 'next/link'

interface TeaserItemProps extends Item {
    index: number
}

const TeaserItem = ({ index, ...props }: TeaserItemProps) => {
    const { overline, id, description, href, video, text, image } = props
    const { openModal } = VideoModalContext()
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [currentHoveredElementId, setCurrentHoveredElementId] =
        useState<string>('')

    return (
        <>
            <motion.div className="pointer-events-none absolute top-10 z-[11] mx-10 sm:top-6 sm:mx-6 xs:top-6 xs:mx-6">
                <motion.div
                    variants={{
                        default: {
                            opacity: 1,
                        },
                        hidden: {
                            opacity: 0,
                        },
                    }}
                    transition={TeasersTransition}
                    initial="default"
                    animate={
                        currentHoveredElementId === id && isHovered
                            ? 'hidden'
                            : 'default'
                    }
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
                    transition={TeasersTransition}
                    initial="default"
                    animate={
                        currentHoveredElementId === id && isHovered
                            ? 'active'
                            : 'default'
                    }
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
                        transition={TeasersTransition}
                        initial="disable"
                        animate={
                            currentHoveredElementId === id && isHovered
                                ? 'active'
                                : 'disable'
                        }
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
            <motion.div
                onClick={() => {
                    if (video) {
                        openModal(video)
                    } else {
                        return false
                    }
                }}
                onHoverStart={(event: MouseEvent | TouchEvent | any) => {
                    setIsHovered(true)
                    if (event?.target && 'id' in event.target) {
                        setCurrentHoveredElementId(event.target.id)
                    }
                }}
                onHoverEnd={() => {
                    setIsHovered(false)
                    setCurrentHoveredElementId('')
                }}
                variants={{
                    active: {
                        margin: '0px',
                    },
                    default: {
                        margin: '16px',
                    },
                }}
                transition={{
                    duration: 0.8,
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                }}
                initial="default"
                animate={
                    currentHoveredElementId === id && isHovered
                        ? 'active'
                        : 'default'
                }
                id={id}
                className={`${index % 2 !== 0 ? ' bg-secondary-forest-100' : 'bg-secondary-forest-80'} group absolute bottom-0 left-0 right-0 top-0 cursor-pointer
                    border-primary-white sm:!m-0 sm:h-60 sm:!scale-100 xs:!m-0 xs:h-60 xs:!scale-100 ul:h-screen`}
            >
                {image && (
                    <TeaserWithImage
                        animate={currentHoveredElementId === id && isHovered}
                        index={index}
                        {...props}
                    />
                )}
                {video && <TeaserWithVideo {...props} />}
                {(image || !image) && !video && (
                    <Link
                        href={href ? href : '/'}
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                    />
                )}
                <div
                    className={`absolute bottom-6 right-6 z-[10] text-primary-white sm:bottom-4 sm:right-4 xs:bottom-4 xs:right-4`}
                >
                    {(image || !image) && !video && (
                        <IconLinks
                            isGroupHovering
                            animate={
                                currentHoveredElementId === id && isHovered
                            }
                            href={href}
                        />
                    )}
                    {video && (
                        <Button
                            icon="PlayNavigation"
                            type="custom"
                            groupHover="group-hover:bg-primary-white group-hover:text-primary-green"
                            onClick={() => {
                                openModal(video)
                            }}
                        />
                    )}
                </div>
            </motion.div>
        </>
    )
}

interface TeaserWithImageProps extends Item {
    animate: boolean
    index: number
}

const TeaserWithImage = ({ animate, index, image }: TeaserWithImageProps) => {
    return (
        <>
            <motion.div
                variants={{
                    active: {
                        opacity: 1,
                    },
                    disabled: {
                        opacity: 0,
                    },
                }}
                initial="disabled"
                animate={animate ? 'active' : 'disabled'}
                transition={TeasersTransition}
                className={`${index % 2 !== 0 ? ' bg-secondary-forest-100' : 'bg-secondary-forest-80'} absolute right-0 top-0 z-10 h-full w-full`}
            />
            {image && (
                <Image
                    src={image.src}
                    alt={image.alt}
                    className="absolute left-0 top-0 h-full w-full object-cover"
                />
            )}
        </>
    )
}

const TeaserWithVideo = ({ video }: Item) => {
    return (
        <>
            <video
                src={video + '#t=0.001'}
                playsInline
                className={`absolute left-0 top-0 h-full  w-full object-cover`}
            />
            <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}
            />
        </>
    )
}

export default TeaserItem
