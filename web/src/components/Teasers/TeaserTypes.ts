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
    image?: {
        _type: string
        asset: {
            _type: string
            _ref: string
        }
    }
    video?: {
        url: string
        originalFileName: string
    }
    href: string
    children?: ReactNode
}
