import React from 'react'
import ParallaxText from '../Text/ParallaxText'
import Quotes from '../Text/Quotes'
import ImageFullScreen from '../FullScreenTeasers/ImageFullScreen'
import TextImageBlock from '../Text/TextImageBlock'
import VideoFullScreen from '../FullScreenTeasers/VideoFullScreen'
import Journey from '../Journey/Journey'
import Gallery from '../Gallery/Gallery'
import TeasersLayout from '../Teasers/TeasersLayout'

interface ContentBlocksTypes {
    contentBlocks: Array<any>
}

const ContentBlocks = ({ contentBlocks }: ContentBlocksTypes) => {
    return (
        <>
            {contentBlocks.map((block: any) => {
                switch (block._type) {
                    case 'parallaxText':
                        return <ParallaxText key={block._key} {...block} />
                    case 'quotes':
                        return <Quotes key={block._key} {...block} />
                    case 'imageFullScreen':
                        return <ImageFullScreen key={block._key} {...block} />
                    case 'textImageBlock':
                        return <TextImageBlock key={block._key} {...block} />
                    case 'videoFullScreen':
                        return <VideoFullScreen key={block._key} {...block} />
                    case 'journey':
                        return <Journey key={block._key} {...block} />
                    case 'gallery':
                        return <Gallery key={block._key} {...block} />
                    case 'teaser':
                        return <TeasersLayout key={block._key} {...block} />
                }
            })}
        </>
    )
}

export default ContentBlocks
