import {defineField, defineType} from 'sanity'
import {TbQuotes} from 'react-icons/tb'
import AnchorNavigation from '../parts/AnchorNavigation'

const Quotes = defineType({
  type: 'object',
  name: 'quotes',
  title: 'Quotes',
  icon: TbQuotes,
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Author information',
      name: 'authorInfo',
      type: 'object',
      fields: [
        defineField({
          title: 'Name',
          name: 'name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Position',
          name: 'position',
          type: 'string',
          description: 'Marketing Department, Management Department, etc. (Optional field)',
        }),
      ],
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      authorName: 'authorInfo.name',
    },
    prepare({authorName}) {
      return {
        title: `Quotes - ${authorName}`,
      }
    },
  },
})

export default Quotes
