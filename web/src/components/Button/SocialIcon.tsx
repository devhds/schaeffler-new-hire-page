import React from 'react'
import { IconList } from '../Icons'
import Link from 'next/link'

interface SocialIconProps {
    disabled?: boolean
    href: string
    className?: string
    icon: string
}

const SocialIcon = ({
    disabled = false,
    href,
    className = '',
    icon = '',
}: SocialIconProps) => {
    const CurrentSocialIcon = IconList[icon]
    return (
        <Link
            href={href}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-primary-carbon-grey-30 p-2
            hover:bg-secondary-jade-20 hover:text-primary-green
            focus:bg-secondary-jade-20 focus:text-primary-green focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-primary-green
            active:bg-secondary-jade-30 active:text-primary-green ${disabled && 'pointer-events-none cursor-none border-primary-carbon-grey-20 text-primary-carbon-grey-60'} ${className}`}
        >
            <CurrentSocialIcon />
        </Link>
    )
}

export default SocialIcon
