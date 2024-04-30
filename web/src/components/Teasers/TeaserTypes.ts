import { ReactNode } from 'react'

export interface TeasersProps {
    headline?: string
    items: Item[]
}

export interface Item {
    id: string
    overline: string
    text: string
    image?: string | any
    description?: string
    href?: string
    video?: string | any
    children?: ReactNode
}
