'use client'

import React from 'react'
import Link from 'next/link'
import { IconList } from '../Icons'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'

interface LinksProps {
    href: string
    text: string
    disabled?: boolean
    className?: string
}

const TextLinks = ({
    href = '',
    text,
    disabled = false,
    className = '',
}: LinksProps) => {
    const isExternalHref = href.indexOf('http') === 0
    const Icon = isExternalHref
        ? IconList['ArrowOutward']
        : IconList['ArrowForward']

    return (
        <div className="w-fit">
            <Link
                href={href}
                className={`flex flex-row items-center text-primary-soft-black underline decoration-primary-carbon-grey-50 underline-offset-4
                visited:text-tertiarty-visited-links hover:text-primary-green
                hover:decoration-primary-green focus:text-primary-green focus:no-underline focus:decoration-primary-green focus:outline-dashed focus:outline-1
                focus:outline-offset-1 active:text-primary-green active:decoration-primary-green ${disabled && 'pointer-events-none cursor-none !text-primary-carbon-grey-80 !decoration-primary-carbon-grey-80'} ${className}`}
            >
                <span className="mr-2">
                    <Icon
                        color={
                            disabled
                                ? fullConfig.theme.colors.primary[
                                      'carbon-grey'
                                  ]['80']
                                : fullConfig.theme.colors.primary['green']
                        }
                    />
                </span>
                {text}
            </Link>
        </div>
    )
}

export default TextLinks
