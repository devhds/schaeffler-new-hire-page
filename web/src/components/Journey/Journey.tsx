'use client'

import React, { useRef } from 'react'
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'
import { IconList } from '../Icons'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import JourneyItems from './JourneyItems'
import { JourneyProps } from './JourneyTypes'

const Journey: React.FC<JourneyProps> = ({ items, anchorNavigation }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const mediaQuery = useMediaQuery()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start center', 'end center'],
    })
    const StripeIcon = IconList['Stripe']
    const StripeMobileIcon = IconList['StripeMobile']

    const springValues = useSpring(scrollYProgress, {
        damping: 200,
        stiffness: 800,
    })

    const strokeDashOffset = useTransform(
        springValues,
        [0, 0.2, 0.4, 0.63, 0.8, 0.93, 1],
        [6836.7, 5469.36, 4102.02, 2529.579, 1367.34, 478.569, 0]
    )

    const strokeDashOffsetMobile = useTransform(springValues, [0, 1], [7839, 0])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={ref}
                id={anchorNavigation?.current}
                className="relative h-full w-full sm:-mt-8 md:mt-[-72px] lg:-mt-20 xl:-mt-20 xs:-mt-8 ul:-mt-20"
            >
                <div className="absolute top-0 h-full w-full">
                    {mediaQuery.xs || mediaQuery.sm ? (
                        <StripeMobileIcon dashOffset={strokeDashOffsetMobile} />
                    ) : (
                        <StripeIcon dashOffset={strokeDashOffset} />
                    )}
                </div>
                {items.map((item, index) => (
                    <JourneyItems key={item._key} {...item} index={index} />
                ))}
            </motion.div>
        </AnimatePresence>
    )
}

export default Journey
