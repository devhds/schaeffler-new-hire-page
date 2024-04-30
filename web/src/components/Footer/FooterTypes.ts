interface FooterData {
    support: {
        id: string
        href: string
        text: string
    }[]
    links: {
        id: string
        href: string
        text: string
    }[]
    socialLinks: {
        id: string
        href: string
        icon: string
    }[]
}

export interface FooterProps {
    data: FooterData
}
