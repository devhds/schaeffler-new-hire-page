export interface NavigationTypes {
    navigationLinks: NavLinks[]
    languages: Languages[]
    copy: NavCopy
    video: {
        url: string
        originalFileName: string
    }
    currentLanguage: string
}

interface NavLinks {
    title: string
    slug: {
        current: string
    }
    _key: string
}

interface NavCopy {
    promotionText: string
    underline: string
}

interface Languages {
    value: string
    label: string
    slug: string
}
