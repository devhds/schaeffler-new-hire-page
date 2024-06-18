'use client'

import React from 'react'
import { client } from '../../app/lib/client'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

interface SanityImageTypes {
    className: string
    image: Record<string, any>
    alt: string
}

export function SanityImage({ className, image, alt }: SanityImageTypes) {
    const imageProps = useNextSanityImage(client, image)

    return (
        <>
            <Image {...imageProps} className={className} alt={alt} />
        </>
    )
}
