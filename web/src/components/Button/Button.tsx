'use client'

import React from 'react'
import { IconList } from '../Icons'

interface ButtonProps {
    text: string
    type: 'primary' | 'secondary' | 'tertiary'
    disabled?: boolean
    icon?: string | null
    onClick: () => void
    className?: string
}

const Button = ({
    text,
    type,
    disabled = false,
    icon = '',
    onClick,
    className = '',
}: ButtonProps) => {
    const Icon = icon ? IconList[icon] : null

    const selectedType = {
        primary: `py-2.5 px-6 bg-primary-green hover:bg-primary-jade-100 active:bg-primary-jade-100 text-primary-white 
        focus:outline-dashed focus:outline-1 focus:outline-primary-jade-100 focus:outline-offset-4 
           ${disabled && '!bg-primary-carbon-grey-20 !text-primary-carbon-grey-80'} ${className}`,

        secondary: `py-2.5 px-6 border border-color-primary-soft-black
        hover:border-primary-green hover:bg-transparent-green-8 hover:text-primary-green 
        active:border-primary-green active:bg-transparent-green-8 active:text-primary-green focus:bg-transparent-green-8 focus:text-primary-green
        focus:outline-dashed focus:outline-1 focus:outline-primary-jade-100 focus:outline-offset-4 focus:border-primary-green
            hover:bg-primary-jade-100 ${disabled && '!bg-primary-white !text-primary-carbon-grey-80 !border-primary-carbon-grey-30'} ${className}`,

        tertiary: `py-2.5 px-3 hover:bg-transparent-green-8 hover:text-primary-green 
        active:bg-transparent-green-8 active:text-primary-green 
        focus:bg-transparent-green-8 focus:text-primary-green ${disabled && '!bg-primary-white !text-primary-carbon-grey-80'} ${className}`,
    }

    return (
        <button
            disabled={disabled}
            className={`font-notoSansMedium flex h-10 items-center rounded-full leading-normal sm:leading-tight md:leading-tight xs:leading-tight ${selectedType[type]} ${className}`}
            onClick={onClick}
        >
            {icon !== null && (
                <span className={`mr-2 flex w-[18px]`}>
                    <Icon />
                </span>
            )}
            {text}
        </button>
    )
}

export default Button
