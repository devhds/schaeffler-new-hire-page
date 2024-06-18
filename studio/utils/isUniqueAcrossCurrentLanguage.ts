import {SlugValidationContext} from 'sanity'

export async function isUniqueAcrossCurrentLanguage(slug: string, context: SlugValidationContext) {
  const {document, getClient} = context

  const client = getClient({apiVersion: '2022-03-07'})

  const id = document!._id.replace(/^drafts\./, '')

  const language = document!.language
  const market = document!.market

  const params = {
    published: id,
    draft: `drafts.${id}`,
    language,
    market,
    slug,
  }

  const query = `!defined(*[language == $language && market == $market && slug.current == $slug && !(_id in [$draft, $published])][0]._id)`
  const result = await client.fetch(query, params)
  return result
}
