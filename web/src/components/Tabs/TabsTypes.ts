export interface TabsTypes {
    headline?: string
    description?: string
    tabsList: TabsItem[]
}

export interface TabsItem {
    label: string
    value: {
        current: string
    }
    tabsContent: Array<any>
    _key: string
}
