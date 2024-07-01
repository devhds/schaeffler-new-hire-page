import {defineField, defineType} from 'sanity'
import {GrDocumentVideo, GrTextWrap} from 'react-icons/gr'
import internalExternalLink from '../parts/InternalExternalLink'
import {RiContactsBook2Line} from 'react-icons/ri'
import AnchorNavigation from '../parts/AnchorNavigation'

const Teaser = defineType({
  type: 'object',
  name: 'teaser',
  title: 'Teaser',
  icon: GrTextWrap,
  fields: [
    defineField({
      title: 'Headline',
      name: 'headline',
      type: 'string',
    }),
    defineField({
      title: 'Teaser Items',
      name: 'teaserItems',
      type: 'array',
      of: [{type: 'teaserItem'}],
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      headline: 'headline',
    },
    prepare({headline}) {
      return {
        title: `${headline ? `Teaser - ${headline}` : 'Teaser'}`,
      }
    },
  },
})

export const TeaserItem = defineType({
  type: 'object',
  name: 'teaserItem',
  title: 'Teaser Item',
  icon: RiContactsBook2Line,
  fields: [
    defineField({
      title: 'Overline',
      name: 'overline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Text',
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'string',
      hidden: ({parent}) => {
        return !!parent?.video
      },
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'url',
      icon: GrDocumentVideo,
    }),
    ...internalExternalLink(),
  ],
  preview: {
    select: {
      overline: 'overline',
    },
    prepare({overline}) {
      return {
        title: `Item - ${overline}`,
      }
    },
  },
})

export default Teaser
