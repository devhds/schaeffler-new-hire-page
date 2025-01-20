import { NavigationTypes } from '../../components/Navigation/NavigationTypes'
import { FooterTypes } from '../../components/Footer/FooterTypes'
import { ContentBlocksProps } from '../../components/ContentBlocks/ContentBlocks'

export interface SanityDataTypes {
    market: string
    language: string
    navigationField: NavigationTypes
    footerField: FooterTypes
    contentBlocks: ContentBlocksProps['contentBlocks']
    textContentOnly?: boolean
    goBackButtonText?: string
    headline?: string
    languages: LanguagesTypes[]
    isDevelopmentPage: boolean
    slug: {
        current: string
    }
}

export interface LanguagesTypes {
    value: string
    label: string
    url: string
}

export type MarketLanguage =
    | 'de-de'
    | 'de-en'
    | 'fr-fr'
    | 'fr-en'
    | 'lu-fr'
    | 'lu-en'
    | 'it-it'
    | 'it-en'
    | 'es-es'
    | 'es-en'
    | 'pl-pl'
    | 'pl-en'
    | 'br-br'
    | 'br-en'
    | 'kr-ko'
    | 'kr-en'
    | 'my-en'
    | 'in-en'
    | 'us-en'
    | 'ro-en'
