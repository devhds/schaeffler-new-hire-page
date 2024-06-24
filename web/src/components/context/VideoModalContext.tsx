'use client'

import React, { ReactNode, useCallback, useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LabelText from '../Text/LabelText'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'
import { IconList } from '../Icons'
import { TeasersTransition } from '../Teasers/TeasersLayout'

const CloseIcon = IconList['Close']

type VideoContextType = {
    isOpen: boolean
    videoUrl: string | null
    openModal: (video: string) => void
    closeModal: () => void
}

const videoModalContext = React.createContext<VideoContextType>({
    isOpen: false,
    videoUrl: null,
    openModal: () => null,
    closeModal: () => null,
})

export const VideoModalContext = () => {
    return useContext(videoModalContext)
}

export const VideoModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [videoUrl, setVideoUrl] = useState<string | null>(null)

    const openModal = useCallback(
        (video: string) => {
            setIsOpen(true)
            document.body.classList.toggle('modal-open')

            setVideoUrl(video)
        },
        [setVideoUrl, setIsOpen]
    )

    const closeModal = useCallback(() => {
        setIsOpen(false)
        setVideoUrl(null)
        document.body.classList.toggle('modal-open')
    }, [setIsOpen, setVideoUrl])

    return (
        <videoModalContext.Provider
            value={{
                isOpen,
                videoUrl,
                openModal,
                closeModal,
            }}
        >
            {children}
        </videoModalContext.Provider>
    )
}

const VideoModal = () => {
    const { isOpen, videoUrl, closeModal } = useContext(videoModalContext)

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key={videoUrl}
                    className="fixed left-0 top-0 z-[51] flex w-full items-center justify-center bg-primary-black"
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
                    style={{
                        height: '100dvh',
                    }}
                    transition={TeasersTransition}
                    exit="hidden"
                    initial="hidden"
                    animate="shown"
                >
                    {videoUrl && (
                        <div className="relative w-full pb-[25px] pt-[56.25%]">
                            <iframe
                                className="absolute left-0 top-0 h-full w-full"
                                src={videoUrl}
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                    <button
                        onClick={closeModal}
                        className="fixed right-6 top-7 z-[51] flex flex-row items-center rounded-3xl bg-primary-soft-black px-[18px] py-3 text-primary-white transition duration-[500ms] hover:bg-primary-carbon-grey-100 active:bg-primary-carbon-grey-80 sm:right-3 sm:top-10 xs:right-3 xs:top-10"
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
