import React, { useRef } from 'react'
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    wrap,
} from 'framer-motion'
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
            className={`flex flex-wrap overflow-hidden whitespace-nowrap 
             ${className}`}
        >
            <motion.div
                className="flex flex-nowrap whitespace-nowrap"
                style={{ x: translateProgress }}
            >
                {Array(4)
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
        </div>
    )
}

export default ParallaxText
