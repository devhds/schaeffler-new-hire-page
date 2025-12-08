import { AnchorNavigation } from '@/fields/AnchorNavigation'
import { Block } from 'payload'

export const VideoFullScreen: Block = {
  slug: 'videoFullScreen',
  labels: {
    singular: 'Video Fullscreen Teaser',
    plural: 'Video Fullscreen Teasers',
  },
  interfaceName: 'VideoFullScreenTypes',
  imageURL: '/api/media/file/FullscreenVideoPreview.png',
  fields: [
    {
      name: 'copy',
      type: 'group',
      fields: [
        {
          name: 'headline',
          type: 'text',
          localized: true,
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          localized: true,
          required: false,
        },
      ],
    },
    {
      name: 'video',
      type: 'text',
      required: true,
      localized: false,
      admin: {
        description: 'Embed iframe, provide the ID of the video',
      },
    },
    {
      name: 'previewImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    AnchorNavigation,
  ],
}
