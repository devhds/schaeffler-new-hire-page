import { motion } from 'framer-motion'
import React from 'react'

const Snake = ({ dashOffset = 0 }) => {
    return (
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1793.1 1933.64"
        >
            <motion.path
                fill="none"
                stroke="pink"
                strokeLinecap="round"
                strokeWidth="20px"
                d="m10,10c150.89,49.25,1141.65,380.57,1116.51,762.34-12.09,183.57-260.03,393.56-393.03,345.6-107.88-38.9-164.41-256.26-94.87-393.03,100.27-197.22,462.72-226.99,677.65-138.92,345.87,141.74,531.95,679.78,446.02,1337.64"
            />
        </svg>
    )
}

export default Snake
