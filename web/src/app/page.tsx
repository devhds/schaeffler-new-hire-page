import React from 'react'
import ContentLayout from '../components/layout/ContentLayout'
import Footer from '../components/Footer/Footer'
import { MockData } from '../../mock/mockData'
import VideoModal from '../components/context/VideoModalContext'

const Page = () => {
    return (
        <>
            <ContentLayout />
            <VideoModal />
            <Footer data={MockData.footer} />
        </>
    )
}

export default Page
