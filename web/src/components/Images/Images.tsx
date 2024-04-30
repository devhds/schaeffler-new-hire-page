'use client'

import React from 'react'
import Headlines from '../Headlines/Headlines'
import Image from 'next/image'
import BodyText from '../Text/BodyText'
import { ImagesProps } from './ImagesTypes'

const Images = ({ ...props }: ImagesProps) => {
    const { type } = props

    return (
        <div className="md:grid-cols-md lg:grid-cols-lg xl:grid-cols-xl-ul ul:grid-cols-xl-ul relative z-10 sm:px-6 sm:py-12 md:grid md:px-12 md:py-[3.75rem] lg:grid lg:px-12 lg:py-20 xl:grid xl:px-20 xl:py-20 xs:px-6 xs:py-12 ul:grid ul:px-20 ul:py-20">
            {type === 'single' && <SingleImage {...props} />}
        </div>
    )
}

const SingleImage = ({ headline, images, subline }: ImagesProps) => {
    return (
        <div
            style={{
                gridColumn: '1 / 6',
            }}
        >
            <Headlines
                color="text-primary-soft-black"
                element="h2"
                text={headline}
                className="sm:mb-8 md:mb-10 lg:mb-12 xl:mb-12 xs:mb-8 ul:mb-12"
            />
            {!images ||
                (images[0] && (
                    <Image
                        src={images[0].src}
                        alt={`single-image`}
                        className="w-full object-cover"
                    />
                ))}
            <BodyText
                text={subline}
                size="small"
                color="text-primary-carbon-grey-80"
                className="mt-4"
            />
        </div>
    )
}

export default Images
