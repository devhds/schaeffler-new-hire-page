import {defineField, defineType} from 'sanity'
import {GrDocumentVideo} from 'react-icons/gr'
import {GoVideo} from 'react-icons/go'
import AnchorNavigation from '../parts/AnchorNavigation'

const VideoFullScreen = defineType({
  type: 'object',
  name: 'videoFullScreen',
  title: 'Video Fullscreen Teaser',
  icon: GoVideo,
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
          description: 'Optional Field',
        }),
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
    AnchorNavigation,
  ],
  preview: {
    select: {
      text: 'copy.headline',
    },
    prepare({text}) {
      return {
        title: `Video Fullscreen Teaser - ${text}`,
      }
    },
  },
})

export default VideoFullScreen
