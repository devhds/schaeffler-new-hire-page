export interface NavigationProps {
    navContent: NavContent[]
    languages: Language[]
    copy: NavCopy
    video: {
        src: string
    }
    currentNavigation?: string
    headerIsHidden?: boolean
    navIsInTopLocation?: boolean
}

interface NavContent {
    text: string
    href: string
}

interface NavCopy {
    promotionText: string
    description: string
}

interface Language {
    value: string
    label: string
}
