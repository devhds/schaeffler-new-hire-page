'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react'

type LanguageContextProviderProps = {
    children: ReactNode
}
type LanguageContextValue = {
    language: string
    updateLanguage: (newState: string) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const LanguageContextProvider = ({
    children,
}: LanguageContextProviderProps) => {
    const [language, setLanguage] = useState<string>('')

    const updateLanguage = (newState: string) => {
        setLanguage(newState)
    }

    const value: LanguageContextValue = {
        language,
        updateLanguage,
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

const useLanguageContext = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error(
            'useLanguageContext must be used within a LanguageContextProvider'
        )
    }
    return context
}

export { LanguageContextProvider, useLanguageContext }
