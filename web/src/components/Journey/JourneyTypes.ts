import { StaticImageData } from 'next/image'

export interface JourneyTypes {
    journeyData: JourneyItem[]
}

export interface JourneyItem {
    id: string
    image: {
        src: StaticImageData
        alt: string
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
