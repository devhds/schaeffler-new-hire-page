'use client'

import React, { useState } from 'react'
import { AccordionTypes } from './AccordionTypes'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import AccordionItem from './AccordionItem'
import GridColumnsLayout from '../layout/GridColumnsLayout'

const Accordion = ({ title, description, items }: AccordionTypes) => {
    const [expandedId, setExpandedId] = useState<string>('')

    return (
        <GridColumnsLayout
            additionalStyles={`sm:px-6 sm:py-8 md:py-[72px] lg:py-20 xl:py-20 xs:px-6 xs:py-8 ul:py-20`}
        >
            <div
                style={{
                    gridColumn: '2 / 2',
                }}
                className="pl-4 sm:w-full sm:pb-6 sm:pl-0 xs:w-full xs:pb-6 xs:pl-0"
            >
                <Headlines
                    element="h2"
                    text={title}
                    color="text-primary-soft-black"
                />
            </div>

            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="2 mx-auto w-9/12 sm:w-full xs:w-full"
            >
                <BodyText
                    text={description}
                    size="base"
                    color="text-primary-soft-black"
                    className="sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 xs:pb-8 ul:pb-1"
                />
                {items.map(item => (
                    <AccordionItem
                        key={item.id}
                        {...item}
                        expandedId={expandedId}
                        updatedExpandedId={(id: string) => setExpandedId(id)}
                    />
                ))}
            </div>
        </GridColumnsLayout>
    )
}

export default Accordion
