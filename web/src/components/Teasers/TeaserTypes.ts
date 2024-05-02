import { ReactNode } from 'react'

export interface TeasersProps {
    headline?: string
    items: Item[]
}

export interface Item {
    id: string
    overline: string
    text: string
    image?: {
        src: string
        alt: string
    }
    description?: string
    href?: string
    video?: string | any
    children?: ReactNode
}

export interface TextBlockProps {
    title: string
    description: string
    headline: string
}
