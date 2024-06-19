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
import { sanityFetch } from '../../lib/client'
import {
    SanityDataTypes,
    SanityTranslationsDataTypes,
    TranslationsTypes,
} from '../../clientTypes/clientTypes'

async function getMarketData(slug: Record<string, any>) {
    const [market, language] = slug['market-language'].split('-')

    const params = {
        market: market,
        language: language,
        slug: slug.name,
    }

    const data: SanityDataTypes = await sanityFetch({
        query: CURRENT_MARKET_WITH_SPECIFY_SLUG_QUERY,
        qParams: params,
        tags: ['marketContent'],
    })

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

    const data: SanityTranslationsDataTypes = await sanityFetch({
        query: TRANSLATIONS_QUERY,
        qParams: params,
        tags: ['marketContent'],
    })

    const updatedTranslations: TranslationsTypes[] = data.translations.map(
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
