import { AnchorNavigation } from '@/fields/AnchorNavigation'
import { Block } from 'payload'

export const ImageFullScreen: Block = {
  slug: 'imageFullScreen',
  labels: {
    singular: 'Image Fullscreen Teaser',
    plural: 'Image Fullscreen Teasers',
  },
  interfaceName: 'ImageFullScreenTypes',
  imageURL: '/api/media/file/FullscreenImagePreview.png',
  fields: [
    {
      name: 'copy',
      type: 'group',
      label: 'Copy',
      fields: [
        {
          name: 'headline',
          type: 'text',
          label: 'Headline',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          localized: true,
          required: true,
        },
        {
          name: 'underline',
          type: 'text',
          label: 'Underline',
          localized: true,
          admin: {
            description: 'Optional field',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    AnchorNavigation,
  ],
}
