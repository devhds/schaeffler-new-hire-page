'use client'

import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext(null)

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('DE')

    const updateLanguage = (newState: string) => {
        setLanguage(newState)
    }

    return (
        <LanguageContext.Provider value={{ language, updateLanguage }}>
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
