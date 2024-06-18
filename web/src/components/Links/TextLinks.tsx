'use client'

import React from 'react'
import Link from 'next/link'
import { IconList } from '../Icons'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'
import LabelText from '../Text/LabelText'

interface LinksProps {
    href: string
    text: string
    disabled?: boolean
    className?: string
    iconEnabled?: boolean
    location?: 'footer/menu' | 'default'
    textSize?: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small'
}

const TextLinks = ({
    href = '',
    text,
    disabled = false,
    className = '',
    iconEnabled = false,
    location = 'default',
    textSize = 'medium',
}: LinksProps) => {
    const isExternalHref = href?.indexOf?.('http') === 0
    const Icon = isExternalHref
        ? IconList['ArrowOutward']
        : IconList['ArrowForward']

    return (
        <div className="w-fit">
            <Link
                href={href}
                target={isExternalHref ? '_blank' : '_self'}
                style={{
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className={`flex flex-row items-center ${
                    location === 'default'
                        ? 'text-primary-soft-black'
                        : 'text-primary-carbon-grey-100'
                }  ${disabled && 'pointer-events-none cursor-none !text-primary-carbon-grey-80 !decoration-primary-carbon-grey-80'} ${className}`}
            >
                {iconEnabled && (
                    <span className="mr-2">
                        <Icon
                            color={
                                disabled
                                    ? fullConfig.theme.colors?.primary[
                                          'carbon-grey'
                                      ]['80']
                                    : fullConfig.theme.colors?.primary['green']
                            }
                        />
                    </span>
                )}
                <LabelText
                    text={text}
                    size={textSize}
                    className={`decoration-primary-carbon-grey-50 underline-offset-4
                    transition duration-[800ms]
                    visited:text-tertiarty-visited-links hover:text-primary-green hover:decoration-primary-green focus:text-primary-green focus:no-underline focus:decoration-primary-green
                    focus:outline-dashed focus:outline-1 focus:outline-offset-1 active:text-primary-green active:decoration-primary-green`}
                    color="currentColor"
                />
            </Link>
        </div>
    )
}

export default TextLinks
