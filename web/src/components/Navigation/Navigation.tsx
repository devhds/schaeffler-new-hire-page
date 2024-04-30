'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
    motion,
    useInView,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion'
import { NavigationProps } from './NavigationTypes'
import Logo from '../Logo/Logo'
import { IconList } from '../Icons'
import PromotionText from '../Text/PromotionText'
import TitleText from '../Text/TitleText'
import DesktopVersion from './DesktopVersion'
import MobileVersion from './MobileVersion'

const testSrc = '/pexels_videos_1448735.mp4'

const Navigation = ({ ...props }: NavigationProps) => {
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

    useMotionValueEvent(scrollY, 'change', latest => {
        const previous: number | any = scrollY.getPrevious()
        if (latest >= 10) {
            setHeaderIsHidden(previous < latest)
        }
    })

    useEffect(() => {
        if (window !== undefined) {
            setCurrentNavigation(window.location.hash)
        }
    }, [currentNavigation, pathname, searchParams, setCurrentNavigation])

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
                (e.currentTarget.currentTime / e.currentTarget.duration) * 125.6
            )
        },
        []
    )

    return (
        <div className="relative">
            <DesktopVersion
                key="desktopVersion"
                {...props}
                headerIsHidden={headerIsHidden}
                navIsInTopLocation={navigationScrolledToTop}
                currentNavigation={currentNavigation}
            />
            <MobileVersion
                key="mobileVersion"
                {...props}
                headerIsHidden={headerIsHidden}
                navIsInTopLocation={navigationScrolledToTop}
                currentNavigation={currentNavigation}
            />
            <div
                style={{
                    top: '110px',
                }}
                ref={videoHandlerContainer}
                className="absolute right-0 z-10 flex flex-col items-end justify-end sm:top-[104px] sm:hidden sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:top-[104px]  xs:px-6 ul:px-20"
            >
                <div className="sm:hidden xs:hidden">
                    <Logo />
                </div>
                <div className="pt-12 sm:pt-0 xs:pt-0">
                    <div onClick={videoHandler}>
                        <VideoHandlerButton
                            isVideoPaused={isVideoPaused}
                            currentVideoTiming={currentVideoTiming}
                        />
                    </div>
                </div>
            </div>
            <motion.video
                style={{
                    height: '100svh',
                }}
                ref={videoRef}
                className={`left-0 w-full bg-primary-black object-cover sm:h-screen`}
                src={testSrc + '#t=0.001'}
                onTimeUpdate={handleVideoProgressUpdate}
                height="auto"
                muted
                autoPlay
                playsInline
                loop
            ></motion.video>
            <div
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    height: '100svh',
                }}
                className="absolute top-0 w-full"
            />
            <div className="absolute bottom-0 left-0 z-[31] w-3/6 px-20 pb-10 sm:w-auto sm:px-8 md:px-12 lg:px-12 xs:w-auto xs:px-6">
                <PromotionText
                    color="text-primary-white"
                    text="The schaeffler way"
                    className="pb-8 sm:pb-4 xs:pb-4"
                />
                <TitleText
                    text="Beginne deinen Weg gemeinsam mit uns."
                    color="text-primary-white"
                />
            </div>
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
