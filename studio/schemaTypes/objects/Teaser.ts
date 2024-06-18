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
      type: 'image',
      hidden: ({parent}) => {
        return !!parent?.video
      },
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      icon: GrDocumentVideo,
      options: {
        accept: 'video/mp4, video/mpeg, video/mov',
      },
      validation: (Rule) =>
        Rule.custom(async (file, context) => {
          const {getClient} = context
          const client = getClient({apiVersion: '2022-06-24'})

          if (!file || !file.asset || !file.asset._ref) {
            return true
          }

          const assetRefId = file.asset._ref

          const assetDocument = await client.fetch(
            `*[_id == '${assetRefId}'][0]{
                        originalFilename,
                        }`,
          )
          if (!assetDocument || !assetDocument.originalFilename) {
            return 'Invalid Sanity Media file'
          }

          const assetExtension = assetDocument.originalFilename.split('.').pop().toLowerCase()

          const allowedExtensions = ['mp4', 'mpeg', 'mov']

          if (!allowedExtensions.includes(assetExtension)) {
            return 'Please select a video file. (mp4, mpeg, mov)'
          }

          return true
        }),
      hidden: ({parent}) => {
        return !!parent?.image
      },
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
