import {defineField, defineType} from 'sanity'
import {BiSupport} from 'react-icons/bi'
import {SiSocialblade} from 'react-icons/si'

import {MdOutlinePrivacyTip} from 'react-icons/md'
import internalExternalLink from './parts/InternalExternalLink'
import {Icons} from '../icons/icons'

const Footer = defineType({
  type: 'object',
  name: 'footer',
  title: 'Footer Content',
  fields: [
    defineField({
      type: 'string',
      name: 'parallaxText',
      title: 'Parallax Text',
    }),
    defineField({
      type: 'array',
      name: 'supportFields',
      title: 'Support Links',
      of: [
        {
          type: 'supportLink',
        },
      ],
      validation: (Rule) =>
        Rule.required() &&
        Rule.custom((val: any) => {
          if (val === undefined) {
            return 'Required Support Links'
          } else if (val.length <= 4) {
            return true
          } else {
            return 'Maximum 4 Elements'
          }
        }),
    }),
    defineField({
      type: 'array',
      name: 'infoFields',
      title: 'Information Links',
      description: 'policies, cookie, etc.',
      of: [
        {
          type: 'infoLink',
        },
      ],
      validation: (Rule) =>
        Rule.required() &&
        Rule.custom((val: any) => {
          if (val === undefined) {
            return 'Required Info Links'
          } else if (val.length <= 5) {
            return true
          } else {
            return 'Maximum 5 Elements'
          }
        }),
    }),
    defineField({
      type: 'array',
      name: 'socialIconsFields',
      title: 'Social Icons',
      of: [
        {
          type: 'socialIcon',
        },
      ],
      validation: (Rule) =>
        Rule.required() &&
        Rule.custom((val: any) => {
          if (val === undefined) {
            return 'Required Social Icons'
          } else if (val.length <= 6) {
            return true
          } else {
            return 'Maximum 6 Elements'
          }
        }),
    }),
  ],
})

export const SupportLinks = defineType({
  type: 'object',
  name: 'supportLink',
  title: 'Link',
  icon: BiSupport,
  fields: [
    defineField({
      type: 'string',
      title: 'Text',
      name: 'supportText',
    }),
    ...internalExternalLink(),
  ],
})

export const InformationLinks = defineType({
  type: 'object',
  name: 'infoLink',
  title: 'Link',
  icon: MdOutlinePrivacyTip,
  fields: [
    defineField({
      type: 'string',
      title: 'Text',
      name: 'infoText',
    }),
    ...internalExternalLink(),
  ],
})

export const SocialIcons = defineType({
  type: 'object',
  name: 'socialIcon',
  title: 'Social Icon',
  icon: SiSocialblade,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: Icons,
      },
    }),
    ...internalExternalLink(),
  ],
})

export default Footer
