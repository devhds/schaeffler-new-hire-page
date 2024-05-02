import React from 'react'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import { TextBlockProps } from './TeaserTypes'
import { GridColumns } from '../../constants/GridColumns/GridColumns'

const TextBlock = ({ title, description, headline }: TextBlockProps) => {
    return (
        <div
            className={`sm:px-6 sm:py-8 md:py-[72px] lg:py-20 xl:py-20 xs:px-6 xs:py-8 ul:py-20 ${GridColumns}`}
        >
            <div
                style={{
                    gridColumn: '2 / 2',
                }}
                className="pl-4 sm:pb-8 sm:pl-0 xs:pb-8	xs:pl-0"
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
                    element="h3"
                    color="text-primary-soft-black"
                    className="pb-6 sm:pb-0 xs:pb-0"
                />
                <BodyText
                    size="base"
                    text={description}
                    color="text-primary-soft-black sm:py-4 xs:py-4"
                />
            </div>
        </div>
    )
}

export default TextBlock
