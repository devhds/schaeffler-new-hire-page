import React from 'react'

const Play = ({ colorCircle = '#fff', colorPlay = '#2C2C2C' }) => {
    return (
        <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="play">
                <circle
                    id="Ellipse 28"
                    cx="60"
                    cy="60"
                    r="60"
                    fill={colorCircle}
                />
                <path
                    id="Vector"
                    d="M68.6597 61.4959L52.7557 71.6525C52.1783 72.0724 51.5747 72.1118 50.9448 71.7706C50.3149 71.4294 50 70.8914 50 70.1566V49.8434C50 49.1086 50.3149 48.5706 50.9448 48.2294C51.5747 47.8882 52.1783 47.9276 52.7557 48.3475L68.6597 58.5041C69.2371 58.8715 69.5258 59.3701 69.5258 60C69.5258 60.6299 69.2371 61.1285 68.6597 61.4959Z"
                    fill={colorPlay}
                />
            </g>
        </svg>
    )
}

export default Play
