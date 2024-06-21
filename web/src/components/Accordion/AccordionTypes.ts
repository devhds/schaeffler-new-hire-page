export interface AccordionTypes {
    title: string
    description?: string
    accordionItems: AccordionItemTypes[]
}

export interface AccordionItemTypes {
    _key: string
    headline: string
    expandedText: string
    disable?: boolean
}
