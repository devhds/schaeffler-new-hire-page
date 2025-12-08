import { getPayload } from 'payload'
import config from '@payload-config'
import { Config } from '@/payload-types'

export async function getGlobalData(lang: Config['locale']) {
  const payload = await getPayload({ config })

  const [navigation, home, footer] = await Promise.all([
    payload.findGlobal({
      slug: 'navigation',
      locale: lang,
    }),
    payload.findGlobal({
      slug: 'home',
      locale: lang,
    }),
    payload.findGlobal({
      slug: 'footer',
      locale: lang,
    }),
  ])

  return {
    navigation: navigation,
    home: home,
    footer: footer,
  }
}
