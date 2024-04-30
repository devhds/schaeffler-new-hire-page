import React from 'react'
import DisplayText from '../Text/DisplayText'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import Image from 'next/image'
import { TimeLineItem } from './TimelineTypes'

interface TimelineItemProps extends TimeLineItem {
    index: number
    stickyIndex: number
}

const TimelineItem = ({
    stickyIndex,
    index,
    date,
    content,
}: TimelineItemProps) => {
    return (
        <div className="relative sm:ml-3 sm:mr-6 sm:border-l sm:border-secondary-forest-100 sm:pl-3 md:grid md:grid-cols-md lg:grid lg:grid-cols-lg xl:grid xl:grid-cols-xl-ul xs:ml-3 xs:mr-6 xs:border-l xs:border-secondary-forest-100 xs:pl-3 ul:grid ul:grid-cols-xl-ul">
            <div
                style={{
                    gridColumn: '2 / 2',
                }}
                className={`sticky-elements  top-[var(--headerHeight)]  sm:top-[var(--headerHeightMobile)] xs:top-[var(--headerHeightMobile)] ${stickyIndex === index ? 'after:bottom-[17px] after:left-[-18px] after:h-[11px] after:w-[11px]' : 'after:bottom-[19px] after:left-[-16px] after:h-[7px] after:w-[7px]'} sticky top-0 flex items-center self-start bg-primary-white px-4 after:absolute after:z-10 after:rounded-full after:bg-secondary-forest-30 sm:z-[31] sm:py-2 sm:pl-0 md:pt-9 md:after:hidden lg:pt-10 lg:after:hidden xl:pt-10 xl:after:hidden xs:z-[31] xs:py-2 xs:pl-0 ul:pt-10 ul:after:hidden`}
            >
                <DisplayText
                    text={date}
                    size="normal"
                    color="text-secondary-forest-30"
                />
                <div
                    className={`after:content[''] sm:hidden xs:hidden ${stickyIndex === index ? 'after:bottom-[-7px] after:right-[-24px] after:h-[15px] after:w-[15px]' : 'after:h-[7px] after:w-[7px]'} relative ml-6 h-px w-[80%] bg-secondary-forest-30 after:absolute after:bottom-[-2px] after:right-[-20px] after:z-10 after:rounded-full after:bg-secondary-forest-30`}
                />
            </div>
            <div
                style={{
                    gridColumn: '3 / 5',
                }}
                className="mx-auto border-l border-secondary-forest-100 sm:border-none sm:pt-2 md:pt-9 lg:pt-10 xl:pt-10 xs:border-none  xs:pt-2  ul:pt-10"
            >
                <div className="mx-auto w-9/12 sm:w-full sm:pb-10 md:pb-10	lg:pb-12 xl:pb-12 xs:w-full xs:pb-10 ul:pb-12">
                    <Headlines
                        text={content.title}
                        element="h3"
                        color="text-primary-soft-black"
                        className="pb-6"
                    />
                    <BodyText
                        text={content.description}
                        size="base"
                        color="text-primary-soft-black"
                    />
                </div>

                <div
                    style={{
                        gridTemplateColumns:
                            content.images.length > 1 ? '35% 1fr' : '1fr',
                    }}
                    className={`relative z-30 grid flex-col gap-x-8 px-4 sm:flex sm:p-0 xs:flex xs:p-0 ${content.reversedImages ? 'flex-row-reverse' : 'flex-row'}`}
                >
                    {content.images.map((item, index) => {
                        return (
                            <div
                                className={`w-full sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 xs:pb-8 ul:pb-12`}
                                key={item.id}
                            >
                                <Image
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    className="w-full object-cover"
                                />
                                <BodyText
                                    text={item.imageCopy}
                                    size="small"
                                    className="sm:pt-4 md:mt-4 lg:mt-4 xl:mt-4 xs:pt-4 ul:mt-4"
                                    color="text-primary-carbon-grey-100"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TimelineItem
