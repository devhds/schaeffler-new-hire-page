'use client'

import React from 'react'
import Quotes from '../Text/Quotes'
import Navigation from '../Navigation/Navigation'
import ImageFullScreen from '../FullScreenTeasers/ImageFullScreen'
import { MockData } from '../../../mock/mockData'
import ParallaxText from '../Text/ParallaxText'
import TextImageBlock from '../Text/TextImageBlock'
import VideoFullScreen from '../FullScreenTeasers/VideoFullScreen'
import Accordion from '../Accordion/Accordion'
import TeasersLayout from '../Teasers/TeasersLayout'
import Journey from '../Journey/Journey'
import Gallery from '../Gallery/Gallery'

const ContentLayout = () => {
    return (
        <main className="font-sans">
            <Navigation
                navContent={MockData.navigation.navContent}
                languages={MockData.navigation.languages}
                copy={MockData.navigation.copy}
                video={MockData.navigation.video}
            />
            <ParallaxText
                text={MockData.parallaxText}
                className="relative z-10 sm:my-14 md:my-30 lg:my-30 xl:my-40 xs:my-14 ul:my-40"
            />
            <Quotes
                image={MockData.quotes[0].image}
                text={MockData.quotes[0].text}
                author={MockData.quotes[0].author}
            />
            <ImageFullScreen
                image={MockData.imageFullScreen[0].image}
                copy={MockData.imageFullScreen[0].copy}
            />
            <TextImageBlock
                title={MockData.textBlock[0].title}
                headline={MockData.textBlock[0].headline}
                description={MockData.textBlock[0].description}
                className="!pb-0"
            />
            <TextImageBlock
                title={MockData.textBlock[1].title}
                headline={MockData.textBlock[1].headline}
                description={MockData.textBlock[1].description}
            />
            <VideoFullScreen
                media={MockData.videoFullScreen[0].media}
                headline={MockData.videoFullScreen[0].headline}
                description={MockData.videoFullScreen[0].description}
            />
            <TextImageBlock
                title={MockData.textBlock[2].title}
                headline={MockData.textBlock[2].headline}
                description={MockData.textBlock[2].description}
                imageContent={MockData.textBlock[2].imageContent}
            />
            <ImageFullScreen
                image={MockData.imageFullScreen[2].image}
                copy={MockData.imageFullScreen[2].copy}
                classNames="!pb-0"
            />
            <Journey journeyData={MockData.journey} />
            <TextImageBlock
                title={MockData.textBlock[3].title}
                headline={MockData.textBlock[3].headline}
                description={MockData.textBlock[3].description}
                imageContent={MockData.textBlock[3].imageContent}
            />
            <ImageFullScreen
                image={MockData.imageFullScreen[1].image}
                copy={MockData.imageFullScreen[1].copy}
            />
            <Quotes
                image={MockData.quotes[1].image}
                text={MockData.quotes[1].text}
                author={MockData.quotes[1].author}
            />

            <Gallery
                gallery={MockData.gallery.gallery}
                headline={MockData.gallery.headline}
            />

            <TextImageBlock
                title={MockData.textBlock[4].title}
                headline={MockData.textBlock[4].headline}
                description={MockData.textBlock[4].description}
                imageContent={MockData.textBlock[4].imageContent}
            />
            <Accordion
                title={MockData.accordion.title}
                items={MockData.accordion.items}
            />
            <TeasersLayout items={MockData.teasers.items.single} />
            <TeasersLayout
                headline="Das könnte dich auch interessieren"
                items={MockData.teasers.items.double}
            />
        </main>
    )
}

export default ContentLayout
