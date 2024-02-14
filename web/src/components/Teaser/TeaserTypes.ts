import { ReactNode } from 'react'

export interface TeaserItem {
    id: string
    overline: string
    text: string
    image?: string | any
    description?: string
    children?: ReactNode
    imageExist?: boolean
}
export interface TeaserProps {
    title?: string
    type?: 'mixed' | 'regular'
    items: TeaserItem[]
}
