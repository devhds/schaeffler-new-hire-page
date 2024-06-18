export interface VideoFullScreenTypes {
    video: {
        url: string
        originalFilename: string
    }
    copy: {
        headline: string
        description: string
    }
    anchorNavigation?: {
        current: string
    }
}

export interface ImageFullScreenTypes {
    image: {
        _type: string
        asset: {
            _type: string
            _ref: string
        }
    }
    copy: {
        headline: string
        description: string
        underline?: string
    }
    classNames?: string
    anchorNavigation?: {
        current: string
    }
}
