import {defineField, defineType} from 'sanity'
import {LuGalleryHorizontal} from 'react-icons/lu'
import {HiTemplate} from 'react-icons/hi'
import AnchorNavigation from '../parts/AnchorNavigation'

const Gallery = defineType({
  type: 'object',
  name: 'gallery',
  title: 'Gallery',
  icon: LuGalleryHorizontal,
  fields: [
    defineField({
      title: 'Headline',
      name: 'headline',
      type: 'string',
      description: 'Optional field',
    }),
    defineField({
      title: 'Gallery Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'galleryItem',
        },
      ],
    }),
    AnchorNavigation,
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({items}) {
      return {
        title: `Gallery - ${items.length}  ${items.length === 1 ? 'Element' : 'Elements'}`,
      }
    },
  },
})

export const GalleryItem = defineType({
  type: 'object',
  name: 'galleryItem',
  title: 'Gallery Item',
  icon: HiTemplate,
  fields: [
    defineField({
      type: 'text',
      title: 'Title',
      name: 'title',
    }),
    defineField({
      type: 'text',
      title: 'Description',
      name: 'description',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Item - ${title}`,
      }
    },
  },
})

export default Gallery
