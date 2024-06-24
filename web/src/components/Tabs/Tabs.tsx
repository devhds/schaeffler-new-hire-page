'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import { TabContext } from '@mui/lab'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import Headlines from '../Headlines/Headlines'
import { TabsItem, TabsTypes } from './TabsTypes'
import BodyText from '../Text/BodyText'
import ContentBlocks from '../ContentBlocks/ContentBlocks'

const Tabs = ({ ...props }: TabsTypes) => {
    const { headline, description, tabsList } = props

    const [value, setValue] = useState<string>(tabsList[0].value.current)
    const [currentTabContent, setCurrentTabContent] = useState<TabsItem[]>(
        tabsList[0].tabsContent
    )

    const handleChange = useCallback(
        (event: React.SyntheticEvent, newValue: string) => {
            setValue(newValue)
        },
        []
    )

    useEffect(() => {
        const currentContent = tabsList.filter(
            tab => tab.value.current === value
        )[0]
        setCurrentTabContent(currentContent.tabsContent)
    }, [value])

    return (
        <GridColumnsLayout additionalStyles="sm:py-8 md:py-[72px] lg:py-20 xl:py-20 xs:py-8 ul:py-20">
            {headline && (
                <div
                    style={{
                        gridColumn: description ? '2 / 2' : '2 / 4',
                    }}
                    className="px-4 pb-12 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 xs:pb-8 ul:pb-12"
                >
                    <Headlines
                        element="h2"
                        color="text-primary-soft-black"
                        text={headline}
                    />
                </div>
            )}

            {headline && description && (
                <div
                    style={{
                        gridColumn: '3 / 5',
                    }}
                    className="mx-auto w-9/12 px-4 pb-12 sm:w-full sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 xs:w-full xs:pb-8 ul:pb-12"
                >
                    <BodyText
                        size="large"
                        color="text-primary-soft-black"
                        text={description}
                    />
                </div>
            )}

            <div
                style={{
                    gridColumn: '2 / 5',
                }}
                className="px-4"
            >
                <TabContext value={value}>
                    <TabList
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#00893D',
                            },
                            '& .MuiTab-root': {
                                textTransform: 'capitalize',
                                fontFamily: 'inherit',
                                color: '#646464',
                                '&:hover': {
                                    color: '#00893D',
                                    backgroundColor: '#00893D1F',
                                },
                                '&.Mui-selected': { color: '#00893D' },
                                '& .MuiTabScrollButton-root': { opacity: '1' },
                                fontSize: {
                                    xs: '16px',
                                    sm: '16px',
                                    md: '18px',
                                    lg: '24px',
                                    xl: '24px',
                                },
                                paddingLeft: {
                                    xs: '16px',
                                    sm: '16px',
                                    md: '24px',
                                    lg: '32px',
                                    xl: '32px',
                                },
                                paddingRight: {
                                    xs: '16px',
                                    sm: '16px',
                                    md: '24px',
                                    lg: '32px',
                                    xl: '32px',
                                },
                                lineHeight: {
                                    xs: '28px',
                                    sm: '28px',
                                    md: '28px',
                                    lg: '36px',
                                    xl: '36px',
                                },
                                paddingBottom: '14px',
                                paddingTop: '14px',
                            },
                        }}
                        onChange={handleChange}
                        variant="scrollable"
                    >
                        {tabsList.map(tab => (
                            <Tab
                                sx={{
                                    borderBottom: '1px solid #E8E8E8;',
                                }}
                                key={tab._key}
                                label={tab.label}
                                value={tab.value.current}
                            />
                        ))}
                    </TabList>
                </TabContext>
            </div>
            <div
                style={{
                    gridColumn: '1 / 6',
                }}
            >
                <ContentBlocks contentBlocks={currentTabContent} />
            </div>
        </GridColumnsLayout>
    )
}

export default Tabs
