'use server'

import React from 'react'
import VideoModal from '../../components/context/VideoModalContext'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import { MarketLanguage, SanityDataTypes } from '../clientTypes/clientTypes'
import { notFound } from 'next/navigation'
import ContentBlocks from '../../components/ContentBlocks/ContentBlocks'
import { CURRENT_MARKET_QUERY } from '../lib/queries'
import { sanityFetch } from '../lib/client'

interface MarketDataTypes {
    'market-language': MarketLanguage
    name?: string
}

interface Params {
    slug: MarketDataTypes
}

async function getMarketData({
    slug,
}: Params): Promise<SanityDataTypes | null> {
    const [market, language] = slug['market-language'].split('-')

    const params = {
        market: market,
        language: language,
    }

    const data: SanityDataTypes = await sanityFetch({
        query: CURRENT_MARKET_QUERY,
        qParams: params,
        tags: ['marketContent'],
    })

    if (!data || !language || !market) {
        return notFound()
    }

    return data
}

const Page = async ({ params }: { params: MarketDataTypes }) => {
    const data = await getMarketData({ slug: params })
    return (
        data && (
            <>
                <Navigation
                    {...data.navigationField}
                    isDevelopmentPage={data.isDevelopmentPage}
                    languages={data.languages}
                    currentLanguage={data.language.toUpperCase()}
                />
                <ContentBlocks contentBlocks={data.contentBlocks} />
                <VideoModal />
                <Footer
                    {...data.footerField}
                    isDevelopmentPage={data.isDevelopmentPage}
                />
            </>
        )
    )
}

export default Page
