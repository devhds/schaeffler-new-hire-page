export interface FooterTypes {
    parallaxText: string
    isDevelopmentPage: boolean
    infoFields: {
        internalHref: string
        infoText: string
        _key: string
    }[]
    socialIconsFields: {
        externalHref: string
        icon: string
        _key: string
    }[]
    supportFields: {
        externalHref: string
        supportText: string
        _key: string
    }[]
}
