import { Block } from 'payload'
import { AnchorNavigation } from '@/fields/AnchorNavigation'

export const Accordion: Block = {
  slug: 'accordion',
  labels: {
    singular: 'Accordion Teaser',
    plural: 'Accordion Teasers',
  },
  imageURL: '/api/media/file/AccordionTeaserPreview.png',
  interfaceName: 'AccordionTypes',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      localized: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      localized: true,
      admin: {
        description: 'Optional field',
      },
    },
    {
      name: 'accordionItems',
      type: 'array',
      label: 'Accordion Items',
      labels: {
        singular: 'Item',
        plural: 'Items',
      },
      minRows: 1,
      fields: [
        {
          name: 'headline',
          type: 'text',
          label: 'Headline',
          required: true,
          localized: true,
        },
        {
          name: 'expandedText',
          type: 'richText',
          label: 'Expanded Text',
          localized: true,
          required: true,
        },
        {
          name: 'disable',
          type: 'checkbox',
          label: 'Disabled',
          defaultValue: false,
          admin: {
            description: 'Optional field',
          },
        },
      ],
    },
    AnchorNavigation,
  ],
}
