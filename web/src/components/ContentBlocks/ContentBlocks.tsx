'use client'

import React, { useEffect, useState } from 'react'
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

interface ContentBlocksTypes {
    contentBlocks: Array<any>
    isTabBlock?: boolean
}

const ContentBlocks = ({
    contentBlocks,
    isTabBlock = false,
}: ContentBlocksTypes) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return contentBlocks && isClient
        ? contentBlocks.map((block: any) => {
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
                      return <ImageFullScreen key={block._key} {...block} />
                  case 'textImageBlock':
                      return (
                          <TextImageBlock
                              isLocatedInTabBlock={isTabBlock}
                              key={block._key}
                              {...block}
                          />
                      )
                  case 'videoFullScreen':
                      return <VideoFullScreen key={block._key} {...block} />
                  case 'journey':
                      return <Journey key={block._key} {...block} />
                  case 'gallery':
                      return (
                          <Gallery
                              isLocatedInTabBlock={isTabBlock}
                              key={block._key}
                              {...block}
                          />
                      )
                  case 'teaser':
                      return <TeasersLayout key={block._key} {...block} />
                  case 'accordion':
                      return <Accordion key={block._key} {...block} />
                  case 'tabs':
                      return <Tabs key={block._key} {...block} />
              }
          })
        : null
}

export default ContentBlocks
