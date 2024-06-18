'use client'

import React from 'react'
import { TeasersProps } from './TeaserTypes'
import TeaserItem from './TeaserItem'

const TeaserGroup = ({ teaserItems }: TeasersProps) => {
    return teaserItems.map((item, index) => {
        const gridColumnValues = () => {
            switch (teaserItems.length) {
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
                key={item._key}
                style={{
                    gridColumn: gridColumnValues(),
                }}
                className="relative z-[31] sm:mb-4 sm:h-[15.5rem] sm:last:mb-0 md:h-[26.25rem] lg:h-[60vh] lg:max-h-[46.25rem] xl:h-[60vh] xl:max-h-[46.25rem] xs:mb-4 xs:h-[15.5rem] xs:last:mb-0 ul:h-[60vh] ul:max-h-[46.25rem]"
            >
                <TeaserItem
                    {...item}
                    index={index}
                    itemsLength={teaserItems.length}
                />
            </div>
        )
    })
}

export default TeaserGroup
