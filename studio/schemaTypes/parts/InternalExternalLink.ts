import {defineField} from 'sanity'

const internalExternalLink = (group = undefined) => {
  return [
    defineField({
      name: 'internalHref',
      title: 'Internal Link',
      type: 'reference',
      to: [{type: 'marketContent'}],
      options: {
        filter: ({document}) => {
          return {
            filter: 'market == $slug',
            params: {slug: document?.market},
          }
        },
      },
      group: group,
      hidden: ({parent}) => {
        return !!parent?.externalHref
      },
      validation: (Rule) =>
        Rule.required() &&
        Rule.custom((val: any, context: any) => {
          if (val === undefined && context?.parent.externalHref === undefined) {
            return 'Required Internal Link'
          } else if (context.parent.externalHref !== undefined && val === undefined) {
            return true
          }
          return true
        }),
    }),
    defineField({
      name: 'externalHref',
      title: 'External Link',
      type: 'url',
      group: group,
      description: 'Links which are starting from this letters: http, https, mailto, tel, etc.',
      hidden: ({parent}) => {
        return !!parent?.internalHref
      },
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }) &&
        Rule.custom((val: any, context: any) => {
          if (val === undefined && context?.parent.internalHref === undefined) {
            return 'Required External Link'
          } else if (context.parent.internalHref !== undefined && val === undefined) {
            return true
          }
          return true
        }),
    }),
  ]
}

export default internalExternalLink
