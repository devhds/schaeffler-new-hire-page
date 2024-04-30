'use client'
import React, { useRef } from 'react'

interface HeadlinesProps {
    element: string
    text: string
    className?: string
    color: string
}

const Headlines = ({
    element,
    text,
    className = '',
    color = '',
}: HeadlinesProps) => {
    const ref = useRef<HTMLHeadingElement>(null)

    return (
        <>
            {element === 'h1' && (
                <h1
                    ref={ref}
                    className={`font-bold ${color} sm:text-h1-sm md:text-h1-md lg:text-h1-lg xl:text-h1-xl xs:text-h1-xs ul:text-h1-ul ${className}`}
                >
                    {text}
                </h1>
            )}
            {element === 'h2' && (
                <h2
                    className={`font-bold ${color} sm:text-h2-sm md:text-h2-md lg:text-h2-lg xl:text-h2-xl xs:text-h2-xs ul:text-h2-ul ${className}`}
                >
                    {text}
                </h2>
            )}
            {element === 'h3' && (
                <h3
                    className={`font-bold ${color} sm:text-h3-sm md:text-h3-md lg:text-h3-lg xl:text-h3-xl xs:text-h3-xs ul:text-h3-ul ${className}`}
                >
                    {text}
                </h3>
            )}
            {element === 'h4' && (
                <h4
                    className={`font-normal ${color} sm:text-h4-sm md:text-h4-md lg:text-h4-lg xl:text-h4-xl xs:text-h4-xs ul:text-h4-ul ${className}`}
                >
                    {text}
                </h4>
            )}
            {element === 'h5' && (
                <h5
                    className={`font-bold ${color} sm:text-h5-sm md:text-h5-md lg:text-h5-lg xl:text-h5-xl xs:text-h5-xs ul:text-h5-ul ${className}`}
                >
                    {text}
                </h5>
            )}
            {element === 'h6' && (
                <h6
                    className={`font-bold ${color} sm:text-h6-sm md:text-h6-md lg:text-h6-lg xl:text-h6-xl xs:text-h6-xs ul:text-h6-ul ${className}`}
                >
                    {text}
                </h6>
            )}
        </>
    )
}

export default Headlines
