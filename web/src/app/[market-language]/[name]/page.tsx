'use server'

import React from 'react'
import VideoModal from '../../../components/context/VideoModalContext'
import Navigation from '../../../components/Navigation/Navigation'
import { notFound } from 'next/navigation'
import ContentBlocks from '../../../components/ContentBlocks/ContentBlocks'
import { MarketLanguage, SanityDataTypes } from '../../clientTypes/clientTypes'
import Headlines from '../../../components/Headlines/Headlines'
import GridColumnsLayout from '../../../components/layout/GridColumnsLayout'
import Footer from '../../../components/Footer/Footer'
import path from 'path'
import fs from 'fs'

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
        item => item.slug.current === params.name
    )[0]

    return (
        filteredData && (
            <>
                <Navigation
                    {...filteredData.navigationField}
                    languages={filteredData.languages}
                    currentLanguage={filteredData.language.toUpperCase()}
                    currentMarketLanguage={`${filteredData.market}-${filteredData.language}`}
                    textContentOnly={filteredData.textContentOnly}
                    goBackButtonText={filteredData.goBackButtonText}
                />
                {filteredData.textContentOnly && filteredData.headline && (
                    <GridColumnsLayout additionalStyles="md:pt-16 lg:pt-16 xl:pt-16 ul:pt-16 sm:pt-2 sm:pb-8 xs:pb-8 md:pb-[72px] lg:pb-20 xl:pb-20 ul:pb-20 xs:pt-2 sm:px-6 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
                        <div
                            style={{
                                gridColumn: '1 / 4',
                            }}
                        >
                            <Headlines
                                element="h1"
                                text={filteredData.headline}
                                color="text-primary-soft black"
                            />
                        </div>
                    </GridColumnsLayout>
                )}
                <ContentBlocks contentBlocks={filteredData.contentBlocks} />
                <VideoModal />
                <Footer {...filteredData.footerField} />
            </>
        )
    )
}

export default Page
