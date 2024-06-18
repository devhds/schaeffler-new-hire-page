import {defineField, defineType} from 'sanity'
import {TfiLayoutAccordionList} from 'react-icons/tfi'
import {LuText} from 'react-icons/lu'
import AnchorNavigation from '../parts/AnchorNavigation'

const Accordion = defineType({
  type: 'object',
  name: 'accordion',
  title: 'Accordion Teaser',
  icon: TfiLayoutAccordionList,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Optional field',
    }),
    defineField({
      title: 'Accordion Items',
      name: 'accordionItems',
      type: 'array',
      of: [{type: 'accordionItem'}],
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Accordion - ${title}`,
      }
    },
  },
})

export const AccordionItem = defineType({
  type: 'object',
  name: 'accordionItem',
  title: 'Accordion Item',
  icon: LuText,
  fields: [
    defineField({
      title: 'Headline',
      name: 'headline',
      type: 'text',
    }),
    defineField({
      title: 'Expanded Text',
      name: 'expandedText',
      type: 'text',
    }),
    defineField({
      title: 'Disabled',
      name: 'disable',
      type: 'boolean',
      initialValue: false,
      description: 'Optional field',
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
    },
    prepare({headline}) {
      return {
        title: `Item - ${headline}`,
      }
    },
  },
})

export default Accordion
