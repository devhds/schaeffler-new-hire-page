'use client'

import React from 'react'
import Headlines from '../Headlines/Headlines'
import BodyText from './BodyText'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import { SanityImage } from '../SanityImage/SanityImage'
import RichText from '../RichText/RichText'

interface TextImageBlockProps {
    title: string
    portableText: Array<any>
    imageContent?: {
        image: {
            _type: string
            asset: {
                _type: string
                _ref: string
            }
        }
        underline?: string
    }
    className?: string
    anchorNavigation?: {
        current: string
    }
}

const TextImageBlock = ({
    title,
    className,
    imageContent,
    portableText,
    anchorNavigation,
}: TextImageBlockProps) => {
    return (
        <GridColumnsLayout
            id={anchorNavigation?.current}
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
                    <RichText content={portableText} />
                </div>
                {imageContent && (
                    <div
                        className={`w-full px-4 sm:px-0 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 xs:px-0 xs:pb-8 ul:pb-12`}
                    >
                        <SanityImage
                            className="w-full object-cover"
                            image={imageContent.image}
                            alt={`${title}-image`}
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