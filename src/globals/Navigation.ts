import { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  fields: [
    {
      name: 'navigationLinks',
      label: 'Links',
      type: 'array',
      maxRows: 7,
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          label: 'Anchor Tag',
          admin: {
            description: 'Anchor tag to navigate through page',
          },
        },
      ],
    },
    {
      name: 'copy',
      type: 'group',
      label: 'Copy',
      fields: [
        {
          name: 'promotionText',
          localized: true,
          type: 'text',
        },
        {
          name: 'underline',
          localized: true,
          type: 'text',
        },
      ],
    },
    {
      name: 'video',
      type: 'upload',
      label: 'Video',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Only mp4, mpeg, or mov videos allowed',
      },
    },
  ],
}
