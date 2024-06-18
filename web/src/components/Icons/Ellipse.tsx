import { IconComponent } from './index'
import React from 'react'

const Ellipse: React.FC<IconComponent> = ({ currentVideoTime }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
        >
            <circle
                r="20"
                cx="21"
                cy="21"
                fill="transparent"
                stroke="#FFFFFF"
                strokeDasharray="125.6"
                strokeDashoffset={currentVideoTime}
            ></circle>
            <circle
                r="20"
                cx="21"
                cy="21"
                fill="transparent"
                stroke="rgba(255,255,255,0.2)"
                strokeDasharray="125.6"
            ></circle>
        </svg>
    )
}

export default Ellipse
