'use client'

import React from 'react'
import Headlines from '../Headlines/Headlines'
import { TeasersProps } from './TeaserTypes'
import TeaserGroup from './TeaserGroup'
import GridColumnsLayout from '../layout/GridColumnsLayout'

export const TeasersTransition = {
    duration: 0.3,
    ease: 'easeInOut',
}

const TeasersLayout = ({ ...props }: TeasersProps) => {
    const { headline, anchorNavigation } = props

    return (
        <div
            id={anchorNavigation?.current}
            className="sm:py-12 md:py-[3.75rem] lg:py-20 xl:py-20 xs:py-12 ul:py-20"
        >
            {headline && (
                <Headlines
                    element="h3"
                    text={headline}
                    color="text-primary-soft-black"
                    className="px-20 sm:px-6 md:px-12 lg:px-12 xs:px-6"
                />
            )}
            <GridColumnsLayout
                additionalStyles={`relative sm:py-8 md:py-10 lg:py-12 xl:py-12 xs:px-6 xs:py-8 ul:py-12`}
            >
                <TeaserGroup {...props} />
            </GridColumnsLayout>
        </div>
    )
}

export default TeasersLayout
