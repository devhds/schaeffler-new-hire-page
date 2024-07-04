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
    copy: JourneyCopyTypes[]
}

export interface JourneyCopyTypes {
    text: Record<string, any>
}
