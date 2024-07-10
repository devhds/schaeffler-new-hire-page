'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Headlines from '../Headlines/Headlines'
import LabelText from '../Text/LabelText'
import BodyText from '../Text/BodyText'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import Image from 'next/image'

export interface ImageFullScreenProps {
    anchorNavigation?: {
        current: string
    }
    image: string
    copy: {
        headline: string
        description: string
        underline?: string
    }
    classNames?: string
}

const ImageFullScreen: React.FC<ImageFullScreenProps> = ({
    image,
    copy,
    classNames,
    anchorNavigation,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })

    const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1])
    const textOffset = useTransform(
        scrollYProgress,
        [0.35, 0.55],
        ['-16rem', '-20rem']
    )

    return (
        <GridColumnsLayout
            id={anchorNavigation?.current}
            ref={ref}
            additionalStyles={`${classNames} z-30 relative sm:-scroll-mt-8 md:-scroll-mt-[72px] lg:-scroll-mt-20 xl:-scroll-mt-20 xs:-scroll-mt-8 ul:-scroll-mt-20 sm:py-8 md:py-[72px] lg:py-20 xl:py-20 xs:py-8 ul:py-20 h-[150vh] sm:h-[130vh] xs:h-[130vh]`}
        >
            <motion.div
                className="sticky top-0 z-[12] h-screen"
                style={{
                    gridColumn: '1 / 6',
                }}
            >
                <Image
                    className="h-screen w-full object-cover"
                    src={image}
                    alt="image-full-screen"
                    fill
                />
                <motion.div
                    style={{
                        opacity: overlayOpacity,
                        backgroundColor: 'rgba(0, 0, 0, 0.70)',
                    }}
                    className="absolute left-0 top-0 h-full w-full"
                />
            </motion.div>
            <motion.div
                className="relative z-[30] p-6"
                style={{
                    gridColumn: '3 / 5',
                    y: textOffset,
                }}
            >
                <Headlines
                    element="h1"
                    text={copy.headline}
                    color="text-primary-white"
                />
                <LabelText
                    className="pt-6"
                    text={copy.description}
                    size="extra-large"
                    color="text-primary-white"
                />
                {copy.underline && (
                    <BodyText
                        className="pt-6"
                        text={copy.underline}
                        size="small"
                        color="text-primary-carbon-grey-60"
                    />
                )}
            </motion.div>
        </GridColumnsLayout>
    )
}

export default ImageFullScreen
