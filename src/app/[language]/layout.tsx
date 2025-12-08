import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { VideoModalProvider } from "@/components/context/VideoModalContext";
import Script from "next/script";
import { DynamicNavigationContextProvider } from "@/components/context/DynamicNavigationContext";
import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";

export const metadata: Metadata = {
  title: "Hire-Page",
  description: "Hire Page description",
  robots: "noindex,nofollow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
      <Script
        src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
        type="text/javascript"
        strategy="afterInteractive"
        data-domain-script={process.env.NEXT_PUBLIC_COOKIES_SCRIPT}
      />
      <Script id="OptanonWrapper" strategy="afterInteractive"></Script>
      <Script
        id="movingimagesEmbed"
        src="//e-mi.schaeffler-cdn.com/v2/embed.js"
      ></Script>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N74894"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <DynamicNavigationContextProvider>
          <VideoModalProvider>
            <LayoutWrapper />
            {children}
          </VideoModalProvider>
        </DynamicNavigationContextProvider>
      </body>
    </html>
  );
}
