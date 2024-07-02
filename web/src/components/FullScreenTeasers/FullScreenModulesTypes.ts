export interface VideoFullScreenTypes {
    video: string
    copy: {
        headline: string
        description: string
    }
    anchorNavigation?: {
        current: string
    }
}

export interface ImageFullScreenTypes {
    image: string
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
