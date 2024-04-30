import React from 'react'

const Menu = ({ color = 'currentColor' }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Icons/menu_24px">
                <path
                    id="Vector"
                    d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                    fill={color}
                />
            </g>
        </svg>
    )
}

export default Menu
