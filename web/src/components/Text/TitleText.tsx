'use client'

import React, { ReactNode } from 'react'

interface TitleTextProps {
    text: string | ReactNode
    fontWeight?: 'semi-bold' | 'normal'
    fontStyle?: 'normal' | 'italic'
    color: string
    className?: string
    upperCase?: boolean
}

const TitleText = ({
    text,
    color,
    className,
    upperCase = false,
}: TitleTextProps) => {
    return (
        <p
            className={`${className} ${upperCase && 'uppercase'} ${color} sm:text-title-xs-sm-md md:text-title-xs-sm-md lg:text-title-lg xl:text-title-xl xs:text-title-xs-sm-md ul:text-title-ul`}
        >
            {text}
        </p>
    )
}

export default TitleText
