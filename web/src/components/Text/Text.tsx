'use client'

import React, { useEffect } from 'react'

const Text = () => {
    useEffect(() => {
        function getViewportWidthValue(
            y1: number,
            y2: number,
            x1: number,
            x2: number
        ) {
            return (100 * (y2 - y1)) / (x2 - x1)
        }

        const getPreferedValue = (
            y1: number,
            y2: number,
            x1: number,
            x2: number
        ) => {
            const s = x1 * y2
            const bla = x2 * y1
            const ya = x1 - x2
            const i = s - bla
            return i / ya
        }

        const VW = getViewportWidthValue(60, 80, 0, 599)
        const VW2 = getPreferedValue(60, 80, 0, 599)

        console.log(VW)
        console.log(VW2)
    }, [])

    return <p className="xs:text-display-large-xs">Good Morning!</p>
}

export default Text
