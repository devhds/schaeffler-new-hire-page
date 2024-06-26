'use client'

import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from './useMediaQuery'

export const useStickyContainer = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false)
    const elementRef = useRef<HTMLDivElement | null>(null)
    const mediaQuery = useMediaQuery()

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const headerHeight = getComputedStyle(
                    document.documentElement
                ).getPropertyValue(
                    mediaQuery.xs || mediaQuery.sm
                        ? '--headerHeightMobile'
                        : '--headerHeight'
                )
                const headerHeightNum = parseFloat(headerHeight)
                setIsSticky(
                    window.scrollY +
                        headerHeightNum +
                        elementRef.current.getBoundingClientRect().height >=
                        elementRef.current.offsetTop
                )
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [mediaQuery])

    const legacyRef = (node: HTMLDivElement | null) => {
        if (node) {
            elementRef.current = node
        }
    }

    return [isSticky, legacyRef] as const
}
