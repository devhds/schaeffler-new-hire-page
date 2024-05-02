export interface SocialMediaTypes {
    title: string
    socialMediaList: socialMediaListItem[]
}

interface socialMediaListItem {
    id: string
    icon: string
    href: string
}
