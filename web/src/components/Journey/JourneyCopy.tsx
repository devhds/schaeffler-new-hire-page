import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { motion, useScroll, useTransform } from 'framer-motion'
import { JourneyCopyTypes } from './JourneyTypes'
import RichText from '../RichText/RichText'

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
                start: '0rem',
                end: '0rem',
            })
        } else {
            setDynamicCopySpacing({
                start: '6.5rem',
                end: '-6.5rem',
            })
        }
    }, [mediaQuery.sm, mediaQuery.xs])

    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.5, 0.58, 0.65, 0.68, 1],
        [0.25, 0.25, 1, 1, 0.25, 0.25]
    )

    const textOffset = useTransform(
        scrollYProgress,
        [0, 0.5, 0.7, 1],
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
            <RichText content={text} isJourneyItem />
        </motion.div>
    )
}

export default JourneyCopy
