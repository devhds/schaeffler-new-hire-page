import { motion } from 'framer-motion'
import React from 'react'
import { IconComponent } from './index'

const Stripe: React.FC<IconComponent> = ({ dashOffset }) => {
    return (
        <svg
            className="mx-auto block h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1213 3400"
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
                strokeDasharray="7783 7783"
                d="M167.6,0c0,316.4,640.8,109,640.8,379.2c0,265.1,342.1,170,342.1,382.4c0,244.5-841.5-85.3-841.5,288.9
	c0,198.2,249.4,293.4,249.4,479.9c0,221.8-495.2,55.5-495.2,243c0,238.4,1081.7-61.5,1081.7,273.2s-861.5,93.1-861.5,396.3
	c0,237.3,475.3,75.7,475.3,303.7c0,131-209.1,87.2-209.1,265.9c0,255.1,355.2,257.7,446.9,252.9c189.8-10,174.8,204.5,389.7,154.9"
            />
        </svg>
    )
}

export default Stripe
