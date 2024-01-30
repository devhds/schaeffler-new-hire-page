import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import LayoutWrapper from '../components/LayoutWrapper/LayoutWrapper'
import { LanguageContextProvider } from '../components/context/LanguageContext'

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
                <LanguageContextProvider>
                    <LayoutWrapper />
                    {children}
                </LanguageContextProvider>
            </body>
        </html>
    )
}
