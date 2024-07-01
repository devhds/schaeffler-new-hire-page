export interface GalleryTypes {
    items: GalleryItem[]
    headline?: string
    anchorNavigation?: {
        current: string
    }
}

export interface GalleryItem {
    _key: string
    title: string
    description: string
    image: string
}
