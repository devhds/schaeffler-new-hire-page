import {defineField, defineType} from 'sanity'
import {BiBookContent} from 'react-icons/bi'
import {isUniqueAcrossCurrentLanguage} from '../../utils/isUniqueAcrossCurrentLanguage'
import {supportedLanguages} from '../../sanity.config'
import ContentBlocks from '../parts/ContentBlocks'

const MarketContent = defineType({
  type: 'document',
  name: 'marketContent',
  title: 'Market',
  icon: BiBookContent,
  groups: [
    {
      title: 'Metadata',
      name: 'metadata',
    },
    {
      title: 'Main Content',
      name: 'content',
    },
    {
      title: 'Navigation Part',
      name: 'navigationGroup',
    },
    {
      title: 'Footer Part',
      name: 'footerGroup',
    },
  ],
  fields: [
    defineField({
      name: 'pageName',
      type: 'string',
      title: 'Page Name',
      description: 'Name of the page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Page name which shows in url',
      group: 'metadata',
      options: {
        isUnique: isUniqueAcrossCurrentLanguage,
        source: (_, {parent}: {parent: Record<string, any>}) => parent && parent.pageName,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      type: 'string',
      group: 'metadata',
      title: 'Language',
      description: 'Language of the page',
      readOnly: true,
    }),
    defineField({
      name: 'textContentOnly',
      title: 'Text Content Only',
      type: 'boolean',
      initialValue: false,
      group: 'metadata',
      description: 'Default false. When true - using for pages with text content only',
    }),
    defineField({
      name: 'market',
      type: 'string',
      title: 'Market',
      group: 'metadata',
      description: 'Current Market',
      readOnly: true,
    }),
    defineField({
      name: 'goBackButtonText',
      type: 'string',
      title: 'Go Back Button',
      description: 'Text for go back button',
      hidden: ({document}) => {
        return !document?.textContentOnly
      },
    }),
    defineField({
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'Headline for text only pages',
      hidden: ({document}) => {
        return !document?.textContentOnly
      },
    }),
    defineField({
      name: 'navigationField',
      title: 'Navigation Content',
      type: 'navigation',
      group: 'navigationGroup',
      validation: (Rule) =>
        Rule.custom((file, context: any) => {
          if (context.document?.textContentOnly) {
            return true
          } else {
            return 'Required Navigation Content'
          }
        }),
      hidden: ({document}) => {
        return document?.textContentOnly
      },
    }),
    defineField({
      name: 'footerField',
      title: 'Footer Content',
      type: 'footer',
      group: 'footerGroup',
    }),
    ContentBlocks(),
  ],
  preview: {
    select: {
      title: 'pageName',
      language: 'language',
    },
    prepare: ({title, language}) => ({
      title:
        title && language
          ? title + ` ${supportedLanguages.filter((item) => item.id === language)[0].icon}`
          : 'Content',
    }),
  },
})

export default MarketContent
