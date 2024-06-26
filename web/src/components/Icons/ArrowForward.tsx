import React from 'react'

const ArrowForward = ({ color = 'currentColor' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Icons/arrow_forward_24px">
                <path
                    id="Vector"
                    d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z"
                    fill={color}
                />
            </g>
        </svg>
    )
}

export default ArrowForward
