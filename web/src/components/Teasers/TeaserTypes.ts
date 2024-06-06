import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

export interface TeasersProps {
    headline?: string
    items: Item[]
}

export interface Item {
    id: string
    overline: string
    text: string
    image?: {
        src: StaticImageData
        alt: string
    }
    description?: string
    href?: string
    video?: string | any
    children?: ReactNode
}

export interface TextImageBlockProps {
    title: string
    description: string
    headline: string
    imageContent?: {
        image: {
            src: StaticImageData
            alt: string
        }
        underline?: string
    }
    className?: string
}
