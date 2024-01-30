'use client'
import React, { useRef } from 'react'

interface HeadlinesProps {
    element: string
    text: string
    className?: string
}

const Headlines = ({ element, text, className = '' }: HeadlinesProps) => {
    const ref = useRef<HTMLHeadingElement>(null)

    return (
        <>
            {element === 'h1' && (
                <h1
                    ref={ref}
                    className={`xs:text-h1-xs sm:text-h1-sm-md md:text-h1-sm-md lg:text-h1-lg xl:text-h1-xl ul:text-h1-ul font-bold ${className}`}
                >
                    {text}
                </h1>
            )}
            {element === 'h2' && (
                <h2
                    className={`xs:text-h2-xs sm:text-h2-sm-md md:text-h2-sm-md lg:text-h2-lg xl:text-h2-xl ul:text-h2-ul font-bold ${className}`}
                >
                    {text}
                </h2>
            )}
            {element === 'h3' && (
                <h3
                    className={`xs:text-h3-xs sm:text-h3-sm-md md:text-h3-sm-md lg:text-h3-lg xl:text-h3-xl ul:text-h3-ul font-bold ${className}`}
                >
                    {text}
                </h3>
            )}
            {element === 'h4' && (
                <h4
                    className={`xs:text-h4-xs-sm-md sm:text-h4-xs-sm-md md:text-h4-xs-sm-md lg:text-h4-lg xl:text-h4-xl ul:text-h4-ul font-normal ${className}`}
                >
                    {text}
                </h4>
            )}
            {element === 'h5' && (
                <h5
                    className={`xs:text-h5-xs-sm-md sm:text-h5-xs-sm-md md:text-h5-xs-sm-md lg:text-h5-lg xl:text-h5-xl ul:text-h5-ul font-bold ${className}`}
                >
                    {text}
                </h5>
            )}
            {element === 'h6' && (
                <h6
                    className={`xs:text-h6-xs-sm-md sm:text-h6-xs-sm-md md:text-h6-xs-sm-md lg:text-h6-lg xl:text-h6-xl ul:text-h6-ul font-bold ${className}`}
                >
                    {text}
                </h6>
            )}
        </>
    )
}

export default Headlines
