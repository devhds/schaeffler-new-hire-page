'use server'

import React from 'react'
import VideoModal from '../../components/context/VideoModalContext'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import ContentBlocks from '../../components/ContentBlocks/ContentBlocks'
import { getGlobalData } from '@/app/actions/getGlobalData'
import { Config } from '@/payload-types'

type Props = Promise<{
  language: Config['locale']
}>

const Page = async ({ params }: { params: Props }) => {
  const { language } = await params

  const mainContent = await getGlobalData(language)

  return (
    mainContent && (
      <>
        <Navigation {...mainContent.navigation} />
        <ContentBlocks contentBlocks={mainContent.home.contentBlocks} />
        <VideoModal />
        <Footer {...mainContent.footer} />
      </>
    )
  )
}

export default Page
