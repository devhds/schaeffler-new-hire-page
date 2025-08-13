import { Block } from 'payload'
import { AnchorNavigation } from '@/fields/AnchorNavigation'
import { internalExternalLinks } from '@/parts/internalExternalLinks'

export const Teaser: Block = {
  slug: 'teaser',
  labels: {
    singular: 'Teaser',
    plural: 'Teasers',
  },
  interfaceName: 'TeaserTypes',
  imageURL: '/api/media/file/TeaserPreview.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      localized: true,
    },
    {
      name: 'teaserItems',
      type: 'array',
      required: true,
      minRows: 3,
      maxRows: 7,
      fields: [
        {
          name: 'overline',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          admin: {
            condition: (_, siblingData) => {
              return !siblingData?.video
            },
          },
        },
        {
          name: 'video',
          type: 'upload',
          relationTo: 'media',
          label: 'Video',
          admin: {
            condition: (_, siblingData) => {
              return !siblingData?.image
            },
          },
        },
        ...internalExternalLinks,
      ],
    },
    AnchorNavigation,
  ],
}
