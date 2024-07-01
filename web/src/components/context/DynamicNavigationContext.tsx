'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

type DynamicNavigationContextProviderProps = {
    children: ReactNode
}
type DynamicNavigationContextValue = {
    currentSection: string
    updateCurrentSection: (newState: string) => void
}

const DynamicNavigationContext =
    createContext<DynamicNavigationContextValue | null>(null)

const DynamicNavigationContextProvider = ({
    children,
}: DynamicNavigationContextProviderProps) => {
    const [currentSection, setCurrentSection] = useState<string>('')

    const updateCurrentSection = (newState: string) => {
        setCurrentSection(newState)
    }

    const value: DynamicNavigationContextValue = {
        currentSection,
        updateCurrentSection,
    }

    return (
        <DynamicNavigationContext.Provider value={value}>
            {children}
        </DynamicNavigationContext.Provider>
    )
}

const useDynamicNavigationContext = () => {
    const context = useContext(DynamicNavigationContext)
    if (!context) {
        throw new Error(
            'useDynamicNavigationContext must be used within a DynamicNavigationContextProvider'
        )
    }
    return context
}

export { DynamicNavigationContextProvider, useDynamicNavigationContext }
