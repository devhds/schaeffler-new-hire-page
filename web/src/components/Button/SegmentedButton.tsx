'use client'

import React, { ElementType, useCallback, useState } from 'react'
import { IconList } from '../Icons'

interface Segment {
    label: string
    value: string
    icon?: string
    disabled: boolean
}

interface SegmentedButtonProps {
    segments: Segment[]
    handleSelect: (value: string) => void
    className?: string
}

const SegmentedButton = ({
    segments,
    handleSelect,
    className = '',
}: SegmentedButtonProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const ActiveIcon: ElementType = IconList['Check']
    const AdditionalSegmentIcon = (icon: string) => {
        const AdditionalIcon = IconList[icon]
        return <AdditionalIcon />
    }

    const onInputChange = useCallback(
        (value: string, index: number) => {
            setActiveIndex(index)
            handleSelect(value)
        },
        [handleSelect]
    )

    return (
        <div className={`mx-6 mt-6 flex flex-row ${className}`}>
            {segments?.map((item, index) => (
                <div
                    key={item.value}
                    className={`${index === activeIndex ? '' : 'hover:bg-transparent-carbon-gray-8'} relative  flex h-10 items-center border-b border-r border-t border-primary-carbon-grey-80 px-4 py-2.5 focus:bg-transparent-carbon-gray-8 focus:outline-dashed focus:outline-1 focus:outline-offset-4 
                     ${item.disabled && 'pointer-events-none !border-primary-carbon-grey-30 text-primary-carbon-grey-80'}
                     ${index === 0 && 'rounded-bl-full rounded-tl-full border-l'}
                     ${index === segments.length - 1 && "border-primary-carbon-grey-80' rounded-br-full rounded-tr-full"}
                     ${index === activeIndex ? 'bg-primary-carbon-grey-80 text-primary-white' : 'bg-primary-white'}`}
                >
                    <input
                        className="absolute bottom-0 left-0 right-0 top-0 m-0 h-full w-full cursor-pointer opacity-0"
                        type="radio"
                        value={item.value}
                        id={item.label}
                        name={item.value}
                        onChange={() => onInputChange(item.value, index)}
                        checked={index === activeIndex}
                    />
                    <label
                        htmlFor={item.label}
                        className={`flex flex-row items-center ${index !== activeIndex && !item.icon && 'mx-[23px]'} ${(index === activeIndex || index !== activeIndex) && 'mx-[10px]'}`}
                    >
                        {index === activeIndex && (
                            <span className="mr-2">
                                {index === activeIndex && <ActiveIcon />}
                            </span>
                        )}
                        {item.icon && index !== activeIndex && (
                            <span className="mr-2">
                                {AdditionalSegmentIcon(item.icon)}
                            </span>
                        )}
                        {item.label}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default SegmentedButton
