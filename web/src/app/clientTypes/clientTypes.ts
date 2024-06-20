import { NavigationTypes } from '../../components/Navigation/NavigationTypes'
import { FooterTypes } from '../../components/Footer/FooterTypes'

export interface SanityDataTypes {
    market: string
    language: string
    navigationField: NavigationTypes
    footerField: FooterTypes
    contentBlocks: any
    textContentOnly?: boolean
    goBackButtonText?: string
    headline?: string
    languages: LanguagesTypes[]
    isDevelopmentPage: boolean
}

export interface LanguagesTypes {
    value: string
    label: string
    url: string
}
