import React, { useEffect, useState } from 'react'
import { TimelineItems } from './TimelineTypes'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import TimelineItem from './TimelineItem'
import GridColumnsLayout from '../layout/GridColumnsLayout'

const Timeline = ({ items }: TimelineItems) => {
    const { title, description, timeLineList } = items

    const [stickyIndex, setStickyIndex] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.sticky-elements')
            elements.forEach((element, index) => {
                if (
                    index === stickyIndex &&
                    element.getBoundingClientRect().top <= -1
                ) {
                    setStickyIndex(index + 1)
                } else if (
                    index === stickyIndex - 1 &&
                    element.getBoundingClientRect().top > 0
                ) {
                    setStickyIndex(index)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [stickyIndex])

    return (
        <>
            <GridColumnsLayout additionalStyles="sm:px-6 sm:pb-8 md:py-[72px] lg:py-20 xl:py-20 xs:px-6 xs:pb-8 ul:py-20">
                <div
                    style={{
                        gridColumn: '2 / 2',
                    }}
                    className="pl-4 sm:mb-8 sm:pl-0 xs:mb-8	xs:pl-0"
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
                    <BodyText
                        size="medium"
                        text={description}
                        color="text-primary-soft-black"
                    />
                </div>
            </GridColumnsLayout>
            {timeLineList.map((item, index) => {
                return (
                    <TimelineItem
                        key={item.id}
                        {...item}
                        index={index}
                        stickyIndex={stickyIndex}
                    />
                )
            })}
        </>
    )
}

export default Timeline
