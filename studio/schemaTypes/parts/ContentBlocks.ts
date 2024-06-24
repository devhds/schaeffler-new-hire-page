import {defineField} from 'sanity'

const ContentBlocks = () => {
  return defineField({
    title: 'Content Blocks',
    name: 'contentBlocks',
    type: 'array',
    group: 'content',
    of: [
      {type: 'parallaxText'},
      {type: 'quotes'},
      {type: 'imageFullScreen'},
      {type: 'textImageBlock'},
      {type: 'videoFullScreen'},
      {type: 'journey'},
      {type: 'gallery'},
      {type: 'accordion'},
      {type: 'teaser'},
      {type: 'tabs'},
    ],
  })
}

export default ContentBlocks
