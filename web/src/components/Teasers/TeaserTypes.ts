import { ReactNode } from 'react'

export interface TeasersProps {
    headline?: string
    teaserItems: TeaserItemProps[]
    anchorNavigation?: { current: string }
}

export interface TeaserItemProps {
    _key: string
    overline: string
    text: string
    description?: string
    image?: string
    video: string
    href: string
    children?: ReactNode
    index?: number
    itemsLength?: number
    animate?: boolean
}
