export interface GalleryProps {
    items: GalleryItem[]
    headline?: string
    isLocatedInTabBlock?: boolean
    anchorNavigation?: { current: string }
}

export interface GalleryItem {
    _key: string
    title: string
    description: string
    image: string
}
