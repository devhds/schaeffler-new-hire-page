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
import TextBlock from '../Teasers/TextBlock'
import Accordion from '../Accordion/Accordion'
import SocialMedia from '../SocialMedia/SocialMedia'

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
            <TeasersLayout
                headline="Single Teaser"
                items={MockData.teasers.items.single}
            />
            <TeasersLayout
                headline="Double Teaser"
                items={MockData.teasers.items.double}
            />
            <ImageFullScreen image={MockData.imageFullScreen.image} />
            <TextBlock
                title={MockData.textBlock.title}
                description={MockData.textBlock.description}
                headline={MockData.textBlock.headline}
            />
            <Accordion
                title={MockData.accordion.title}
                description={MockData.accordion.description}
                items={MockData.accordion.items}
            />
            <SocialMedia
                title={MockData.socialMedia.title}
                socialMediaList={MockData.socialMedia.socialMediaList}
            />
        </main>
    )
}

export default ContentLayout
