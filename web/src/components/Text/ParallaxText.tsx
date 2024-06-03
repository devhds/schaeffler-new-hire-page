'use client'

import React, { useRef } from 'react'
import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion'
import DisplayText from './DisplayText'

interface ParallaxTextProps {
    text: string
    className?: string
    isFooter?: boolean
}

const ParallaxText = ({
    text,
    className,
    isFooter = false,
}: ParallaxTextProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['end end', 'start start'],
    })

    const springValues = useSpring(scrollYProgress, {
        damping: 200,
        stiffness: 800,
    })

    const translateProgress = useTransform(
        springValues,
        [0, isFooter ? 2 : 3],
        [isFooter ? '5%' : '0%', '-90%']
    )

    return (
        <div
            ref={containerRef}
            className={`z-[30] flex flex-wrap overflow-hidden ${className} whitespace-nowrap`}
        >
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-nowrap whitespace-nowrap"
                    style={{ x: translateProgress }}
                >
                    {Array(3)
                        .fill(null)
                        .map((_, ind) => (
                            <DisplayText
                                className="mx-7"
                                key={ind}
                                text={text}
                                size="large"
                                upperCase
                                color="text-secondary-jade-20"
                            />
                        ))}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ParallaxText
