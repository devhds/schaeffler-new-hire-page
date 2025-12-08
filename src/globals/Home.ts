import { GlobalConfig } from 'payload'
import { metaFields } from '@/fields/Meta'
import { blocks } from '@/blocks'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  admin: {
    description: 'Main Page Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    ...metaFields,
    {
      name: 'pageName',
      type: 'text',
      required: true,
      label: 'Page Name',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'Slug',
      admin: {
        description: 'Page name which shows in URL',
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.pageName && !data?.slug) {
              return data.pageName
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
            }
            return data?.slug
          },
        ],
      },
    },
    {
      name: 'contentBlocks',
      type: 'blocks',
      required: true,
      blocks: [...blocks],
    },
  ],
}
