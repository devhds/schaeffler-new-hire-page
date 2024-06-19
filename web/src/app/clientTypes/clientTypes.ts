import { NavigationTypes } from '../../components/Navigation/NavigationTypes'
import { FooterTypes } from '../../components/Footer/FooterTypes'

export interface SanityDataTypes {
    market: string
    language: string
    navigationField: NavigationTypes
    footerField: FooterTypes
    contentBlocks: any
}

export interface TranslationsTypes {
    _key: string
    slug: string
}

export interface SanityTranslationsDataTypes {
    translations: TranslationsArrayTypes[]
}

interface TranslationsArrayTypes {
    _key: string
    value: Record<string, any>
    _type: string
}
