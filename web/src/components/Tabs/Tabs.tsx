import React from 'react'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { TabContext } from '@mui/lab'
import GridColumnsLayout from '../layout/GridColumnsLayout'

const Tabs = () => {
    const [value, setValue] = React.useState('1')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <GridColumnsLayout additionalStyles="sm:px-6 sm:py-8 md:py-[72px] lg:py-20 xl:py-20 xs:px-6 xs:py-8 ul:py-20">
            <div
                style={{
                    gridColumn: '2 / 5',
                }}
                className="px-4"
            >
                <TabContext value={value}>
                    <TabList
                        onChange={handleChange}
                        centered
                        variant="scrollable"
                    >
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </div>
        </GridColumnsLayout>
    )
}

export default Tabs
