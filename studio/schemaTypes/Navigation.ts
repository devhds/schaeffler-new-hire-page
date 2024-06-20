import {defineField, defineType} from 'sanity'
import {PiLinkSimpleBold} from 'react-icons/pi'
import {GrDocumentVideo} from 'react-icons/gr'

const Navigation = defineType({
  type: 'object',
  name: 'navigation',
  title: 'Navigation Content',
  fields: [
    defineField({
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{type: 'items'}],
      validation: (Rule) =>
        Rule.required() &&
        Rule.custom((val: any) => {
          if (val === undefined) {
            return true
          } else if (val.length <= 7) {
            return true
          } else {
            return 'Maximum 7 Elements'
          }
        }),
    }),
    defineField({
      name: 'copy',
      title: 'Copy',
      type: 'object',
      fields: [
        {type: 'string', name: 'promotionText', title: 'Promotion Text'},
        {type: 'string', name: 'underline', title: 'Underline text'},
      ],
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
    }),
  ],
})

export const NavigationLinks = defineType({
  type: 'object',
  name: 'items',
  title: 'Navigation Links',
  icon: PiLinkSimpleBold,
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Anchor Tag',
      description: 'Anchor tag to navigate through page',
      options: {
        source: (_, {parent}: {parent: Record<string, any>}) => parent && parent.title,
      },
    }),
  ],
})

export default Navigation
