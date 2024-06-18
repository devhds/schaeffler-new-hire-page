export interface JourneyTypes {
    items: JourneyItem[]
    anchorNavigation?: {
        current: string
    }
}

export interface JourneyItem {
    _key: string
    image: {
        _type: string
        asset: {
            _type: string
            _ref: string
        }
    }
    headline: string
    description: string
    copy: string[]
}

export interface JourneyCopyTypes {
    text: string
    index: number
    copyLength: number
}
