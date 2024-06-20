import {defineField, defineType} from 'sanity'
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
      type: 'string',
      description: 'Embed iframe',
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview Image for Video',
      type: 'image',
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
