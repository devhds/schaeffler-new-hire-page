import React from 'react'

interface DisplayTextProps {
    text: string
    size: 'large' | 'normal'
    color: string
    className?: string
    upperCase?: boolean
}

const DisplayText = ({
    text,
    color,
    size,
    className = '',
    upperCase = false,
}: DisplayTextProps) => {
    const displayTextStyles = {
        large: 'xs:text-display-large-xs sm:text-display-large-sm md:text-display-large-md lg:text-display-large-lg xl:text-display-large-xl ul:text-display-large-ul',
        normal: 'xs:text-display-normal-xs sm:text-display-normal-sm md:text-display-normal-md lg:text-display-normal-lg xl:text-display-normal-xl ul:text-display-normal-ul',
    }

    return (
        <p
            className={`${color} ${displayTextStyles[size]} ${upperCase && 'uppercase'} ${className} font-black`}
        >
            {text}
        </p>
    )
}

export default DisplayText
