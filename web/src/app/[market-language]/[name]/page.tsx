'use server'

import React from 'react'
import VideoModal from '../../../components/context/VideoModalContext'
import Footer from '../../../components/Footer/Footer'
import Navigation from '../../../components/Navigation/Navigation'
import { transformedArrayOfLanguages } from '../../lib/languages'
import { notFound } from 'next/navigation'
import ContentBlocks from '../../../components/ContentBlocks/ContentBlocks'
import {
    CURRENT_MARKET_WITH_SPECIFY_SLUG_QUERY,
    TRANSLATIONS_QUERY,
} from '../../lib/queries'
import { client } from '../../lib/client'

async function getMarketData(slug: Record<string, any>) {
    const [market, language] = slug['market-language'].split('-')

    const params = {
        market: market,
        language: language,
        slug: slug.name,
    }

    const data = await client.fetch(
        CURRENT_MARKET_WITH_SPECIFY_SLUG_QUERY,
        params,
        {
            cache: 'no-store',
        }
    )

    if (!data || !language || !market || !slug.name) {
        return notFound()
    }

    return data
}

async function getTranslations(slug: Record<string, any>) {
    const market = slug['market-language'].split('-')[0]

    const params = {
        slug: market,
    }

    const translations = await client.fetch(TRANSLATIONS_QUERY, params, {
        cache: 'no-store',
    })

    const updatedTranslations = translations.translations.map(
        (translation: any) => {
            return {
                ...translation,
                slug: `/${market}-${translation._key}/${slug.name}`,
            }
        }
    )

    return updatedTranslations
}

const Page = async ({ params }: { params: { slug: string } }) => {
    const data = await getMarketData(params)
    const translations = await getTranslations(params)

    return (
        data && (
            <>
                <Navigation
                    {...data.navigationField}
                    languages={transformedArrayOfLanguages(translations)}
                    currentLanguage={data.language.toUpperCase()}
                />
                <ContentBlocks contentBlocks={data.contentBlocks} />
                <VideoModal />
                <Footer {...data.footerField} />
            </>
        )
    )
}

export default Page
