import React, { useCallback, useState } from 'react'
import { useLanguageContext } from '../context/LanguageContext'
import { IconList } from '../Icons'
import LabelText from '../Text/LabelText'
import { fullConfig } from '../../constants/TailwindConfig/FullTailwindConfig'

interface LanguageSelectorProps {
    languages: Array<string | any>
    darkEdition?: boolean
}

const LanguageSelector = ({
    languages,
    darkEdition = false,
}: LanguageSelectorProps) => {
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
                className={`flex h-10 items-center justify-center rounded-[20px] px-4 py-2 ${darkEdition ? 'hover:bg-primary-carbon-grey-100' : 'hover:bg-secondary-jade-20'}`}
            >
                <LabelText
                    text={language}
                    size="small"
                    color={
                        darkEdition
                            ? dropDownOpen
                                ? 'text-primary-white'
                                : 'text-primary-white'
                            : dropDownOpen
                              ? 'text-primary-green'
                              : 'text-primary-soft-black'
                    }
                />
                <span
                    style={{
                        transform: dropDownOpen
                            ? 'rotate(-180deg)'
                            : 'rotate(0)',
                    }}
                >
                    <ArrowIcon
                        color={
                            darkEdition
                                ? dropDownOpen
                                    ? fullConfig.theme.colors.primary['white']
                                    : fullConfig.theme.colors.primary['white']
                                : dropDownOpen
                                  ? fullConfig.theme.colors.primary['green']
                                  : fullConfig.theme.colors.primary[
                                        'soft-black'
                                    ]
                        }
                    />
                </span>
            </button>
            {dropDownOpen && (
                <div
                    style={{
                        boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.10)',
                    }}
                    className="absolute w-full rounded-[10px] bg-primary-white"
                >
                    <ul>
                        {languages.map(item => (
                            <li
                                className="cursor-pointer px-4 py-2.5 first:border-b first:border-transparent-carbon-gray-12"
                                onClick={() => {
                                    handleChange(item.value)
                                    setDropDownOpen(false)
                                }}
                                key={item.value}
                            >
                                <LabelText
                                    text={item.label}
                                    size="small"
                                    color="text-primary-soft-black"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default LanguageSelector
