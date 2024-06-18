export interface AccordionTypes {
    title: string
    description?: string
    items: AccordionItemTypes[]
}

export interface AccordionItemTypes {
    _key: string
    headline: string
    expandedText: string
    disable?: boolean
}
