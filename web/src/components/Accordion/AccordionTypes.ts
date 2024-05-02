export interface AccordionTypes {
    title: string
    description?: string
    items: AccordionItemTypes[]
}

export interface AccordionItemTypes {
    id: string
    headline: string
    expandedText: string
    disable?: boolean
}
