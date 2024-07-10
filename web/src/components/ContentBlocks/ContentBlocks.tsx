'use client'

import React from 'react'
import ParallaxText from '../Text/ParallaxText'
import Quotes from '../Text/Quotes'
import ImageFullScreen from '../FullScreenTeasers/ImageFullScreen'
import TextImageBlock from '../Text/TextImageBlock'
import VideoFullScreen from '../FullScreenTeasers/VideoFullScreen'
import Journey from '../Journey/Journey'
import Gallery from '../Gallery/Gallery'
import TeasersLayout from '../Teasers/TeasersLayout'
import Accordion from '../Accordion/Accordion'
import Tabs from '../Tabs/Tabs'
import DynamicNavigationLayout from '../layout/DynamicNavigationLayout'
import {
    AccordionBlockTypes,
    GalleryBlockTypes,
    ImageFullScreenBlockTypes,
    JourneyBlockTypes,
    ParallaxTextBlockTypes,
    QuotesBlockTypes,
    TabsBlockTypes,
    TeaserBlockTypes,
    TextImageBlockTypes,
    VideoFullScreenBlockTypes,
} from './ContentBlocksTypes'

export type ContentBlocksProps = {
    contentBlocks: ({ _key: string } & (
        | ParallaxTextBlockTypes
        | QuotesBlockTypes
        | ImageFullScreenBlockTypes
        | TextImageBlockTypes
        | VideoFullScreenBlockTypes
        | JourneyBlockTypes
        | GalleryBlockTypes
        | TeaserBlockTypes
        | AccordionBlockTypes
        | TabsBlockTypes
    ))[]
    isTabBlock?: boolean
}

const ContentBlocks = ({
    contentBlocks,
    isTabBlock = false,
}: ContentBlocksProps) => {
    return contentBlocks
        ? contentBlocks.map(block => {
              switch (block._type) {
                  case 'parallaxText':
                      return <ParallaxText key={block._key} {...block} />
                  case 'quotes':
                      return (
                          <Quotes
                              isLocatedInTabBlock={isTabBlock}
                              key={block._key}
                              {...block}
                          />
                      )
                  case 'imageFullScreen':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <ImageFullScreen {...block} />
                          </DynamicNavigationLayout>
                      )
                  case 'textImageBlock':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <TextImageBlock
                                  isLocatedInTabBlock={isTabBlock}
                                  {...block}
                              />
                          </DynamicNavigationLayout>
                      )
                  case 'videoFullScreen':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <VideoFullScreen {...block} />
                          </DynamicNavigationLayout>
                      )

                  case 'journey':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <Journey {...block} />
                          </DynamicNavigationLayout>
                      )

                  case 'gallery':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <Gallery
                                  isLocatedInTabBlock={isTabBlock}
                                  {...block}
                              />
                          </DynamicNavigationLayout>
                      )
                  case 'teaser':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <TeasersLayout {...block} />
                          </DynamicNavigationLayout>
                      )

                  case 'accordion':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <Accordion {...block} />
                          </DynamicNavigationLayout>
                      )

                  case 'tabs':
                      return (
                          <DynamicNavigationLayout
                              key={block._key}
                              anchorNavigation={
                                  block?.anchorNavigation?.current
                              }
                          >
                              <Tabs {...block} />
                          </DynamicNavigationLayout>
                      )
              }
          })
        : null
}

export default ContentBlocks
