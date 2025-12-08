import { Block } from 'payload'
import { AnchorNavigation } from '@/fields/AnchorNavigation'

export const Journey: Block = {
  slug: 'journey',
  labels: {
    singular: 'Journey',
    plural: 'Journeys',
  },
  interfaceName: 'JourneyTypes',
  imageURL: '/api/media/file/JourneyPreview.png',
  fields: [
    {
      name: 'items',
      type: 'array',
      label: 'Items',
      minRows: 1,
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'headline',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          required: true,
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'copy',
          localized: true,
          type: 'richText',
          required: true,
        },
      ],
    },
    AnchorNavigation,
  ],
}
