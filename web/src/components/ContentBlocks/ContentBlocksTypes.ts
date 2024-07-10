import { JourneyProps } from '../Journey/JourneyTypes'
import { GalleryProps } from '../Gallery/GalleryTypes'
import { TeasersProps } from '../Teasers/TeaserTypes'
import { AccordionProps } from '../Accordion/AccordionTypes'
import { TabsProps } from '../Tabs/TabsTypes'
import { ParallaxTextProps } from '../Text/ParallaxText'
import { QuotesProps } from '../Text/Quotes'
import { ImageFullScreenProps } from '../FullScreenTeasers/ImageFullScreen'
import { TextImageBlockProps } from '../Text/TextImageBlock'
import { VideoFullScreenProps } from '../FullScreenTeasers/VideoFullScreen'

export interface ParallaxTextBlockTypes extends ParallaxTextProps {
    _type: 'parallaxText'
}

export interface QuotesBlockTypes extends QuotesProps {
    _type: 'quotes'
}

export interface ImageFullScreenBlockTypes extends ImageFullScreenProps {
    _type: 'imageFullScreen'
}

export interface TextImageBlockTypes extends TextImageBlockProps {
    _type: 'textImageBlock'
}

export interface VideoFullScreenBlockTypes extends VideoFullScreenProps {
    _type: 'videoFullScreen'
}

export interface JourneyBlockTypes extends JourneyProps {
    _type: 'journey'
}

export interface GalleryBlockTypes extends GalleryProps {
    _type: 'gallery'
}

export interface TeaserBlockTypes extends TeasersProps {
    _type: 'teaser'
}

export interface AccordionBlockTypes extends AccordionProps {
    _type: 'accordion'
}

export interface TabsBlockTypes extends TabsProps {
    _type: 'tabs'
}
