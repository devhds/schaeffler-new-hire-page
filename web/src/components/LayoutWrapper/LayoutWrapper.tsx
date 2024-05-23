'use client'

import React from 'react'

const LayoutWrapper = () => {
    return (
        <div className="pointer-events-none fixed top-0 z-30 flex h-full w-full flex-row justify-between md:px-9 lg:px-8 xl:px-16 ul:px-16">
            {Array(3)
                .fill(null)
                .map((_, ind) => (
                    <div
                        key={ind}
                        className={`h-screen w-full border-l-[1px] border-l-transparent-carbon-gray-12 last:border-r-[1px] last:border-r-transparent-carbon-gray-12 sm:hidden xs:hidden`}
                    ></div>
                ))}
        </div>
    )
}

export default LayoutWrapper
