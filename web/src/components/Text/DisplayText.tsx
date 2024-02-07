import React, { useEffect } from 'react'

interface DisplayTextProps {
    text: string
    size: 'large' | 'normal'
    color: string
    className?: string
    upperCase?: boolean
}

const DisplayText = ({
    text,
    color,
    size,
    className = '',
    upperCase = false,
}: DisplayTextProps) => {
    const displayTextStyles = {
        large: 'xs:text-display-large-xs sm:text-display-large-sm md:text-display-large-md lg:text-display-large-lg xl:text-display-large-xl ul:text-display-large-ul',
        normal: 'xs:text-display-normal-xs sm:text-display-normal-sm md:text-display-normal-md lg:text-display-normal-lg xl:text-display-normal-xl ul:text-display-normal-ul',
    }

    // useEffect(() => {
    //     const maxFontSize = 2 // Assuming the unit is rem
    //     const minFontSize = 1 // Assuming the unit is rem
    //     const minWidth = 90 // Assuming the unit is rem
    //     const maxWidth = 179.938 // Assuming the unit is rem
    //
    //     const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
    //     const yAxisIntersection = -minWidth * slope + minFontSize
    //
    //     console.log(slope * 100, 'VW')
    //     console.log(yAxisIntersection, 'REM')
    // }, [])

    return (
        <p
            className={`${color} ${displayTextStyles[size]} ${upperCase && 'uppercase'} ${className} font-black`}
        >
            {text}
        </p>
    )
}

export default DisplayText
