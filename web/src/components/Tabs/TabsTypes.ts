import { ContentBlocksProps } from '../ContentBlocks/ContentBlocks'

export interface TabsProps {
    headline?: string
    description?: string
    tabsList: TabsItemProps[]
    anchorNavigation?: { current: string }
}

export interface TabsItemProps {
    label: string
    value: {
        current: string
    }
    tabsContent: ContentBlocksProps['contentBlocks']
    _key: string
}
