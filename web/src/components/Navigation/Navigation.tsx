'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { NavigationTypes } from './NavigationTypes'
import { IconList } from '../Icons'
import DesktopVersion from './DesktopVersion'
import MobileVersion from './MobileVersion'
import Logo from '../Logo/Logo'
import IconButton from '../Button/IconButton'
import PromotionText from '../Text/PromotionText'
import Headlines from '../Headlines/Headlines'
import LabelText from '../Text/LabelText'
import Link from 'next/link'

const Navigation = ({ ...props }: NavigationTypes) => {
    const {
        copy,
        video,
        currentLanguage,
        navigationLinks,
        textContentOnly,
        goBackButtonText,
        currentMarketLanguage,
    } = props

    const startPageRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoHandlerContainer = useRef<HTMLDivElement>(null)
    const [currentNavigation, setCurrentNavigation] = useState<string>('')
    const [navigationScrolledToTop, setNavigationScrolledToTop] =
        useState<boolean>(true)
    const [headerIsHidden, setHeaderIsHidden] = useState<boolean>(false)
    const [isVideoPaused, setIsVideoPaused] = useState<boolean>(false)
    const [currentVideoTiming, setCurrentVideoTiming] = useState<number>(0)
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const { scrollY } = useScroll()
    const isInView = useInView(videoHandlerContainer, {
        margin: '100px 0px 0px 0px',
    })
    const GoBackArrowIcon = IconList['ArrowBack']

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous: number | any = scrollY.getPrevious()
        if (latest >= 10) {
            setHeaderIsHidden(previous < latest)
        }
    })

    useEffect(() => {
        if (window !== undefined && !textContentOnly) {
            const currentAnchorTag = window.location.hash
            const updatedAnchorTag = currentAnchorTag.replace('#', '')
            setCurrentNavigation(
                updatedAnchorTag === ''
                    ? navigationLinks[0].slug.current
                    : updatedAnchorTag
            )
        }
    }, [
        currentNavigation,
        pathname,
        searchParams,
        setCurrentNavigation,
        navigationLinks,
        textContentOnly,
    ])

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

    useEffect(() => {
        setNavigationScrolledToTop(isInView)
    }, [isInView])

    const videoHandler = useCallback(() => {
        setIsVideoPaused(!isVideoPaused)
        if (videoRef.current) {
            if (!isVideoPaused) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
        }
    }, [isVideoPaused])

    const handleVideoProgressUpdate = useCallback(
        (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
            setCurrentVideoTiming(
                -(e.currentTarget.currentTime / e.currentTarget.duration) *
                    125.6
            )
        },
        []
    )

    const handleScrollToNextModule = useCallback(() => {
        if (startPageRef && startPageRef.current) {
            window.scroll({
                top: startPageRef.current.getBoundingClientRect().height,
                behavior: 'smooth',
            })
        }
    }, [])

    return (
        <div className="relative" ref={startPageRef}>
            <DesktopVersion
                {...props}
                isTextOnlyPage={textContentOnly}
                currentLanguage={currentLanguage}
                headerIsHidden={headerIsHidden}
                navIsInTopLocation={
                    textContentOnly ? !textContentOnly : navigationScrolledToTop
                }
                currentNavigation={currentNavigation}
            />
            <MobileVersion
                {...props}
                currentLanguage={currentLanguage}
                headerIsHidden={headerIsHidden}
                navIsInTopLocation={
                    textContentOnly ? !textContentOnly : navigationScrolledToTop
                }
                currentNavigation={currentNavigation}
            />
            <div
                ref={videoHandlerContainer}
                className={`${textContentOnly ? 'flex-row justify-between pt-[110px]' : 'absolute top-[110px] flex-col justify-end'} right-0 z-10 flex items-end sm:top-[104px] sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:top-[104px] xs:px-6 ul:px-20`}
            >
                {textContentOnly && goBackButtonText && (
                    <Link
                        href={`/${currentMarketLanguage}`}
                        className="flex items-center"
                    >
                        <GoBackArrowIcon />
                        <LabelText
                            text={goBackButtonText}
                            size="large"
                            className="ml-0.5"
                            color="text-primary-carbon-grey-60"
                        />
                    </Link>
                )}
                <div className="sm:hidden xs:hidden">
                    <Logo logoColor={textContentOnly ? '#00893D' : '#FFFFFF'} />
                </div>
                {!textContentOnly && (
                    <div
                        onClick={videoHandler}
                        className="md:hidden lg:hidden xl:hidden ul:hidden"
                    >
                        <VideoHandlerButton
                            isVideoPaused={isVideoPaused}
                            currentVideoTiming={currentVideoTiming}
                        />
                    </div>
                )}
            </div>

            {!textContentOnly && (
                <div className="absolute bottom-0 right-0 z-10 flex flex-row items-center px-20 pb-10 sm:hidden xs:hidden">
                    <div onClick={videoHandler}>
                        <VideoHandlerButton
                            isVideoPaused={isVideoPaused}
                            currentVideoTiming={currentVideoTiming}
                        />
                    </div>
                    <div
                        style={{
                            transform: 'rotate(90deg)',
                        }}
                        className="ml-4 text-primary-carbon-grey-30"
                    >
                        <IconButton
                            onClick={handleScrollToNextModule}
                            icon="ArrowForward"
                        />
                    </div>
                </div>
            )}
            {!textContentOnly && (
                <>
                    <motion.video
                        style={{
                            height: '100svh',
                        }}
                        ref={videoRef}
                        className={`left-0 w-full bg-primary-black object-cover sm:h-screen`}
                        src={video.url + '#t=0.001'}
                        onTimeUpdate={handleVideoProgressUpdate}
                        height="auto"
                        muted
                        autoPlay
                        playsInline
                        loop
                    ></motion.video>
                    <div
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            height: '100svh',
                        }}
                        className="absolute top-0 w-full"
                    />
                    <div className="absolute bottom-0 left-0 z-[31] w-[67%] px-20 pb-10 sm:w-full sm:px-8 md:px-12 lg:px-12 xs:w-full xs:px-6">
                        <PromotionText
                            color="text-primary-white"
                            text={copy.promotionText}
                            className="pb-8 sm:pb-4 xs:pb-4"
                        />
                        <Headlines
                            element="h4"
                            text={copy.underline}
                            color="text-primary-white"
                        />
                    </div>
                </>
            )}
        </div>
    )
}

const VideoHandlerButton = ({
    isVideoPaused,
    currentVideoTiming,
}: {
    isVideoPaused: boolean
    currentVideoTiming: number
}) => {
    const PauseIcon = IconList['Pause']
    const EllipseIcon = IconList['Ellipse']
    const PlayIcon = IconList['PlayNavigation']

    return (
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center p-2 text-primary-white">
            <div className="absolute -rotate-90">
                <EllipseIcon currentVideoTime={currentVideoTiming} />
            </div>
            {isVideoPaused ? <PlayIcon fill="currentColor" /> : <PauseIcon />}
        </div>
    )
}

export default Navigation
