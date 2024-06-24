import {defineField, defineType} from 'sanity'
import {PiDeviceTabletSpeakerBold} from 'react-icons/pi'
import {isUniqueAcrossCurrentLanguage} from '../../utils/isUniqueAcrossCurrentLanguage'
import {TfiLayoutTabMin} from 'react-icons/tfi'

const Tabs = defineType({
  type: 'object',
  name: 'tabs',
  title: 'Tabs',
  icon: TfiLayoutTabMin,
  fields: [
    defineField({
      title: 'Headline',
      name: 'headline',
      type: 'string',
      description: 'Optional field',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Optional field',
    }),
    defineField({
      title: 'Tabs List',
      name: 'tabsList',
      type: 'array',
      of: [{type: 'tabsItem'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      headline: 'headline',
      tabsElements: 'tabsList',
    },
    prepare({headline, tabsElements}) {
      return {
        title: `Tabs - ${headline ? headline : `${tabsElements.length + ' Elements'}`}`,
      }
    },
  },
})

export const TabsItem = defineType({
  type: 'object',
  name: 'tabsItem',
  title: 'Tabs Item',
  icon: PiDeviceTabletSpeakerBold,
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
    }),
    defineField({
      title: 'Value',
      name: 'value',
      type: 'slug',
      options: {
        isUnique: isUniqueAcrossCurrentLanguage,
        source: (_, {parent}: {parent: Record<string, any>}) => parent && parent.label,
      },
    }),
    defineField({
      title: 'Tabs Content',
      name: 'tabsContent',
      type: 'array',
      of: [{type: 'quotes'}, {type: 'textImageBlock'}, {type: 'gallery'}],
    }),
  ],
})

export default Tabs
