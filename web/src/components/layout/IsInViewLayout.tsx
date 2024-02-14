'use client'

import React, { ReactNode, useRef } from 'react'
import { cubicBezier, motion, useInView } from 'framer-motion'
interface IsInViewLayoutProps {
    children: ReactNode
}
const IsInViewLayout = ({ children }: IsInViewLayoutProps) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <motion.div
            ref={ref}
            variants={{
                active: {
                    opacity: 1,
                },
                disable: {
                    opacity: 0,
                },
            }}
            initial="disable"
            animate={isInView ? 'active' : 'disable'}
            transition={{
                duration: 1.2,
                ease: cubicBezier(0.16, 1, 0.3, 1),
            }}
        >
            {children}
        </motion.div>
    )
}

export default IsInViewLayout
