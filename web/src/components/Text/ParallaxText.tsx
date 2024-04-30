'use client'

import React from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import DisplayText from './DisplayText'

interface ParallaxTextProps {
    text: string
    className?: string
}

const ParallaxText = ({ text, className }: ParallaxTextProps) => {
    const { scrollYProgress } = useScroll({
        offset: ['start end', 'end start'],
    })

    const translateProgress = useTransform(
        scrollYProgress,
        [0, 1],
        ['0%', '-100%']
    )

    return (
        <div
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
                    {Array(6)
                        .fill(null)
                        .map((_, ind) => (
                            <DisplayText
                                className="mx-7"
                                key={ind}
                                text={text}
                                size="large"
                                upperCase
                                color="text-secondary-forest-20"
                            />
                        ))}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ParallaxText
