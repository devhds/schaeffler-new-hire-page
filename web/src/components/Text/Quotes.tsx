'use client'

import React from 'react'
import BodyText from './BodyText'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import { SanityImage } from '../SanityImage/SanityImage'

interface QuotesTypes {
    image: {
        _type: string
        asset: {
            _type: string
            _ref: string
        }
    }
    authorInfo: {
        name: string
        position?: string
    }
    text: string
    anchorNavigation?: {
        current: string
    }
    isLocatedInTabBlock?: boolean
}

const Quotes = ({
    image,
    text,
    authorInfo,
    anchorNavigation,
    isLocatedInTabBlock,
}: QuotesTypes) => {
    return (
        <GridColumnsLayout
            id={anchorNavigation?.current}
            additionalStyles={`relative z-[30] sm:px-6 xs:px-6  ${isLocatedInTabBlock ? 'sm:py-9 xs:py-9 md:py-9 lg:py-10 xl:py-10 ul:py-10' : 'sm:py-12 md:py-[72px] lg:py-20 xs:py-12 ul:py-20 xl:py-20'}`}
        >
            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="relative"
            >
                <div className="flex flex-row justify-start sm:flex-col sm:gap-y-6 md:gap-x-6 lg:gap-x-8 xl:gap-x-8 xs:flex-col xs:gap-y-6 ul:gap-x-8">
                    {image && (
                        <SanityImage
                            key={'Quotes' + authorInfo.name}
                            image={image}
                            alt={authorInfo.name}
                            className="-left-[13rem] rounded-full object-cover sm:h-40 sm:w-40 md:absolute md:-left-[10rem] md:h-[8.5rem] md:w-[8.5rem] lg:absolute lg:h-48 lg:w-48 xl:absolute xl:h-48 xl:w-48 xs:h-40 xs:w-40 ul:absolute ul:h-48 ul:w-48"
                        />
                    )}
                    <div
                        className={`flex w-full flex-row items-start sm:ml-[-14px] sm:w-full xs:ml-[-14px] xs:w-full`}
                    >
                        <span className="mr-0.5 font-bold text-secondary-forest-80 sm:text-quotes-sm-md md:text-quotes-sm-md lg:text-quotes-lg xl:text-quotes-xl xs:text-quotes-xs ul:text-quotes-ul">
                            “
                        </span>
                        <div className="flex flex-col">
                            <p className="relative font-bold text-secondary-forest-80 sm:mb-4 sm:text-quotes-sm-md md:mb-4 md:text-quotes-sm-md lg:mb-6 lg:text-quotes-lg xl:mb-6 xl:text-quotes-xl xs:mb-4 xs:text-quotes-xs ul:mb-6 ul:text-quotes-ul">
                                {text}
                                <span className="">”</span>
                            </p>
                            <div
                                className={`flex flex-row items-center before:mr-4 before:h-px before:w-24 before:rounded-full before:bg-primary-carbon-grey-100 before:content-[''] sm:flex-col sm:items-start before:sm:mb-2 md:flex-row lg:flex-row xl:flex-row xs:flex-col xs:items-start before:xs:mb-2 ul:flex-row`}
                            >
                                <BodyText
                                    text={`${authorInfo.name}${authorInfo.position ? ',' : ''}`}
                                    size="small"
                                    color="text-primary-carbon-grey-100"
                                    fontWeight="semi-bold"
                                />
                                <BodyText
                                    text={authorInfo.position}
                                    size="small"
                                    className="md:ml-1 lg:ml-1 xl:ml-1 ul:ml-1"
                                    color="text-primary-carbon-grey-100"
                                />
                            </div>
                        </div>
                        <span className="mr-0.5 font-bold text-secondary-forest-80 opacity-0 sm:text-quotes-sm-md md:text-quotes-sm-md lg:text-quotes-lg xl:text-quotes-xl xs:text-quotes-xs ul:text-quotes-ul">
                            “
                        </span>
                    </div>
                </div>
            </div>
        </GridColumnsLayout>
    )
}

export default Quotes
