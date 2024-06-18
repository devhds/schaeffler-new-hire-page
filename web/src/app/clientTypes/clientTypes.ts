import { NavigationTypes } from '../../components/Navigation/NavigationTypes'
import { FooterTypes } from '../../components/Footer/FooterTypes'

export interface DataTypes {
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
