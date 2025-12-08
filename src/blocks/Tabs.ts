import { Gallery } from './Gallery'
import { Quotes } from '@/blocks/Quotes'
import { Block } from 'payload'
import { TextImage } from '@/blocks/TextImage'
import slugify from 'slugify'
import { AnchorNavigation } from '@/fields/AnchorNavigation'

export const Tabs: Block = {
  slug: 'tabs',
  labels: {
    singular: 'Tabs',
    plural: 'Tabs Blocks',
  },
  interfaceName: 'TabsTypes',
  imageURL: '/api/media/file/TabsPreview.png',
  fields: [
    {
      name: 'headline',
      type: 'text',
      localized: true,
      required: false,
      admin: {
        description: 'Optional field',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      required: false,
      admin: {
        description: 'Optional field',
      },
    },
    {
      name: 'tabsList',
      type: 'array',
      required: true,
      labels: {
        singular: 'Tab',
        plural: 'Tabs',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          unique: true,
          hooks: {
            beforeValidate: [
              ({ value, data }) => {
                if (value) return value
                if (data?.label) {
                  return slugify(data.label, { lower: true, strict: true })
                }
                return value
              },
            ],
          },
        },
        {
          name: 'tabsContent',
          type: 'blocks',
          blocks: [Quotes, TextImage, Gallery],
        },
      ],
    },
    AnchorNavigation,
  ],
}
