import {defineField, defineType} from 'sanity'
import {PiTextOutdentBold} from 'react-icons/pi'
import AnchorNavigation from '../parts/AnchorNavigation'

const ParallaxText = defineType({
  type: 'object',
  name: 'parallaxText',
  title: 'Parallax Text',
  icon: PiTextOutdentBold,
  fields: [
    defineField({
      title: 'Text',
      name: 'text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare({text}) {
      return {
        title: `Parallax Text - ${text}`,
      }
    },
  },
})

export default ParallaxText
