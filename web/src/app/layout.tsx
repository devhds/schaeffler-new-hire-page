import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import LayoutWrapper from '../components/LayoutWrapper/LayoutWrapper'
import { LanguageContextProvider } from '../components/context/LanguageContext'
import { VideoModalProvider } from '../components/context/VideoModalContext'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Hire-Page',
    description: 'Hire Page description',
    robots: 'noindex,nofollow',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Script id="google-analytics">
                {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({"gtm.start":
          new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N74894')`}
            </Script>
            {/*<Script*/}
            {/*    src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"*/}
            {/*    type="text/javascript"*/}
            {/*    data-domain-script="019029b1-8fe3-7ccf-ba6b-c8d93e154986"*/}
            {/*    strategy="afterInteractive"*/}
            {/*/>*/}
            <Script
                src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
                type="text/javascript"
                data-domain-script="019029b1-8fe3-7ccf-ba6b-c8d93e154986-test"
            />
            <Script id="OptanonWrapper" strategy="afterInteractive"></Script>
            <body>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-N74894"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
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
