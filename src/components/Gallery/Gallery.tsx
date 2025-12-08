'use client'

import React from 'react'
import GridColumnsLayout from '../layout/GridColumnsLayout'
import Headlines from '../Headlines/Headlines'
import GalleryItems from './GalleryItems'
import { GalleryTypes } from '@/payload-types'

interface GalleryProps extends GalleryTypes {
  isLocatedInTabBlock: boolean
}

const Gallery: React.FC<GalleryProps> = ({
  items,
  headline,
  anchorNavigation,
  isLocatedInTabBlock,
}) => {
  return (
    <GridColumnsLayout
      id={anchorNavigation ?? undefined}
      additionalStyles={`xs:px-0 ${isLocatedInTabBlock ? 'xs:py-6 sm:py-12 md:py-[30px] lg:py-10 xl:py-10 ul:py-10' : 'xs:py-12 sm:py-12 md:py-[60px] lg:py-20 xl:py-20 ul:py-20'} sm:px-0 overflow-hidden`}
    >
      {headline && (
        <div
          style={{
            gridColumn: '2 / 4',
          }}
          className="px-4 sm:mb-12 sm:pl-0 sm:pr-6 md:mb-12 lg:mb-16 xl:mb-20 xs:mb-8 xs:pl-0 xs:pr-6 ul:mb-20"
        >
          <Headlines element="h2" text={headline} color="text-primary-soft-black" />
        </div>
      )}
      <GalleryItems items={items} />
    </GridColumnsLayout>
  )
}

export default Gallery
