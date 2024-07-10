'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconList } from '../Icons'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'

interface IconLinksProps {
    href: string | any
    className?: string
    isDownloadLink?: boolean
    animate?: boolean
    isGroupHovering?: boolean
    isTeaserLink?: boolean
}

const IconLinks = ({
    href,
    className = '',
    isDownloadLink = false,
    animate = false,
    isGroupHovering = false,
    isTeaserLink = false,
}: IconLinksProps) => {
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const isExternalHref = isDownloadLink ? null : href.indexOf('http') === 0

    const Icon = isExternalHref
        ? IconList['ArrowOutward']
        : IconList['ArrowForward']

    const DownloadIcon = IconList['Download']

    return (
        <>
            <motion.div
                variants={{
                    initial: {
                        backgroundColor: 'rgba(255,255,255,0)',
                    },
                    active: {
                        backgroundColor: '#FFFFFF',
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                }}
                initial={'initial'}
                animate={
                    isGroupHovering
                        ? animate
                            ? 'active'
                            : 'initial'
                        : isHovering
                          ? 'active'
                          : 'initial'
                }
                onHoverStart={() => {
                    setIsHovering(true)
                }}
                onHoverEnd={() => {
                    setIsHovering(false)
                }}
                className={`w-fit rounded-full ${className}`}
            >
                <Link
                    href={
                        isDownloadLink
                            ? `${href.url}/${href.originalFileName}?dl=${href.originalFileName}`
                            : href
                    }
                    target={isExternalHref ? '_blank' : '_self'}
                    download={href.originalFileName}
                    className={`relative flex h-12 w-12 flex-row  items-center justify-center overflow-hidden rounded-full ${isTeaserLink ? '' : 'border-primary-carbon-grey-30'} border px-2.5 py-2.5 sm:h-11 sm:w-11 sm:px-2 md:h-11 md:w-11 md:px-2 xl:h-buttonHeight xl:w-buttonWidth xs:h-11 xs:w-11
                xs:px-2 ul:h-[5.5rem] ul:w-[5.5rem]`}
                >
                    <motion.span
                        className="absolute flex items-center justify-center px-2.5 py-2.5 xl:h-buttonHeight xl:w-buttonWidth ul:h-[5.5rem] ul:w-[5.5rem]"
                        variants={
                            isDownloadLink
                                ? {
                                      initial: {
                                          y: '-75px',
                                      },
                                      active: {
                                          y: '0',
                                      },
                                  }
                                : {
                                      initial: {
                                          x: '-75px',
                                      },
                                      active: {
                                          x: '0',
                                      },
                                  }
                        }
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                        initial={'initial'}
                        animate={
                            isGroupHovering
                                ? animate
                                    ? 'active'
                                    : 'initial'
                                : isHovering
                                  ? 'active'
                                  : 'initial'
                        }
                    >
                        {isDownloadLink ? (
                            <DownloadIcon
                                color={fullConfig.theme.colors.primary['green']}
                            />
                        ) : (
                            <Icon
                                color={fullConfig.theme.colors.primary['green']}
                            />
                        )}
                    </motion.span>
                    <motion.span
                        className="absolute flex items-center justify-center px-2.5 py-2.5 xl:h-buttonHeight xl:w-buttonWidth ul:h-[5.5rem] ul:w-[5.5rem]"
                        variants={
                            isDownloadLink
                                ? {
                                      initial: {
                                          y: '75px',
                                      },
                                      active: {
                                          y: '0',
                                      },
                                  }
                                : {
                                      initial: {
                                          x: '75px',
                                      },
                                      active: {
                                          x: '0',
                                      },
                                  }
                        }
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                        }}
                        initial={'active'}
                        animate={
                            isGroupHovering
                                ? !animate
                                    ? 'active'
                                    : 'initial'
                                : !isHovering
                                  ? 'active'
                                  : 'initial'
                        }
                    >
                        {isDownloadLink ? (
                            <DownloadIcon
                                color={fullConfig.theme.colors.primary['white']}
                            />
                        ) : (
                            <Icon
                                color={fullConfig.theme.colors.primary['white']}
                            />
                        )}
                    </motion.span>
                </Link>
            </motion.div>
        </>
    )
}

export default IconLinks
