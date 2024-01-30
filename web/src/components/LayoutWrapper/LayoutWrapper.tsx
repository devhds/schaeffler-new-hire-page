'use client'

import React from 'react'

const LayoutWrapper = () => {
    return (
        <div className="extra-small:px-6 small:px-8 medium:px-12 large:px-12 extra-large:px-20 ultra-large:px-28 ul:px-16 pointer-events-none fixed top-0 z-10 flex h-full w-full flex-row justify-between gap-x-4 md:px-9 lg:px-8 xl:px-16">
            {Array(3)
                .fill(null)
                .map((_, ind) => (
                    <div
                        key={ind}
                        className={`border-l-transparent-carbon-gray-12 xs:hidden last:border-r-transparent-carbon-gray-12 h-screen w-full border-l-2 last:border-r-2 sm:hidden`}
                    ></div>
                ))}
        </div>
    )
}

export default LayoutWrapper
