'use client'

import React from 'react'
import { IconList } from '../Icons'

interface BackToTopProps {
    disabled?: boolean
    onClick: () => void
    className?: string
}

const BackToTop = ({
    disabled = false,
    onClick,
    className = '',
}: BackToTopProps) => {
    const Icon = IconList['ExpandedLess']
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-primary-carbon-grey-30 p-2
            hover:border-secondary-jade-20 hover:bg-secondary-jade-20 hover:text-primary-green
            focus:border-secondary-jade-20 focus:bg-secondary-jade-20  focus:text-primary-green focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-primary-green
            active:border-secondary-jade-20 active:bg-secondary-jade-30  active:text-primary-green ${disabled && 'border-primary-carbon-grey-20 text-primary-carbon-grey-60'} ${className}`}
        >
            <Icon />
        </button>
    )
}

export default BackToTop
