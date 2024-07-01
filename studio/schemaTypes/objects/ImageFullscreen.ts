import {defineField, defineType} from 'sanity'
import {IoImageOutline} from 'react-icons/io5'
import AnchorNavigation from '../parts/AnchorNavigation'

const ImageFullScreen = defineType({
  type: 'object',
  name: 'imageFullScreen',
  title: 'Image Fullscreen Teaser',
  icon: IoImageOutline,
  fields: [
    defineField({
      title: 'Copy',
      name: 'copy',
      type: 'object',
      fields: [
        defineField({
          title: 'Headline',
          name: 'headline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Description',
          name: 'description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          title: 'Underline',
          name: 'underline',
          type: 'string',
          description: 'Optional field',
        }),
      ],
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      text: 'copy.headline',
    },
    prepare({text}) {
      return {
        title: `Image Fullscreen Teaser - ${text}`,
      }
    },
  },
})

export default ImageFullScreen
