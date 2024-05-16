import React from 'react'
import Headlines from '../Headlines/Headlines'
import RichText from '../RichText/RichText'

interface HeadlineAndTextProps {
    content: any
    headline: string
}

const HeadlineAndText = ({ headline, content }: HeadlineAndTextProps) => {
    return (
        <div
            className={`sm:px-8 sm:py-12 md:grid md:grid-cols-md md:py-[3.75rem] lg:grid lg:grid-cols-lg lg:py-20 xl:grid xl:grid-cols-xl-ul xl:py-20 xs:px-6 xs:py-12 ul:grid ul:grid-cols-xl-ul ul:py-20`}
        >
            <div
                style={{
                    gridColumn: '2 / 2',
                }}
                className="px-4 sm:mb-8 sm:px-0 xs:mb-8 xs:px-0"
            >
                <Headlines
                    element="h2"
                    text={headline}
                    color="text-primary-soft-black"
                />
            </div>
            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="px-[109px] sm:px-0 md:px-[79px] xs:px-0"
            >
                <RichText content={content} />
            </div>
        </div>
    )
}

export default HeadlineAndText
