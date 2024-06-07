'use client'

import React, { useRef } from 'react'
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'
import JourneyItems from './JourneyItems'
import { JourneyTypes } from './JourneyTypes'
import { IconList } from '../Icons'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const Journey = ({ journeyData }: JourneyTypes) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const mediaQuery = useMediaQuery()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end end'],
    })
    const StripeIcon = IconList['Stripe']
    const StripeMobileIcon = IconList['StripeMobile']

    const springValues = useSpring(scrollYProgress, {
        damping: 200,
        stiffness: 800,
    })

    const strokeDashOffset = useTransform(springValues, [0, 1], [-7481, -30])

    const strokeDashOffsetMobile = useTransform(
        springValues,
        [0, 1],
        [-5176, 0]
    )

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={ref}
                className="relative h-full w-full"
            >
                <div className="absolute top-0 h-full w-full">
                    {mediaQuery.xs || mediaQuery.sm ? (
                        <StripeMobileIcon dashOffset={strokeDashOffsetMobile} />
                    ) : (
                        <StripeIcon dashOffset={strokeDashOffset} />
                    )}
                </div>
                {journeyData.map(item => (
                    <JourneyItems key={item.id} {...item} />
                ))}
            </motion.div>
        </AnimatePresence>
    )
}

export default Journey
