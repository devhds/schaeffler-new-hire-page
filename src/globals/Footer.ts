import { GlobalConfig } from 'payload'
import { internalExternalLinks } from '@/parts/internalExternalLinks'

export const Icons = [
  { label: 'Facebook', value: 'facebook' },
  { label: 'Instagram', value: 'instagram' },
  { label: 'Twitter', value: 'twitter' },
  { label: 'Linkedin', value: 'linkedin' },
  { label: 'Wechat', value: 'wechat' },
  { label: 'Weibo', value: 'weibo' },
  { label: 'WhatsApp', value: 'whatsapp' },
  { label: 'Xing', value: 'xing' },
  { label: 'YouTube', value: 'youtube' },
]

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'parallaxText',
      type: 'text',
      localized: true,
      required: true,
      label: 'Parallax Text',
    },
    {
      name: 'infoFields',
      type: 'array',
      label: 'Information Links',
      maxRows: 5,
      required: true,
      admin: {
        description: 'Policies, cookie, etc.',
      },
      fields: [
        {
          name: 'infoText',
          localized: true,
          type: 'text',
          label: 'Text',
        },
        ...internalExternalLinks,
      ],
    },
    {
      name: 'socialIconsFields',
      type: 'array',
      label: 'Social Icons',
      maxRows: 6,
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: Icons.map((icon) => ({
            label: icon.label,
            value: icon.value,
          })),
        },
        ...internalExternalLinks,
      ],
    },
  ],
}
