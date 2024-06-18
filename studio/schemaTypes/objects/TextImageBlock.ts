import {defineField, defineType} from 'sanity'
import RichTextBlocks from '../parts/RichTextBlocks'
import {RiTextBlock} from 'react-icons/ri'
import AnchorNavigation from '../parts/AnchorNavigation'

const TextImageBlock = defineType({
  type: 'object',
  name: 'textImageBlock',
  title: 'Text Image Block',
  icon: RiTextBlock,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portableText',
      title: 'Content',
      type: 'array',
      of: RichTextBlocks,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Image Content',
      name: 'imageContent',
      type: 'object',
      fields: [
        defineField({
          title: 'Image',
          name: 'image',
          type: 'image',
          description:
            'Optional field, when image selected - it will located under rich text in UI',
        }),
        defineField({
          title: 'Underline',
          name: 'underline',
          type: 'string',
          description: 'Optional field',
        }),
      ],
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Text Image Block - ${title}`,
      }
    },
  },
})

export default TextImageBlock
