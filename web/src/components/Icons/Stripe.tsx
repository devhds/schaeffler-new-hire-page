import { motion } from 'framer-motion'
import React from 'react'

const Stripe = ({
    currentPoints,
    currentValue = 6241.22,
}: {
    currentPoints: number
    currentValue: number
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Nudel"
            width="1440"
            height="5000"
            viewBox="0 0 1440 5000"
        >
            <defs>
                <linearGradient
                    id="Gradient-0"
                    x1="-23.527"
                    y1="2267.13"
                    x2="27.726"
                    y2="-2185.88"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#95b7ab" />
                    <stop offset="0.5" stopColor="#b4cbc3" />
                    <stop offset="1" stopColor="#d2e0db" />
                </linearGradient>
            </defs>
            <style></style>
            <g
                id="Ebene-1-Outlines"
                transform="translate(657,2526.91) scale(0.97214,0.96106) translate(-657,-2211.5)"
            >
                <g
                    id="Group-1"
                    opacity="1"
                    transform="translate(635.55,2183.5) scale(1,1.1322)"
                >
                    <motion.path
                        id="Path-1"
                        fill="none"
                        d="M-123.55,-2232C-123.55,-2232,-102.95,-2164.5,-139.55,-2069C-165.05,-2002.5,-237.05,-1912,-260.05,-1799.5C-283.05,-1687,-240.05,-1596.9,-123.55,-1508.8C76.45,-1357.6,398.45,-1259,579.45,-1024C702.65,-864,711.45,-565.7,510.45,-417C367.95,-311.6,16.95,-319.6,-164.55,-319.6C-338.55,-319.6,-549.55,-296.4,-605.55,-119C-711.45,216.6,-322.05,391.3,-183.25,640.2C-110.05,771.5,-75.05,923.8,-100.05,1073.3C-147.05,1354,-411.05,1452.9,-461.55,1701.6C-510.05,1940.5,-303.55,2175.3,-246.55,2232"
                        stroke="url(#Gradient-0)"
                        strokeOpacity="1"
                        strokeWidth="30"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray={currentValue}
                        strokeDashoffset={currentPoints}
                    />
                </g>
            </g>
        </svg>
    )
}

export default Stripe
