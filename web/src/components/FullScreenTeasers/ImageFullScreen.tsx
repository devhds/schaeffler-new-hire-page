'use client'

import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Headlines from '../Headlines/Headlines'
import LabelText from '../Text/LabelText'
import BodyText from '../Text/BodyText'
import GridColumnsLayout from '../layout/GridColumnsLayout'

interface ImageFullScreenProps {
    image: {
        src: StaticImageData
        alt: string
    }
}

const ImageFullScreen = ({ image }: ImageFullScreenProps) => {
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
            ref={ref}
            additionalStyles={`relative h-[150vh] sm:h-[130vh] xs:h-[130vh]`}
        >
            <motion.div
                className="sticky top-0 z-[12] h-screen"
                style={{
                    gridColumn: '1 / 6',
                }}
            >
                <Image
                    src={image.src}
                    alt={`image-full-screen-${image.alt}`}
                    className="h-screen w-full object-cover"
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
                    text="Starte mit starken Grundlagen"
                    color="text-primary-white"
                />
                <LabelText
                    className="py-6"
                    text="Tauche ein in unsere Vergangenheit und entdecke die Grundlagen, die Schäffler zu dem gemacht haben, was es heute ist: eine Quelle für Exzellenz, Innovation, Nachhaltigkeit und Leidenschaft. Lass uns gemeinsam die Grundsteine legen und die Geschichte fortschreiben."
                    size="extra-large"
                    color="text-primary-white"
                />
                <BodyText
                    text="Picture: Max Mustermann / Bildunterschrift"
                    size="small"
                    color="text-primary-carbon-grey-60"
                />
            </motion.div>
        </GridColumnsLayout>
    )
}

export default ImageFullScreen
