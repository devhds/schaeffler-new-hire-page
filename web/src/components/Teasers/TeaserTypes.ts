import { ReactNode } from 'react'

export interface TeasersProps {
    headline?: string
    teaserItems: Item[]
    anchorNavigation?: {
        current: string
    }
}

export interface Item {
    _key: string
    overline: string
    text: string
    description?: string
    image?: string
    video: string
    href: string
    children?: ReactNode
}
