'use client'

import React from 'react'
import Link from 'next/link'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import Logo from '../Logo/Logo'

interface NavigationProps {
    navContent: Array<string | any>
    languages: Array<string | any>
}

const Navigation = ({ navContent, languages }: NavigationProps) => {
    return (
        <>
            <div className="sticky top-0 mb-6 flex flex-row justify-between ">
                <div className="flex flex-row gap-x-8">
                    {navContent.map(item => {
                        // const isActive = pathName.startsWith(item.href)
                        return (
                            <Link
                                className={`relative py-8 text-primary-soft-black mix-blend-difference hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:bg-primary-soft-black hover:after:content-['']`}
                                key={item.text}
                                href={item.href}
                            >
                                {item.text}
                            </Link>
                        )
                    })}
                </div>
                <div className="py-8">
                    <LanguageSelector languages={languages} />
                </div>
            </div>
            <div className="flex flex-row justify-end">
                <Logo />
            </div>
        </>
    )
}

export default Navigation
