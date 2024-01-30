import React, { useCallback, useState } from 'react'
import { useLanguageContext } from '../context/LanguageContext'
import { IconList } from '../Icons'

interface LanguageSelectorProps {
    languages: Array<string | any>
}

const LanguageSelector = ({ languages }: LanguageSelectorProps) => {
    const { language, updateLanguage } = useLanguageContext()
    const [dropDownOpen, setDropDownOpen] = useState<boolean>(false)
    const ArrowIcon = IconList['ArrowDown']

    const handleChange = useCallback(
        (value: string) => {
            updateLanguage(value)
        },
        [updateLanguage]
    )

    return (
        <div className="relative">
            <button
                onClick={() => {
                    setDropDownOpen(!dropDownOpen)
                }}
                className="flex h-10 w-[4.375rem] items-center justify-center rounded-[20px] text-primary-green hover:bg-secondary-jade-20"
            >
                {language}
                <span>
                    <ArrowIcon />
                </span>
            </button>
            {dropDownOpen && (
                <div className="absolute -bottom-[40px] w-full">
                    <ul>
                        {languages.map(item => (
                            <li
                                onClick={() => {
                                    handleChange(item.value)
                                }}
                                key={item.value}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
