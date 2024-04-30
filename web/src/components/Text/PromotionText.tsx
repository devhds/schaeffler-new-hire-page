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
            className={`${className} ${color} xs:text-promotion-xs sm:text-promotion-sm md:text-promotion-md lg:text-promotion-lg xl:text-promotion-xl ul:text-promotion-ul font-black uppercase`}
        >
            {text}
        </p>
    )
}

export default PromotionText
