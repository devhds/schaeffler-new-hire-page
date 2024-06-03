'use client'

import React, { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import JourneyItems from './JourneyItems'
import { JourneyTypes } from './JourneyTypes'

const Journey = ({ journeyData }: JourneyTypes) => {
    const ref = useRef<HTMLDivElement | null>(null)
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ['start start', 'end end'],
    // })
    // const StripeIcon = IconList['Stripe']

    // const springValues = useSpring(scrollYProgress, {
    //     damping: 200,
    //     stiffness: 800,
    // })

    // const strokeDasharray = useTransform(springValues, [0, 1], [6241.22, 0])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={ref}
                className="relative h-full w-full"
            >
                {/*<div className="absolute left-0 top-0 h-[200vh] w-full">*/}
                {/*    <StripeIcon currentPoints={strokeDasharray} />*/}
                {/*</div>*/}
                {journeyData.map(item => (
                    <JourneyItems key={item.id} {...item} />
                ))}
            </motion.div>
        </AnimatePresence>
    )
}

export default Journey
