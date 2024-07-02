export interface JourneyTypes {
    items: JourneyItem[]
    anchorNavigation?: {
        current: string
    }
}

export interface JourneyItem {
    _key: string
    index: number
    headline: string
    description: string
    copy: string[]
}

export interface JourneyCopyTypes {
    text: string
    copyLength: number
}
