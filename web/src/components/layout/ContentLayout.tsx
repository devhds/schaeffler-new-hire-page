'use client'

import React from 'react'
import Quotes from '../Text/Quotes'
import ParallaxText from '../Text/ParallaxText'
import VideoFullScreen from '../FullScreenTeasers/VideoFullScreen'
import TeasersLayout from '../Teasers/TeasersLayout'
import Navigation from '../Navigation/Navigation'
import ImageFullScreen from '../FullScreenTeasers/ImageFullScreen'
import Timeline from '../Timeline/Timeline'
import { MockData } from '../../../mock/mockData'

const ContentLayout = () => {
    return (
        <main className="font-sans">
            <Navigation
                navContent={MockData.navigation.navContent}
                languages={MockData.navigation.languages}
            />
            <ParallaxText
                text={MockData.parallaxText}
                className="relative z-10 sm:my-14 md:my-30 lg:my-30 xl:my-40 xs:my-14 ul:my-40"
            />
            <Quotes
                text={MockData.quotes.text}
                author={MockData.quotes.author}
            />
            <Timeline items={MockData.timeline} />
            <VideoFullScreen
                video={MockData.videoFullScreen.video}
                headline={MockData.videoFullScreen.headline}
                description={MockData.videoFullScreen.description}
            />
            <TeasersLayout items={MockData.teasers.items.single} />
            <TeasersLayout items={MockData.teasers.items.double} />
            <ImageFullScreen image={MockData.imageFullScreen.image} />
            <TeasersLayout items={MockData.teasers.items.triple} />
        </main>
    )
}

export default ContentLayout
