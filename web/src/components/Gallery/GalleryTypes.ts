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
    image: {
        _type: string
        asset: {
            _type: string
            _ref: string
        }
    }
}
