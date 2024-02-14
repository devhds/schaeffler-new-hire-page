'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import DesktopVersion from './DesktopVersion'
import MobileVersion from './MobileVersion'

const Navigation = ({ ...props }: NavigationProps) => {
    const [currentNavigation, setCurrentNavigation] = useState<string>('')
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (window !== undefined) {
            setCurrentNavigation(window.location.hash)
        }
    }, [currentNavigation, pathname, searchParams, setCurrentNavigation])

    useEffect(() => {
        if (currentNavigation !== '') {
            const element = document.getElementById(currentNavigation)
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                })
            }
        }
    }, [currentNavigation])

    return (
        <>
            <DesktopVersion {...props} currentNavigation={currentNavigation} />
            <MobileVersion {...props} currentNavigation={currentNavigation} />
        </>
    )
}

export default Navigation
