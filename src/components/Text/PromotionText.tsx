'use client'

import React, { ReactNode } from 'react'

interface PromotionTextProps {
    text: string | ReactNode
    color: string
    className?: string
}

const PromotionText = ({ className, text, color }: PromotionTextProps) => {
    return (
        <p
            className={`${className} ${color} font-black uppercase sm:text-promotion-sm md:text-promotion-md lg:text-promotion-lg xl:text-promotion-xl  xs:text-promotion-xs ul:text-promotion-ul`}
        >
            {text}
        </p>
    )
}

export default PromotionText
