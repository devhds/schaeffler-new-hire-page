interface NavigationProps {
    navContent: NavContent[]
    languages: Language[]
    darkEdition?: boolean
    currentNavigation?: string
}

interface NavContent {
    text: string
    href: string
}

interface Language {
    value: string
    label: string
}
