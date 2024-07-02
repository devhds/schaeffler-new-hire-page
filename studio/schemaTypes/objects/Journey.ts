import {defineField, defineType} from 'sanity'
import RichTextBlocks from '../parts/RichTextBlocks'
import {GiJourney} from 'react-icons/gi'
import AnchorNavigation from '../parts/AnchorNavigation'

const Journey = defineType({
  type: 'object',
  name: 'journey',
  title: 'Journey',
  icon: GiJourney,
  fields: [
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{type: 'journeyItem'}],
      validation: (Rule) =>
        Rule.required() &&
        Rule.custom((val: any) => {
          if (val.length <= 3) {
            return true
          } else {
            return 'Maximum 3 Elements'
          }
        }),
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      headline: 'items[0].headline',
    },
    prepare({headline}) {
      return {
        title: `Journey - ${headline}`,
      }
    },
  },
})

export const JourneyItem = defineType({
  type: 'object',
  name: 'journeyItem',
  title: 'JourneyItem',
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
      name: 'copy',
      title: 'Copy',
      type: 'array',
      of: RichTextBlocks,
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export default Journey
