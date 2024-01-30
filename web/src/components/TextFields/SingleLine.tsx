import React, { useCallback, useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { IconList } from '../Icons'

interface SingleLineProps {
    placeholder?: string
    label: string
    id: string
    helperText?: string
    disabled?: boolean
    handleChange: (value: string) => void
    clearButtonIconEnabled?: boolean
    leadingIcon?: boolean
}

const SingleLine = ({
    placeholder,
    label,
    id,
    helperText,
    disabled,
    handleChange,
    clearButtonIconEnabled = false,
    leadingIcon = false,
}: SingleLineProps) => {
    const [inputValue, setInputValue] = useState<string>('')
    const ClearInputIcon = IconList['Cancel']
    const SearchIcon = IconList['Search']

    const handleChangeInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setInputValue(value)
            handleChange(value)
        },
        [handleChange]
    )

    const clearInput = useCallback(() => {
        setInputValue('')
    }, [])

    return (
        <>
            <TextField
                id={id}
                label={label}
                variant="filled"
                placeholder={placeholder}
                helperText={helperText}
                color="success"
                type="text"
                disabled={disabled}
                value={inputValue}
                onChange={handleChangeInput}
                InputProps={{
                    endAdornment: (
                        <>
                            {clearButtonIconEnabled ? (
                                <InputAdornment position="end">
                                    <IconButton onClick={clearInput} edge="end">
                                        <ClearInputIcon />
                                    </IconButton>
                                </InputAdornment>
                            ) : (
                                ''
                            )}
                        </>
                    ),
                    startAdornment: (
                        <>
                            {leadingIcon ? (
                                <InputAdornment position="start">
                                    <IconButton edge="start">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            ) : (
                                ''
                            )}
                        </>
                    ),
                }}
            />
        </>
    )
}

export default SingleLine
