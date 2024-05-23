import React from 'react'
import { EmptyIcon, IconList } from '../Icons'
import Link from 'next/link'

interface SocialIconProps {
    disabled?: boolean
    href: string
    className?: string
    icon: string
    rounded?: boolean
    iconColor?: string
    borderAvailable?: boolean
}

const SocialIcon = ({
    disabled = false,
    href,
    className = '',
    icon = '',
    rounded = false,
    iconColor = '',
    borderAvailable = false,
}: SocialIconProps) => {
    const CurrentSocialIcon = icon ? IconList[icon] : EmptyIcon

    return (
        <Link
            href={href}
            className={`flex h-12 w-12 items-center ${iconColor} justify-center ${rounded && 'rounded-full border border-primary-carbon-grey-30 p-2 hover:bg-secondary-jade-20 focus:bg-secondary-jade-20 active:bg-secondary-jade-30'} 
            rounded-full  transition-all duration-[250ms] ${borderAvailable ? 'border-[1px] border-primary-carbon-grey-30 hover:border-primary-white focus:border-primary-white' : ''} ease-in  hover:bg-primary-white hover:text-primary-green focus:bg-primary-white
            focus:text-primary-green focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-primary-green
            active:text-primary-green ${disabled && 'pointer-events-none cursor-none border-primary-carbon-grey-20 text-primary-carbon-grey-60'} ${className}`}
        >
            <CurrentSocialIcon />
        </Link>
    )
}

export default SocialIcon
