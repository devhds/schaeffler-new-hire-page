'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import Headlines from '../Headlines/Headlines'
import { IconList } from '../Icons'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'
import BodyText from '../Text/BodyText'
import LabelText from '../Text/LabelText'
import { useMediaQuery } from '../../hooks/useMediaQuery'

interface VideoFullScreenProps {
    media: {
        video: {
            src: string
        }
    }
    headline: string
    description: string
}

const VideoFullScreen = ({
    media,
    headline,
    description,
}: VideoFullScreenProps) => {
    const { video } = media
    const mediaQuery = useMediaQuery()
    const ref = useRef<HTMLDivElement>(null)
    const videoRef = useRef<any>(null)
    const [isHovered, setHovered] = useState<boolean>(false)
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)
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
    const CloseIcon = IconList['Close']

    useEffect(() => {
        if (mediaQuery.smd) {
            setDynamicValuesForTransform({
                ...dynamicValuesForTransform,
                borderWidth: '3rem',
                contentPadding: '-3rem',
            })
        } else if (mediaQuery.xs) {
            setDynamicValuesForTransform({
                ...dynamicValuesForTransform,
                borderWidth: '1.5rem',
                contentPadding: '-1.5rem',
            })
        } else {
            setDynamicValuesForTransform({
                ...dynamicValuesForTransform,
                borderWidth: '5rem',
                contentPadding: '-5rem',
            })
        }
    }, [mediaQuery.smd, mediaQuery.xs])

    const containerHeight = useTransform(
        scrollYProgress,
        [0.1, 0.4, 0.6, 0.9],
        ['50vh', '100vh', '100vh', '50vh']
    )

    const containerOffset = useTransform(
        scrollYProgress,
        [0, 0.4, 0.6, 1],
        ['50vh', '0vh', '0vh', '-50vh']
    )

    const borderWidth = useTransform(
        scrollYProgress,
        [0.4, 0.45, 0.55, 0.6],
        [
            `${dynamicValuesForTransform.borderWidth}`,
            '0rem',
            '0rem',
            `${dynamicValuesForTransform.borderWidth}`,
        ]
    )

    const videoPadding = useTransform(
        scrollYProgress,
        [0.4, 0.45, 0.55, 0.6],
        [
            `${dynamicValuesForTransform.contentPadding}`,
            '0rem',
            '0rem',
            `${dynamicValuesForTransform.contentPadding}`,
        ]
    )
    const headlineOpacity = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.54, 0.55],
        [0, 1, 1, 0]
    )
    const headlineTransform = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.54, 0.55],
        ['60px', '0px', '0px', '60px']
    )
    const playButtonOpacity = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.54, 0.55],
        [0, 1, 1, 0]
    )

    const handlePlayVideo = useCallback(() => {
        if (videoRef.current) {
            setIsVideoPlaying(true)
            setHovered(false)
            videoRef.current.play()
            document.body.classList.toggle('modal-open')
        }
    }, [])

    const handleCloseVideo = useCallback(() => {
        setIsVideoPlaying(false)
        videoRef.current.currentTime = 0
        videoRef.current.pause()
        document.body.classList.toggle('modal-open')
    }, [])

    return (
        <motion.div ref={ref} className="h-[200vh]">
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
                    className={`sticky ${isVideoPlaying && 'z-[32]'} left-0 top-0 h-[50vh] w-full overflow-hidden border-primary-white`}
                >
                    <motion.video
                        ref={videoRef}
                        controls={isVideoPlaying}
                        className={`absolute left-0 h-screen w-screen bg-primary-black ${isVideoPlaying ? 'object-contain' : 'object-cover'}`}
                        src={video.src + '#t=0.001'}
                        height="auto"
                        muted
                        playsInline
                        style={{
                            padding: videoPadding,
                            y: videoPadding,
                        }}
                    ></motion.video>
                    {!isVideoPlaying && (
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
                    )}
                    {isVideoPlaying && (
                        <button
                            className="absolute right-0 top-0 flex flex-row items-center pr-6 pt-7 text-primary-white"
                            onClick={handleCloseVideo}
                        >
                            <LabelText
                                text={'Close'}
                                upperCase
                                size="small"
                                color="text-primary-white"
                                className="mr-2"
                            />
                            <CloseIcon
                                color={fullConfig.theme.colors.primary.white}
                            />
                        </button>
                    )}
                    {!isVideoPlaying && (
                        <motion.div
                            style={{ opacity: playButtonOpacity }}
                            className="absolute flex h-full w-full items-center justify-center"
                        >
                            <motion.div
                                onClick={handlePlayVideo}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                className="cursor-pointer"
                            >
                                <PlayIcon
                                    colorCircle={
                                        isHovered
                                            ? fullConfig.theme.colors.primary[
                                                  'soft-black'
                                              ]
                                            : fullConfig.theme.colors.primary[
                                                  'white'
                                              ]
                                    }
                                    colorPlay={
                                        isHovered
                                            ? fullConfig.theme.colors.primary[
                                                  'white'
                                              ]
                                            : fullConfig.theme.colors.primary[
                                                  'soft-black'
                                              ]
                                    }
                                />
                            </motion.div>
                        </motion.div>
                    )}
                    {!isVideoPlaying && (
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
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default VideoFullScreen
