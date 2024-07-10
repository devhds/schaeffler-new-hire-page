import React, { useState } from 'react'
import { TeaserItemProps } from './TeaserTypes'
import { motion } from 'framer-motion'
import LabelText from '../Text/LabelText'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import { TeasersTransition } from './TeasersLayout'
import Button from '../Button/Button'
import { VideoModalContext } from '../context/VideoModalContext'
import Link from 'next/link'
import IconLinks from '../Links/IconLinks'
import Image from 'next/image'

const TeaserItem: React.FC<TeaserItemProps> = ({
    index,
    itemsLength,
    ...props
}) => {
    const { overline, _key: id, description, href, video, text, image } = props
    const { openModal } = VideoModalContext()
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [currentHoveredElementId, setCurrentHoveredElementId] =
        useState<string>('')

    const isExternalHref = href?.indexOf?.('http') === 0

    return (
        <>
            <motion.div
                className={`pointer-events-none absolute top-10 z-[11] mx-10  sm:top-6 sm:mx-6 xs:top-6 xs:mx-6 ${itemsLength === 1 && 'md:w-[30%] lg:w-[30%] xl:w-[30%] ul:w-[30%]'} ${itemsLength === 2 && index === 1 && 'md:w-[50%] lg:w-[50%] xl:w-[50%] ul:w-[50%]'}`}
            >
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
                        duration: 0.2,
                        ease: 'easeInOut',
                    }}
                    initial="default"
                    animate={
                        currentHoveredElementId === id && isHovered
                            ? 'hidden'
                            : 'default'
                    }
                    className=""
                >
                    <LabelText
                        text={overline}
                        size="small-uppercase"
                        upperCase
                        color="text-primary-white"
                    />
                </motion.div>
                <motion.div
                    variants={{
                        default: {
                            y: '12px',
                        },
                        active: {
                            y: '-34px',
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
                                className="opacity-75"
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
                transition={TeasersTransition}
                initial="default"
                animate={
                    currentHoveredElementId === id && isHovered
                        ? 'active'
                        : 'default'
                }
                id={id}
                className={`${index && index % 2 !== 0 ? ' bg-secondary-forest-100' : 'bg-secondary-forest-80'} group absolute bottom-0 left-0 right-0 top-0 cursor-pointer
                    border-primary-white sm:!m-0 sm:h-60 sm:!scale-100 xs:!m-0 xs:h-60 xs:!scale-100`}
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
                        target={isExternalHref ? '_blank' : '_self'}
                        href={href ? href : '/'}
                        className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full w-full"
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
                            href={href ? href : '/'}
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

const TeaserWithImage: React.FC<TeaserItemProps> = ({
    animate,
    index,
    image,
}) => {
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
                className={`${index && index % 2 !== 0 ? ' bg-secondary-forest-100' : 'bg-secondary-forest-80'} absolute right-0 top-0 z-10 h-full w-full`}
            />
            {image && (
                <Image
                    fill
                    className="absolute left-0 top-0 h-full w-full object-cover"
                    src={image}
                    alt="teaserItem"
                />
            )}
            <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                }}
            />
        </>
    )
}

const TeaserWithVideo: React.FC<TeaserItemProps> = ({ video }) => {
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
