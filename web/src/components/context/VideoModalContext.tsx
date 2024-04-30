'use client'

import React, { ReactNode, useCallback, useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LabelText from '../Text/LabelText'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'
import { IconList } from '../Icons'
import { TeasersTransition } from '../Teasers/TeasersLayout'

const CloseIcon = IconList['Close']

type VideoContextType = {
    isOpen: boolean
    videoUrl: string | null
    openModal: (url: string) => void
    closeModal: () => void
}

const VideoModalContext = React.createContext<VideoContextType>({
    isOpen: false,
    videoUrl: null,
    openModal: () => null,
    closeModal: () => null,
})

export const videoModalContext = () => {
    return useContext(VideoModalContext)
}

export const VideoModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [videoUrl, setVideoUrl] = React.useState<string | null>(null)

    const openModal = useCallback(
        (url: string) => {
            setIsOpen(true)

            setVideoUrl(url)
        },
        [setVideoUrl, setIsOpen]
    )

    const closeModal = useCallback(() => {
        setIsOpen(false)
        setVideoUrl(null)
    }, [setIsOpen, setVideoUrl])

    return (
        <VideoModalContext.Provider
            value={{
                isOpen,
                videoUrl,
                openModal,
                closeModal,
            }}
        >
            {children}
        </VideoModalContext.Provider>
    )
}

const VideoModal = () => {
    const { isOpen, videoUrl, closeModal } = useContext(VideoModalContext)

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key={videoUrl}
                    className="fixed left-0 top-0 z-[51] flex h-screen w-full items-center justify-center bg-primary-black"
                    variants={{
                        hidden: {
                            y: '100%',
                            opacity: 0,
                        },
                        shown: {
                            y: '0%',
                            opacity: 1,
                        },
                    }}
                    transition={TeasersTransition}
                    exit="hidden"
                    initial="hidden"
                    animate="shown"
                >
                    <video
                        controls
                        autoPlay
                        src={videoUrl + '#t=0.001'}
                        playsInline
                        className={`object-contain`}
                    />
                    <button
                        onClick={closeModal}
                        className="fixed right-0 top-0 z-[51] flex flex-row items-center pr-6 pt-7 text-primary-white"
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
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default VideoModal
