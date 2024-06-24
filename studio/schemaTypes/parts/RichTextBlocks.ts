import {MdChecklist} from 'react-icons/md'
import {defineField} from 'sanity'
import {FaExternalLinkAlt} from 'react-icons/fa'
import {HiLink} from 'react-icons/hi2'

const RichTextBlocks = [
  {
    type: 'block',
    lists: [
      {title: 'Bullet', value: 'bullet'},
      {title: 'Numbered', value: 'number'},
      {
        title: 'Checkmark',
        value: 'checkmark',
        icon: MdChecklist,
      },
    ],
    styles: [
      {title: 'Heading 4', value: 'h4'},
      {
        title: 'Body Large',
        value: 'bodyLarge',
      },
    ],
    marks: {
      annotations: [
        defineField({
          name: 'link',
          type: 'object',
          title: 'External Link',
          icon: FaExternalLinkAlt,
          fields: [
            {
              name: 'href',
              type: 'url',
              validation: (Rule: {
                uri: (arg0: {allowRelative: boolean; scheme: string[]}) => any
              }) =>
                Rule.uri({
                  allowRelative: false,
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
            },
          ],
        }),
        defineField({
          name: 'internalLink',
          type: 'object',
          title: 'Internal Link',
          icon: HiLink,
          fields: [
            {
              name: 'reference',
              type: 'reference',
              title: 'Reference',
              to: [{type: 'marketContent'}],
              options: {
                filter: ({document}) => {
                  return {
                    filter: 'market == $slug',
                    params: {slug: document?.market},
                  }
                },
              },
            },
          ],
        }),
      ],
    },
  },
]

export default RichTextBlocks
