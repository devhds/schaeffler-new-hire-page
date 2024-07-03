import MarketContent from './documents/MarketContent'
import Navigation, {NavigationLinks} from './Navigation'
import Footer, {InformationLinks, SocialIcons, SupportLinks} from './Footer'
import ParallaxText from './objects/ParallaxText'
import Quotes from './objects/Quotes'
import ImageFullScreen from './objects/ImageFullscreen'
import TextImageBlock from './objects/TextImageBlock'
import VideoFullScreen from './objects/VideoFullScreen'
import Journey, {JourneyItem} from './objects/Journey'
import Gallery, {GalleryItem} from './objects/Gallery'
import Accordion, {AccordionItem} from './objects/Accordion'
import Teaser, {TeaserItem} from './objects/Teaser'
import Tabs, {TabsItem} from './objects/Tabs'

export const schemaTypes = [
  //Main schema
  MarketContent,
  //Navigation
  Navigation,
  NavigationLinks,
  //Footer
  Footer,
  SupportLinks,
  InformationLinks,
  SocialIcons,
  //Blocks
  ParallaxText,
  Quotes,
  ImageFullScreen,
  TextImageBlock,
  VideoFullScreen,
  Journey,
  JourneyItem,
  Gallery,
  GalleryItem,
  Accordion,
  AccordionItem,
  Teaser,
  TeaserItem,
  Tabs,
  TabsItem,
]
