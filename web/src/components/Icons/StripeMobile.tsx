import { motion } from 'framer-motion'
import React from 'react'
import { IconComponent } from './index'

const StripeMobile: React.FC<IconComponent> = ({ dashOffset }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 550 6800"
            className="mx-auto block h-full w-full"
            preserveAspectRatio="none"
        >
            <motion.path
                style={{
                    fill: 'none',
                    stroke: '#A7C3B9',
                    strokeMiterlimit: '10',
                }}
                strokeWidth="10"
                strokeDasharray="7839 7839"
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M62.4,0c4.3,355.5,161.3,282.6,161.3,478.2c0,248.6,233.9,343.2,233.9,541.9c0,170.3-82.4,225.9-82.4,408.1
	c0,186.8,205.3,316.2,205.3,458.5c0,322.7-446.9,256.3-446.9,617.2c0,214.9,206.6,252.5,206.6,462.3c0,276-169,454.1-169,623.4
	c0,372.9,359.7,262.2,359.7,553.2c0,130.7-229.5,248.6-169.5,461.1c84.6,299.5-232.5,289.6-232.5,625.3
	c0,216.1,192.9,242.3,192.9,452c0,266.9-127.4,373.1-127.4,588.6c0,470.7,466.1,418.8,466.1,576.8"
            />
        </svg>
    )
}

export default StripeMobile
