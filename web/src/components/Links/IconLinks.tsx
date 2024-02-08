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
}

const IconLinks = ({
    href,
    className = '',
    isDownloadLink = false,
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
                        backgroundColor: '#ffffff',
                    },
                    active: {
                        backgroundColor: '#E7EFE6',
                    },
                }}
                transition={{
                    duration: 0.3,
                    ease: 'easeIn',
                }}
                initial={'initial'}
                animate={isHovering ? 'active' : 'initial'}
                onHoverStart={() => {
                    setIsHovering(true)
                }}
                onHoverEnd={() => {
                    setIsHovering(false)
                }}
                className="w-fit  rounded-full"
            >
                <Link
                    href={
                        isDownloadLink
                            ? `${href.url}/${href.originalFileName}?dl=${href.originalFileName}`
                            : href
                    }
                    download={href.originalFileName}
                    className={`relative flex h-12 w-12 flex-row items-center justify-center overflow-hidden rounded-full border border-primary-carbon-grey-30 px-2.5 py-2.5 sm:h-11 sm:w-11 sm:px-2 md:h-11 md:w-11 md:px-2
                xs:h-11 xs:w-11 xs:px-2 ${className}`}
                >
                    <motion.span
                        className="absolute"
                        variants={
                            isDownloadLink
                                ? {
                                      initial: {
                                          y: '-35px',
                                      },
                                      active: {
                                          y: '0',
                                      },
                                  }
                                : {
                                      initial: {
                                          x: '-35px',
                                      },
                                      active: {
                                          x: '0',
                                      },
                                  }
                        }
                        transition={{
                            duration: 0.3,
                            ease: 'easeIn',
                        }}
                        initial={'initial'}
                        animate={isHovering ? 'active' : 'initial'}
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
                        className="absolute"
                        variants={
                            isDownloadLink
                                ? {
                                      initial: {
                                          y: '35px',
                                      },
                                      active: {
                                          y: '0',
                                      },
                                  }
                                : {
                                      initial: {
                                          x: '35px',
                                      },
                                      active: {
                                          x: '0',
                                      },
                                  }
                        }
                        transition={{
                            duration: 0.3,
                            ease: 'easeIn',
                        }}
                        initial={'active'}
                        animate={!isHovering ? 'active' : 'initial'}
                    >
                        {isDownloadLink ? (
                            <DownloadIcon color="currentColor" />
                        ) : (
                            <Icon color="currentColor" />
                        )}
                    </motion.span>
                </Link>
            </motion.div>
        </>
    )
}

export default IconLinks
