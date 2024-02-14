'use client'

import React from 'react'
import Image from 'next/image'
import testImage from '../../../assets/images/bg-image.png'
import BodyText from './BodyText'

interface InterfaceProps {
    image?: string
    author: Record<string, string>
    text: string
}

const Quotes = ({ image, text, author }: InterfaceProps) => {
    return (
        <div className="md:grid md:grid-cols-md lg:grid lg:grid-cols-lg xl:grid xl:grid-cols-xl-ul ul:grid ul:grid-cols-xl-ul">
            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="relative sm:px-8 sm:py-12 md:py-[60px] lg:py-20 lg:pr-12 xl:py-20 xs:px-6 xs:py-12 ul:py-20"
            >
                <div className="flex flex-row justify-start sm:flex-col sm:gap-y-6 md:gap-x-6 lg:gap-x-8 xl:gap-x-8 xs:flex-col xs:gap-y-6 ul:gap-x-8">
                    {image !== '' && (
                        <Image
                            className="-left-[13rem] rounded-full sm:h-[9.75rem] sm:w-[9.75rem] md:absolute md:-left-[10rem] md:h-[8.438rem] md:w-[8.438rem] lg:absolute lg:h-[11.688rem] lg:w-[11.688rem] xl:absolute xl:h-[11.688rem] xl:w-[11.688rem] xs:h-[9.75rem] xs:w-[9.75rem] ul:absolute ul:h-[11.688rem] ul:w-[11.688rem]"
                            src={testImage}
                            alt="quote_image"
                        />
                    )}
                    <div className="flex w-[92%] flex-row items-start sm:w-full xs:w-full">
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
                                    text={`${author.name}${author.position ? ',' : ''}`}
                                    size="small"
                                    color="text-primary-carbon-grey-100"
                                    fontWeight="semi-bold"
                                />
                                <BodyText
                                    text={author.position}
                                    size="small"
                                    className="md:ml-1 lg:ml-1 xl:ml-1 ul:ml-1"
                                    color="text-primary-carbon-grey-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes
