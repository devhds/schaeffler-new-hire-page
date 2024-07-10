import { IconComponent } from './index'
import React from 'react'

const PlayNavigation: React.FC<IconComponent> = ({ fill }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5/6 w-5/6"
        >
            <path
                d="M8 19V5L19 12L8 19ZM10 15.35L15.25 12L10 8.65V15.35Z"
                fill={fill}
            />
        </svg>
    )
}

export default PlayNavigation
