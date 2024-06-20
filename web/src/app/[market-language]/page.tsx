'use server'

import React from 'react'
import VideoModal from '../../components/context/VideoModalContext'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import { SanityDataTypes } from '../clientTypes/clientTypes'
import { notFound } from 'next/navigation'
import ContentBlocks from '../../components/ContentBlocks/ContentBlocks'
import { CURRENT_MARKET_QUERY } from '../lib/queries'
import { sanityFetch } from '../lib/client'

async function getMarketData(slug: Record<string, any>) {
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

const Page = async ({ params }: { params: { slug: string } }) => {
    const data = await getMarketData(params)

    return (
        data && (
            <>
                <Navigation
                    {...data.navigationField}
                    languages={data.languages}
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
