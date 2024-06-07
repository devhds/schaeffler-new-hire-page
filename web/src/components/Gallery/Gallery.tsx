'use client'

import React from 'react'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import Headlines from '../Headlines/Headlines'
import { GalleryTypes } from './GalleryTypes'
import GalleryItems from './GalleryItems'

const Gallery = ({ gallery, headline }: GalleryTypes) => {
    return (
        <GridColumnsLayout additionalStyles="sm:px-6 xs:pr-0 sm:pr-0 sm:py-8 md:py-[72px] lg:py-20 xl:py-20 xs:px-6 xs:py-8 ul:py-20 overflow-hidden">
            {headline && (
                <div
                    style={{
                        gridColumn: '2 / 4',
                    }}
                    className="px-4 sm:mb-12 sm:pl-0 sm:pr-6 md:mb-12 lg:mb-16 xl:mb-20 xs:mb-8 xs:pl-0 xs:pr-6 ul:mb-20"
                >
                    <Headlines
                        element="h2"
                        text={headline}
                        color="text-primary-soft-black"
                    />
                </div>
            )}
            <GalleryItems items={gallery} />
        </GridColumnsLayout>
    )
}

export default Gallery
