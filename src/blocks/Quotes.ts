import { Block } from 'payload'
import { AnchorNavigation } from '@/fields/AnchorNavigation'

export const Quotes: Block = {
  slug: 'quotes',
  interfaceName: 'QuotesTypes',
  labels: {
    singular: 'Quote',
    plural: 'Quotes',
  },
  imageURL: '/api/media/file/QuotePreview.png',
  fields: [
    {
      name: 'text',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'authorInfo',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          label: 'Position',
          localized: true,
          admin: {
            description: 'Marketing Department, Management Department, etc. (Optional field)',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: true,
    },
    AnchorNavigation,
  ],
}
