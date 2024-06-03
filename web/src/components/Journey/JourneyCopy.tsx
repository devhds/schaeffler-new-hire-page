import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { motion, useScroll, useTransform } from 'framer-motion'
import BodyText from '../Text/BodyText'
import { JourneyCopyTypes } from './JourneyTypes'

const JourneyCopy = ({ text, index, copyLength }: JourneyCopyTypes) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const mediaQuery = useMediaQuery()
    const [dynamicCopySpacing, setDynamicCopySpacing] =
        useState<string>('6.5rem')

    useEffect(() => {
        if (mediaQuery.sm || mediaQuery.xs) {
            setDynamicCopySpacing('0rem')
        } else {
            setDynamicCopySpacing('6.5rem')
        }
    }, [mediaQuery.sm, mediaQuery.xs])

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'center start'],
    })

    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.3, 0.5, 1],
        [0.25, 1, 1, 0.25, 0.25]
    )

    const textSpacing = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 1],
        ['0rem', dynamicCopySpacing, dynamicCopySpacing, '0rem']
    )

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: textOpacity,
                paddingBottom: index === copyLength - 1 ? 0 : textSpacing,
                paddingTop: index === 0 ? 0 : textSpacing,
            }}
        >
            <BodyText
                className="mb-8 sm:mb-4 xs:mb-4"
                text={text}
                size="base"
                color="text-primary-soft-black"
            />
        </motion.div>
    )
}

export default JourneyCopy
