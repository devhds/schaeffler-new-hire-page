export type MarketConfigTypes = {
  id: string
  title: string
  flag: string
  acceptedLanguages: string[]
}

export const MarketConfig: MarketConfigTypes[] = [
  {
    id: 'inh',
    title: 'Development',
    flag: '@',
    acceptedLanguages: ['de', 'en'],
  },
  {
    id: 'fr',
    title: 'France',
    flag: '🇫🇷',
    acceptedLanguages: ['fr', 'en'],
  },
  {
    id: 'lu',
    title: 'Luxembourg',
    flag: '🇱🇺',
    acceptedLanguages: ['fr', 'en'],
  },
  {
    id: 'de',
    title: 'Deutschland',
    flag: '🇩🇪',
    acceptedLanguages: ['de', 'en'],
  },
  {
    id: 'it',
    title: 'Italy',
    flag: '🇮🇹',
    acceptedLanguages: ['it', 'en'],
  },
  {
    id: 'es',
    title: 'Spain',
    flag: '🇪🇸',
    acceptedLanguages: ['es', 'en'],
  },
  {
    id: 'pl',
    title: 'Poland',
    flag: '🇵🇱',
    acceptedLanguages: ['pl', 'en'],
  },
  {
    id: 'br',
    title: 'Brazil',
    flag: '🇧🇷',
    acceptedLanguages: ['br', 'en'],
  },
  {
    id: 'kr',
    title: 'Korea',
    flag: '🇰🇷',
    acceptedLanguages: ['ko', 'en'],
  },
  {
    id: 'my',
    title: 'Malaysia',
    flag: '🇲🇾',
    acceptedLanguages: ['en'],
  },
  {
    id: 'in',
    title: 'India',
    flag: '🇮🇳',
    acceptedLanguages: ['en'],
  },
]
