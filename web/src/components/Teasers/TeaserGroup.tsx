'use client'

import React from 'react'
import { TeasersProps } from './TeaserTypes'
import TeaserItem from './TeaserItem'

const TeaserGroup = ({ items }: TeasersProps) => {
    return items.map((item, index) => {
        const gridColumnValues = () => {
            switch (items.length) {
                case 1:
                    return '2 / 5'
                case 2:
                    switch (index) {
                        case 0:
                            return '2 / 2'
                        case 1:
                            return '3 / 5'
                        default:
                            return ''
                    }
                case 3:
                    switch (index) {
                        case 0:
                            return '2 / 2'
                        case 1:
                            return '3 / 3'
                        case 2:
                            return '4 / 4'
                        default:
                            return ''
                    }
                default:
                    return ''
            }
        }

        return (
            <div
                key={item.id}
                style={{
                    gridColumn: gridColumnValues(),
                }}
                className="relative z-[31] sm:mb-4 sm:h-[15.5rem] sm:last:mb-0 md:h-[26.25rem] lg:h-[35rem] xl:h-[35rem] xs:mb-4 xs:h-[15.5rem] xs:last:mb-0 ul:h-[35rem]"
            >
                <TeaserItem {...item} index={index} />
            </div>
        )
    })
}

export default TeaserGroup
