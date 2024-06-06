import React from 'react'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import { TextImageBlockProps } from './TeaserTypes'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import Image from 'next/image'

const TextImageBlock = ({
    title,
    description,
    headline,
    className,
    imageContent,
}: TextImageBlockProps) => {
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
                className="sm:m-0 xs:m-0"
            >
                <div className="mx-auto mb-10 w-9/12 sm:w-full lg:mb-12 xl:mb-12 xs:w-full ul:mb-12">
                    {headline && (
                        <Headlines
                            text={headline}
                            element="h4"
                            color="text-primary-soft-black"
                            className="pb-6 sm:pb-0 xs:pb-0"
                        />
                    )}
                    <BodyText
                        size="base"
                        text={description}
                        color="text-primary-soft-black"
                        className="sm:py-4 xs:py-4"
                    />
                </div>
                {imageContent && (
                    <div
                        className={`w-full px-4 sm:px-0 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 xs:px-0 xs:pb-8 ul:pb-12`}
                    >
                        <Image
                            src={imageContent.image.src}
                            alt={imageContent.image.alt}
                            className="w-full object-cover"
                        />
                        {imageContent.underline && (
                            <BodyText
                                text={imageContent.underline}
                                size="small"
                                className="sm:pt-4 md:mt-4 lg:mt-4 xl:mt-4 xs:pt-4 ul:mt-4"
                                color="text-primary-carbon-grey-100"
                            />
                        )}
                    </div>
                )}
            </div>
        </GridColumnsLayout>
    )
}

export default TextImageBlock
