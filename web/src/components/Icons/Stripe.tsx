import { motion } from 'framer-motion'
import React from 'react'

const Stripe = ({ dashOffset }: { dashOffset: number; dashArray: number }) => {
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
                    stroke: '#A7C3B9',
                    strokeMiterlimit: '10',
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="30"
                strokeDashoffset={dashOffset}
                strokeDasharray="7480 7480"
                d="M1087.6,3391.5c0-183.4-508.7,8.5-508.7-246.6
        c0-178.7,180-267.3,180-398.3c0-228-475.3-66.4-475.3-303.7c0-303.2,861.5-61.7,861.5-396.3S63.3,2011.8,63.3,1773.4
        c0-187.5,495.2-21.2,495.2-243c0-186.5-249.4-281.6-249.4-479.9c0-374.2,841.5-44.4,841.5-288.9c0-212.4-342.1-117.3-342.1-382.4
        C808.4,109,167.6,316.4,167.6,0"
            />
        </svg>
    )
}

export default Stripe
