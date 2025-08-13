'use client'

import React from 'react'
import ParallaxText from '../Text/ParallaxText'
import Quotes from '../Text/Quotes'
import ImageFullScreen from '../FullScreenTeasers/ImageFullScreen'
import TextImageBlock from '../Text/TextImageBlock'
import VideoFullScreen from '../FullScreenTeasers/VideoFullScreen'
import Journey from '../Journey/Journey'
import Gallery from '../Gallery/Gallery'
import Tabs from '../Tabs/Tabs'
import DynamicNavigationLayout from '../layout/DynamicNavigationLayout'
import { Home } from '@/payload-types'
import Accordion from '@/components/Accordion/Accordion'
import TeasersLayout from '@/components/Teasers/TeasersLayout'

interface ContentBlocksProps {
  contentBlocks: Home['contentBlocks']
  isTabBlock?: boolean
}

const ContentBlocks = ({ contentBlocks, isTabBlock = false }: ContentBlocksProps) => {
  return contentBlocks
    ? contentBlocks.map((block) => {
        switch (block.blockType) {
          case 'parallaxText':
            return <ParallaxText key={block.id} {...block} />
          case 'quotes':
            return <Quotes isLocatedInTabBlock={isTabBlock} key={block.id} {...block} />
          case 'imageFullScreen':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <ImageFullScreen {...block} />
              </DynamicNavigationLayout>
            )
          case 'textImageBlock':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <TextImageBlock isLocatedInTabBlock={isTabBlock} {...block} />
              </DynamicNavigationLayout>
            )
          case 'videoFullScreen':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <VideoFullScreen {...block} />
              </DynamicNavigationLayout>
            )
          case 'journey':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <Journey {...block} />
              </DynamicNavigationLayout>
            )
          case 'gallery':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <Gallery isLocatedInTabBlock={isTabBlock} {...block} />
              </DynamicNavigationLayout>
            )
          case 'teaser':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <TeasersLayout {...block} />
              </DynamicNavigationLayout>
            )

          case 'accordion':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <Accordion {...block} />
              </DynamicNavigationLayout>
            )
          case 'tabs':
            return (
              <DynamicNavigationLayout key={block.id} anchorNavigation={block?.anchorNavigation}>
                <Tabs {...block} />
              </DynamicNavigationLayout>
            )
        }
      })
    : null
}

export default ContentBlocks
