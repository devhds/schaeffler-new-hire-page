'use server'

import React from 'react'
import VideoModal from '../../components/context/VideoModalContext'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import { MarketLanguage, SanityDataTypes } from '../clientTypes/clientTypes'
import ContentBlocks from '../../components/ContentBlocks/ContentBlocks'
import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'

interface MarketDataTypes {
    'market-language': MarketLanguage
    name?: string
}

const Page = async ({ params }: { params: MarketDataTypes }) => {
    const [market, language] = params['market-language'].split('-')

    const filePath = path.join(
        process.cwd(),
        'src',
        'app',
        'mainData',
        `query-${market}-${language}.json`
    )

    if (!fs.existsSync(filePath)) {
        return notFound()
    }

    const jsonData = fs.readFileSync(filePath, 'utf-8')

    const data: SanityDataTypes[] = JSON.parse(jsonData)
    const filteredData: SanityDataTypes = data.filter(
        item => item.slug.current === 'index'
    )[0]

    return (
        filteredData && (
            <>
                <Navigation
                    {...filteredData.navigationField}
                    isDevelopmentPage={filteredData.isDevelopmentPage}
                    languages={filteredData.languages}
                    currentLanguage={filteredData.language.toUpperCase()}
                />
                <ContentBlocks contentBlocks={filteredData.contentBlocks} />
                <VideoModal />
                <Footer
                    {...filteredData.footerField}
                    isDevelopmentPage={filteredData.isDevelopmentPage}
                />
            </>
        )
    )
}

export default Page
