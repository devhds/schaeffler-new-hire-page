import { AnchorNavigation } from '@/fields/AnchorNavigation'
import { Block } from 'payload'

export const Gallery: Block = {
  slug: 'gallery',
  labels: {
    singular: 'Gallery',
    plural: 'Galleries',
  },
  interfaceName: 'GalleryTypes',
  imageURL: '/api/media/file/GalleryPreview.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      label: 'Headline',
      localized: true,
      admin: {
        description: 'Optional field',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Gallery Items',
      required: true,
      minRows: 2,
      labels: {
        singular: 'Gallery Item',
        plural: 'Gallery',
      },
      fields: [
        {
          name: 'title',
          type: 'textarea',
          localized: true,
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: true,
          label: 'Description',
        },
        {
          name: 'image',
          type: 'upload',
          required: true,
          relationTo: 'media',
          label: 'Image',
        },
      ],
    },
    AnchorNavigation,
  ],
}
