import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useDynamicNavigationContext } from '../context/DynamicNavigationContext'

interface DynamicNavigationLayoutTypes {
    children: React.ReactNode
    anchorNavigation: string
}

const DynamicNavigationLayout = (props: DynamicNavigationLayoutTypes) => {
    const ref = useRef<HTMLDivElement>(null)
    const { updateCurrentSection } = useDynamicNavigationContext()

    useEffect(() => {
        let observerRefValue: null | HTMLDivElement = null
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (
                    entry.isIntersecting &&
                    props.anchorNavigation !== undefined
                ) {
                    updateCurrentSection(props.anchorNavigation)
                }
            })
        })

        if (ref.current) {
            observer.observe(ref.current)
            observerRefValue = ref.current
        }

        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue)
            }
        }
    }, [props.anchorNavigation, updateCurrentSection])

    return <motion.div ref={ref}>{props.children}</motion.div>
}

export default DynamicNavigationLayout
