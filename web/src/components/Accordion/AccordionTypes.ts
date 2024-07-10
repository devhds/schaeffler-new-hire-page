export interface AccordionProps {
    title: string
    description?: string
    accordionItems: AccordionItemProps[]
    anchorNavigation?: { current: string }
}

export interface AccordionItemProps {
    _key: string
    headline: string
    expandedText: string
    disable?: boolean
    expandedId: string
    updatedExpandedId: (id: string) => void
}
