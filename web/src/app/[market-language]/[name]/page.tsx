'use server'

import React from 'react'
import VideoModal from '../../../components/context/VideoModalContext'
import Navigation from '../../../components/Navigation/Navigation'
import { notFound } from 'next/navigation'
import ContentBlocks from '../../../components/ContentBlocks/ContentBlocks'
import { CURRENT_MARKET_WITH_SPECIFY_SLUG_QUERY } from '../../lib/queries'
import { sanityFetch } from '../../lib/client'
import { MarketLanguage, SanityDataTypes } from '../../clientTypes/clientTypes'
import Headlines from '../../../components/Headlines/Headlines'
import GridColumnsLayout from '../../../components/layout/GridColumnsLayout'
import Footer from '../../../components/Footer/Footer'

interface Slug {
    'market-language': MarketLanguage
    name: string
}

interface Params {
    params: {
        slug: Slug
    }
}

async function getMarketData({ slug }: any) {
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

const Page = async ({ params }: { params: Params['params'] }) => {
    const data = await getMarketData({ slug: params })

    return (
        data && (
            <>
                <Navigation
                    {...data.navigationField}
                    languages={data.languages}
                    currentLanguage={data.language.toUpperCase()}
                    currentMarketLanguage={`${data.market}-${data.language}`}
                    textContentOnly={data.textContentOnly}
                    goBackButtonText={data.goBackButtonText}
                />
                {data.textContentOnly && data.headline && (
                    <GridColumnsLayout additionalStyles="md:pt-16 lg:pt-16 xl:pt-16 ul:pt-16 sm:pt-2 sm:pb-8 xs:pb-8 md:pb-[72px] lg:pb-20 xl:pb-20 ul:pb-20 xs:pt-2 sm:px-6 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
                        <div
                            style={{
                                gridColumn: '1 / 4',
                            }}
                        >
                            <Headlines
                                element="h1"
                                text={data.headline}
                                color="text-primary-soft black"
                            />
                        </div>
                    </GridColumnsLayout>
                )}
                <ContentBlocks contentBlocks={data.contentBlocks} />
                <VideoModal />
                <Footer {...data.footerField} />
            </>
        )
    )
}

export default Page
