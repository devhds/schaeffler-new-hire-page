import React, { useEffect, useState } from 'react'
import { TimelineItems } from './TimelineTypes'
import Headlines from '../Headlines/Headlines'
import BodyText from '../Text/BodyText'
import TimelineItem from './TimelineItem'

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
        <div>
            <div className="sm:px-6 sm:pb-8 md:grid md:grid-cols-md md:py-[72px] lg:grid lg:grid-cols-lg lg:py-20 xl:grid xl:grid-cols-xl-ul xl:py-20 xs:px-6 xs:pb-8 ul:grid ul:grid-cols-xl-ul ul:py-20">
                <div
                    style={{
                        gridColumn: '2 / 2',
                    }}
                    className="pl-4 sm:pl-0 xs:pl-0"
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
            </div>
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
        </div>
    )
}

export default Timeline
