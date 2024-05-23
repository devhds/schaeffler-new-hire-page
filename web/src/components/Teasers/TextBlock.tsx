import React from 'react'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import { TextBlockProps } from './TeaserTypes'
import GridColumnsLayout from '../layout/GridColumnsLayout'

const TextBlock = ({
    title,
    description,
    headline,
    className,
}: TextBlockProps) => {
    return (
        <GridColumnsLayout
            additionalStyles={`${className} sm:px-6 sm:py-8 md:py-[72px] lg:py-20 xl:py-20 xs:px-6 xs:py-8 ul:py-20 `}
        >
            <div
                style={{
                    gridColumn: '2 / 2',
                }}
                className="px-4 sm:px-0 sm:pb-8 xs:px-0	xs:pb-8"
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
                className="mx-auto w-9/12 sm:m-0 sm:w-full xs:m-0 xs:w-full"
            >
                <Headlines
                    text={headline}
                    element="h4"
                    color="text-primary-soft-black"
                    className="pb-6 sm:pb-0 xs:pb-0"
                />
                <BodyText
                    size="base"
                    text={description}
                    color="text-primary-soft-black"
                    className="sm:py-4 xs:py-4"
                />
            </div>
        </GridColumnsLayout>
    )
}

export default TextBlock
