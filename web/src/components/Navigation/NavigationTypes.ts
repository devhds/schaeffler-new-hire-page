export interface NavigationProps {
    navContent: NavContent[]
    languages: Language[]
    currentNavigation?: string
    headerIsHidden?: boolean
    navIsInTopLocation?: boolean
}

interface NavContent {
    text: string
    href: string
}

interface Language {
    value: string
    label: string
}
