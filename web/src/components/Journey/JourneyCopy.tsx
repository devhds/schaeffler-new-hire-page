import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { motion, useScroll, useTransform } from 'framer-motion'
import BodyText from '../Text/BodyText'
import { JourneyCopyTypes } from './JourneyTypes'

const JourneyCopy = ({ text }: JourneyCopyTypes) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const mediaQuery = useMediaQuery()
    const [dynamicCopySpacing, setDynamicCopySpacing] = useState<
        Record<string, any>
    >({
        start: '6.5rem',
        end: '-6.5rem',
    })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center start'],
    })

    useEffect(() => {
        if (mediaQuery.sm || mediaQuery.xs) {
            setDynamicCopySpacing({
                ...dynamicCopySpacing,
                start: '0rem',
                end: '0rem',
            })
        } else {
            setDynamicCopySpacing({
                ...dynamicCopySpacing,
                start: '6.5rem',
                end: '-6.5rem',
            })
        }
    }, [mediaQuery.sm, mediaQuery.xs])

    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.45, 0.55, 0.65, 1],
        [0.25, 0.25, 1, 0.25, 0.25]
    )

    const textOffset = useTransform(
        scrollYProgress,
        [0, 0.4, 0.65, 1],
        [
            dynamicCopySpacing.start,
            dynamicCopySpacing.start,
            dynamicCopySpacing.end,
            dynamicCopySpacing.end,
        ]
    )

    return (
        <motion.div
            ref={ref}
            style={{
                opacity: textOpacity,
                y: textOffset,
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
