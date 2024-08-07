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
                        className={`border-l-transparent-carbon-grey-30 last:border-r-transparent-carbon-grey-30 h-screen w-full border-l-[1px] last:border-r-[1px] sm:hidden xs:hidden`}
                    ></div>
                ))}
        </div>
    )
}

export default LayoutWrapper
