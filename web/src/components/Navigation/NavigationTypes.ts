import { SanityDataTypes } from '../../app/clientTypes/clientTypes'

export interface NavigationTypes extends SanityDataTypes {
    navigationLinks: NavLinks[]
    languages: Languages[]
    copy: NavCopy
    video: {
        url: string
        originalFileName: string
    }
    currentLanguage: string
    currentMarketLanguage: string
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
    url: string
}
