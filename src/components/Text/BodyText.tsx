'use client'

import React, { ReactNode } from 'react'

interface BodyTextProps {
    text: string | ReactNode
    size: 'large' | 'medium' | 'small'
    fontWeight?: 'semi-bold' | 'normal'
    fontStyle?: 'normal' | 'italic'
    color: string
    className?: string
    upperCase?: boolean
}

const BodyText = ({
    text,
    size,
    fontWeight = 'normal',
    fontStyle = 'normal',
    color,
    className,
    upperCase = false,
}: BodyTextProps) => {
    const bodyTextStyle = {
        large: 'xs:text-base sm:text-base md:text-base lg:text-lg xl:text-body-large-xl ul:text-body-large-ul',
        medium: 'xs:text-sm sm:text-sm md:text-sm lg:text-base xl:text-body-medium-xl ul:text-body-medium-ul',
        small: 'xs:text-sm sm:text-sm md:text-sm lg:text-sm xl:text-body-small-xl ul:text-body-small-ul',
    }

    return (
        <p
            className={`${bodyTextStyle[size]} ${className} ${upperCase && 'uppercase'} ${color} ${fontWeight === 'semi-bold' ? 'font-semibold' : 'font-normal'} ${fontStyle === 'italic' ? 'italic' : 'not-italic'}`}
        >
            {text}
        </p>
    )
}

export default BodyText
