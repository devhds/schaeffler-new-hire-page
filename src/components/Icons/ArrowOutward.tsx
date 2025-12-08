import React from 'react'

const ArrowOutward = ({ color = 'currentColor' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5/6 w-5/6 sm:h-auto sm:w-auto md:h-auto md:w-auto lg:h-auto lg:w-auto xs:h-auto xs:w-auto"
        >
            <g id="Icons/arrow_outward_24px">
                <path
                    id="Vector"
                    d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                    fill={color}
                />
            </g>
        </svg>
    )
}

export default ArrowOutward
