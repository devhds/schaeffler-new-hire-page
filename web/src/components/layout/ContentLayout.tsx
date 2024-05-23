'use client'

import React from 'react'
import Quotes from '../Text/Quotes'
import Navigation from '../Navigation/Navigation'
import ImageFullScreen from '../FullScreenTeasers/ImageFullScreen'
import { MockData } from '../../../mock/mockData'
import ParallaxText from '../Text/ParallaxText'
import TextBlock from '../Teasers/TextBlock'
import VideoFullScreen from '../FullScreenTeasers/VideoFullScreen'
import Accordion from '../Accordion/Accordion'
import TeasersLayout from '../Teasers/TeasersLayout'

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
            <TextBlock
                title={MockData.textBlock[0].title}
                headline={MockData.textBlock[0].headline}
                description={MockData.textBlock[0].description}
                className="!pb-0"
            />
            <TextBlock
                title={MockData.textBlock[1].title}
                headline={MockData.textBlock[1].headline}
                description={MockData.textBlock[1].description}
            />
            <VideoFullScreen
                media={MockData.videoFullScreen[0].media}
                headline={MockData.videoFullScreen[0].headline}
                description={MockData.videoFullScreen[0].description}
            />
            <TextBlock
                title={MockData.textBlock[2].title}
                headline={MockData.textBlock[2].headline}
                description={MockData.textBlock[2].description}
            />
            <ImageFullScreen
                image={MockData.imageFullScreen[1].image}
                copy={MockData.imageFullScreen[1].copy}
            />
            <TextBlock
                title={MockData.textBlock[3].title}
                headline={MockData.textBlock[3].headline}
                description={MockData.textBlock[3].description}
            />
            <TextBlock
                title={MockData.textBlock[2].title}
                headline={MockData.textBlock[2].headline}
                description={MockData.textBlock[2].description}
            />
            <ImageFullScreen
                image={MockData.imageFullScreen[2].image}
                copy={MockData.imageFullScreen[2].copy}
            />
            {/*<Timeline items={MockData.timeline} />*/}
            <Accordion
                title={MockData.accordion.title}
                items={MockData.accordion.items}
            />
            <TeasersLayout items={MockData.teasers.items.single} />
            <TeasersLayout
                headline="Das könnte dich auch interessieren"
                items={MockData.teasers.items.double}
            />
            {/*<SocialMedia*/}
            {/*    title={MockData.socialMedia.title}*/}
            {/*    socialMediaList={MockData.socialMedia.socialMediaList}*/}
            {/*/>*/}
        </main>
    )
}

export default ContentLayout
