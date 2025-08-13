import { Field } from 'payload'

export const internalExternalLinks: Field[] = [
  {
    name: 'internalPageLink',
    type: 'relationship',
    relationTo: 'pages',
    hasMany: false,
    admin: {
      condition: (_, siblingData) => {
        return !siblingData?.externalPageLink
      },
    },
  },
  {
    name: 'externalPageLink',
    type: 'text',
    label: 'External URL',
    admin: {
      placeholder: 'https://',
      description: 'Enter a full URL to an external page (e.g. https://example.com)',
      condition: (_, siblingData) => {
        return !siblingData?.internalPageLink
      },
    },
  },
]
