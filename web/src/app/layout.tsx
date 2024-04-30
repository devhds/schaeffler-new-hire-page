import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import LayoutWrapper from '../components/LayoutWrapper/LayoutWrapper'
import { LanguageContextProvider } from '../components/context/LanguageContext'
import { VideoModalProvider } from '../components/context/VideoModalContext'

export const metadata: Metadata = {
    title: 'Hire-Page',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <VideoModalProvider>
                    <LanguageContextProvider>
                        <LayoutWrapper />
                        {children}
                    </LanguageContextProvider>
                </VideoModalProvider>
            </body>
        </html>
    )
}
