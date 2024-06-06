'use client'

import React from 'react'
import { EmptyIcon, IconList } from '../Icons'

interface IconButtonProps {
    disabled?: boolean
    onClick: () => void
    className?: string
    icon: string
    isGroupHover?: boolean
    hoverStyles?: string
}

const IconButton = ({
    disabled = false,
    onClick,
    className = '',
    icon,
    isGroupHover = false,
    hoverStyles = '',
}: IconButtonProps) => {
    const Icon = icon ? IconList[icon] : EmptyIcon
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex h-11 w-11 items-center justify-center rounded-full border border-primary-carbon-grey-30 p-2 transition duration-[300ms] ${isGroupHover ? hoverStyles : 'hover:border-secondary-jade-20 hover:bg-secondary-jade-20 hover:text-primary-green active:border-secondary-jade-20 active:bg-secondary-jade-30 active:text-primary-green'} ${disabled && 'border-primary-carbon-grey-20 text-primary-carbon-grey-60'} ${className}`}
        >
            <Icon />
        </button>
    )
}

export default IconButton
