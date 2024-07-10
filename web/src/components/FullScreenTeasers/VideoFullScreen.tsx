'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { IconList } from '../Icons'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { VideoModalContext } from '../context/VideoModalContext'
import Headlines from '../Headlines/Headlines'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'
import BodyText from '../Text/BodyText'
import Image from 'next/image'

export interface VideoFullScreenProps {
    anchorNavigation?: {
        current: string
    }
    video: string
    copy: {
        headline: string
        description: string
    }
}

const VideoFullScreen: React.FC<VideoFullScreenProps> = ({
    video,
    copy,
    anchorNavigation,
}) => {
    const { headline, description } = copy
    const mediaQuery = useMediaQuery()
    const { openModal } = VideoModalContext()
    const ref = useRef<HTMLDivElement>(null)
    const [dynamicValuesForTransform, setDynamicValuesForTransform] = useState<
        Record<string, string>
    >({
        borderWidth: '5rem',
        contentPadding: '-5rem',
    })
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const PlayIcon = IconList['Play']

    useEffect(() => {
        if (mediaQuery.sm || mediaQuery.md) {
            setDynamicValuesForTransform({
                borderWidth: '3rem',
                contentPadding: '-3rem',
            })
        } else if (mediaQuery.xs) {
            setDynamicValuesForTransform({
                borderWidth: '1.5rem',
                contentPadding: '-1.5rem',
            })
        } else {
            setDynamicValuesForTransform({
                borderWidth: '5rem',
                contentPadding: '-5rem',
            })
        }
    }, [mediaQuery.sm, mediaQuery.md, mediaQuery.xs])

    const containerHeight = useTransform(
        scrollYProgress,
        [0, 0.4, 0.75, 0.95],
        ['50vh', '100vh', '100vh', '50vh']
    )

    const containerOffset = useTransform(
        scrollYProgress,
        [0, 0.4, 0.75, 1],
        ['20vh', '0vh', '0vh', '-50vh']
    )

    const borderWidth = useTransform(
        scrollYProgress,
        [0.4, 0.45, 0.7, 0.75],
        [
            `${dynamicValuesForTransform.borderWidth}`,
            '0rem',
            '0rem',
            `${dynamicValuesForTransform.borderWidth}`,
        ]
    )

    const videoPadding = useTransform(
        scrollYProgress,
        [0.4, 0.45, 0.7, 0.75],
        [
            `${dynamicValuesForTransform.contentPadding}`,
            '0rem',
            '0rem',
            `${dynamicValuesForTransform.contentPadding}`,
        ]
    )

    const videoOverlay = useTransform(
        scrollYProgress,
        [0, 0.45, 0.7, 1],
        [0, 0.4, 0.4, 0]
    )

    const headlineOpacity = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.65, 0.7],
        [0, 1, 1, 0]
    )
    const headlineTransform = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.65, 0.7],
        ['60px', '0px', '0px', '60px']
    )
    const playButtonOpacity = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.65, 0.7],
        [0, 1, 1, 0]
    )

    return (
        <motion.div
            ref={ref}
            className="h-[300vh]"
            id={anchorNavigation?.current}
        >
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        y: containerOffset,
                        height: containerHeight,
                        borderWidth: borderWidth,
                    }}
                    className={`sticky left-0 top-0 z-30 h-[50vh] w-full overflow-hidden border-transparent-transparent`}
                >
                    <motion.div
                        style={{
                            paddingTop: videoPadding,
                            y: videoPadding,
                        }}
                    >
                        <Image
                            className="absolute left-0 h-screen w-screen bg-primary-black object-cover"
                            src="/images/previewImageVideoTeaser.png"
                            width="0"
                            height="0"
                            sizes="100vw"
                            alt="preview-image"
                        />
                    </motion.div>

                    <motion.div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0)',
                            opacity: videoOverlay,
                        }}
                        className="absolute top-0 h-screen w-full"
                    />
                    <motion.div
                        style={{
                            opacity: headlineOpacity,
                            y: headlineTransform,
                        }}
                        className={`absolute top-[var(--headerHeight)] sm:top-[var(--headerHeightMobile)] lg:w-[55%] xl:w-[55%] xs:top-[var(--headerHeightMobile)] ul:w-[55%]`}
                    >
                        <Headlines
                            className="pt-12 text-primary-white sm:pl-8 md:pl-12 lg:pl-12 xl:pl-20 xs:pl-6 ul:pl-20"
                            element="h2"
                            color="text-primary-white"
                            text={headline}
                        />
                    </motion.div>
                    <motion.div
                        style={{ opacity: playButtonOpacity }}
                        className="absolute flex h-full w-full items-center justify-center"
                    >
                        <motion.div
                            onClick={() => {
                                if (video) {
                                    openModal(video)
                                } else {
                                    return false
                                }
                            }}
                            className="cursor-pointer"
                        >
                            <PlayIcon
                                colorCircle={
                                    fullConfig.theme.colors.primary['white']
                                }
                                colorPlay={
                                    fullConfig.theme.colors.primary[
                                        'soft-black'
                                    ]
                                }
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div
                        style={{
                            opacity: headlineOpacity,
                            top: 'calc(100dvh - 60px)',
                        }}
                        className="absolute"
                    >
                        <BodyText
                            className="pb-6 sm:pl-8 md:pl-12 lg:pl-12 xl:pl-20 xs:pl-6 ul:pl-20"
                            size="medium"
                            text={description}
                            color="text-primary-white"
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default VideoFullScreen
