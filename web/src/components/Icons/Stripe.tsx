import { motion } from 'framer-motion'
import React from 'react'
import { IconComponent } from './index'

const Stripe: React.FC<IconComponent> = ({ dashOffset }) => {
    return (
        <svg
            className="mx-auto block h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1213.9 3400"
            preserveAspectRatio="none"
        >
            <motion.path
                style={{
                    fill: 'none',
                    stroke: '#E7EFE6',
                    strokeMiterlimit: '10',
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="10"
                strokeDashoffset={dashOffset}
                strokeDasharray="6836.7 6836.7"
                d="M167.6,0c0,316.4,640.8,109,640.8,379.2c0,265.1,342.1,203.5,342.1,382.4c0,244.5-840.1,145.9-840.1,369.9
	c0,198.2,233.7,140.5,233.7,327c0,221.8-393,137-393,324.5c0,285.5,973.2,181,973.2,493.3c0,298.7-761.6,146.9-761.6,378.3
	c0,146.5,313.6,117.4,313.6,392c0,176.5,70.9,205.3,320.4,219.7c171.6,9.9,251.4,208.3,389.7,154.9"
            />
        </svg>
    )
}

export default Stripe
