export interface ImagesProps {
    type:
        | 'single' // 16:9
        | 'double' // 3:4 && 16:9
        | 'double-reversed' // 16:9 && 3:4
        | 'double-full' // 16:9 && 16:9
        | 'double-full-reversed' // 16:9 && 16:9
    headline: string
    subline: string
    images?: Image[]
}

interface Image {
    src: string | any
    alt: string
}
