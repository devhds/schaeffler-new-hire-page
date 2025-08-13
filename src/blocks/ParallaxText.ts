import { Block } from 'payload'
import { AnchorNavigation } from '@/fields/AnchorNavigation'

const ParallaxText: Block = {
  slug: 'parallaxText',
  interfaceName: 'ParallaxTextTypes',
  imageURL: '/api/media/file/ParallaxTextPreview.png',
  fields: [
    {
      name: 'text',
      type: 'text',
      localized: true,
      required: true,
    },
    AnchorNavigation,
  ],
}

export default ParallaxText
