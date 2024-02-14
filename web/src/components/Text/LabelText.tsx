'use client'

import React from 'react'

interface LabelTextProps {
    text: string
    size: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small'
    color: string
    className?: string
    upperCase?: boolean
}

const LabelText = ({
    text,
    size,
    color,
    className,
    upperCase = false,
}: LabelTextProps) => {
    const labelTextStyles = {
        'extra-large':
            'xs:text-base sm:text-lg md:text-lg lg:text-2xl xl:text-label-extra-large-xl ul:text-5xl',
        large: 'xs:text-base sm:text-base md:text-base lg:text-lg xl:text-label-large-xl ul:text-4xl',
        medium: 'xs:text-base sm:text-base md:text-base lg:text-base xl:text-label-medium-xl ul:text-label-medium-ul',
        small: 'xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-label-small-xl ul:text-label-small-ul',
        'extra-small':
            'xs:text-xs sm:text-xs md:text-xs lg:text-xs xl:text-label-extra-small-xl ul:text-2xl',
    }

    return (
        <p
            className={`${labelTextStyles[size]} ${upperCase && 'uppercase'} ${color} ${className}`}
        >
            {text}
        </p>
    )
}

export default LabelText
