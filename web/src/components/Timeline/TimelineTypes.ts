import { StaticImageData } from 'next/image'

export interface TimelineItems {
    items: TimelineData
}

export interface TimeLineItem {
    id: string
    date: string
    icon: string | null
    image: string | null
    content: {
        title: string
        description: string
        link: string
        images: Image[]
        reversedImages: boolean
    }
}

interface Image {
    id: string
    image: {
        src: StaticImageData
        alt: string
    }
    imageCopy: string
}

interface TimelineData {
    title: string
    description: string
    timeLineList: TimeLineItem[]
}
