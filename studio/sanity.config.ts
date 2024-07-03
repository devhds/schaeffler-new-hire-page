import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import structure from './structure'
import {media} from 'sanity-plugin-media'
import {documentInternationalization} from '@sanity/document-internationalization'
import {copyPastePlugin} from '@superside-oss/sanity-plugin-copy-paste'

export const supportedLanguages = [
  {id: 'de', title: 'German', icon: '🇩🇪'},
  {id: 'en', title: 'English', icon: '🇬🇧'},
  {id: 'fr', title: 'French', icon: '🇫🇷'},
  {id: 'it', title: 'Italian', icon: '🇮🇹'},
  {id: 'es', title: 'Spanish', icon: '🇪🇸'},
  {id: 'pl', title: 'Polish', icon: '🇵🇱'},
  {id: 'in', title: 'Indian', icon: '🇮🇳'},
  {id: 'ko', title: 'Korean', icon: '🇰🇷'},
  {id: 'br', title: 'Brazilian', icon: '🇧🇷'},
]

export default defineConfig({
  name: 'default',
  title: 'Schaeffler New Hire Page Development',

  projectId: '1mrwp9a5',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    copyPastePlugin(),
    visionTool(),
    documentInternationalization({
      supportedLanguages,
      schemaTypes: ['marketContent'],
      metadataFields: [
        defineField({
          name: 'slug',
          type: 'slug',
          description: 'In which market these translations belong',
        }),
      ],
    }),
    media(),
  ],

  schema: {
    types: schemaTypes,
    templates: [
      {
        title: 'Market',
        id: 'currentMarket',
        schemaType: 'marketContent',
        parameters: [
          {name: 'language', type: 'string'},
          {name: 'market', type: 'string'},
        ],
        value: (params: any) => {
          return {
            language: params.language,
            market: params.market,
          }
        },
      },
    ],
  },
})
