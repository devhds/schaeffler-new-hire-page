'use client'

import React from 'react'
import Headlines from '../Headlines/Headlines'
import { TeasersProps } from './TeaserTypes'
import TeaserGroup from './TeaserGroup'
import { AnimatePresence, cubicBezier, motion } from 'framer-motion'

export const TeasersTransition = {
    duration: 0.8,
    ease: cubicBezier(0.16, 1, 0.3, 1),
}

const TeasersLayout = ({ ...props }: TeasersProps) => {
    const { headline } = props

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative sm:px-8 sm:py-12 md:grid md:grid-cols-md md:py-[3.75rem] lg:grid lg:grid-cols-lg lg:py-20 xl:my-20 xl:grid xl:grid-cols-xl-ul xs:px-6 xs:py-12 ul:grid ul:grid-cols-xl-ul ul:py-20"
            >
                {headline && (
                    <Headlines
                        element="h3"
                        text={headline}
                        color="text-primary-soft-black"
                        className="mb-16"
                    />
                )}
                <TeaserGroup {...props} />
            </motion.div>
        </AnimatePresence>
    )
}

export default TeasersLayout
