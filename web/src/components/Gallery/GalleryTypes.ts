import { StaticImageData } from 'next/image'

export interface GalleryTypes {
    gallery: GalleryItem[]
    headline?: string
}

export interface GalleryItem {
    id: string
    title: string
    description: string
    image: {
        src: StaticImageData
        alt: string
    }
}
