'use client'

import React from 'react'
import { AccordionItemTypes } from './AccordionTypes'
import LabelText from '../Text/LabelText'
import IconButton from '../Button/IconButton'
import { motion } from 'framer-motion'
import BodyText from '../Text/BodyText'

interface AccordionItemProps extends AccordionItemTypes {
    expandedId: string
    updatedExpandedId: (s: string) => void
}

const AccordionItem = ({
    id,
    headline,
    expandedText,
    expandedId,
    updatedExpandedId,
    disable,
}: AccordionItemProps) => {
    return (
        <div
            onClick={(event: MouseEvent | TouchEvent | any) => {
                if (event?.target && 'id' in event.target) {
                    updatedExpandedId(event.target.id)
                }
            }}
            id={id}
            className={`group overflow-hidden ${disable && 'pointer-events-none'} z-30 flex cursor-pointer flex-col border-b border-primary-carbon-grey-60 pt-6 transition duration-[300ms] first-of-type:border-t sm:pt-4 xs:pt-4`}
        >
            <motion.div
                className={`flex items-center justify-between ${expandedId === id ? '' : 'pointer-events-none'} ${disable && 'text-primary-carbon-grey-60'}`}
            >
                <LabelText
                    text={headline}
                    size="extra-large"
                    color={
                        disable
                            ? 'text-primary-carbon-grey-60'
                            : expandedId === id
                              ? 'text-primary-green'
                              : 'text-primary-soft-black'
                    }
                    className={`max-w-[85%] transition duration-[300ms] group-hover:text-primary-green`}
                />
                <IconButton
                    onClick={() => {
                        if (expandedId === id) {
                            updatedExpandedId('')
                        } else return
                    }}
                    isGroupHover
                    hoverStyles={`group-hover:border-secondary-jade-20 ${expandedId === id ? 'rotate-[45deg]' : ''} transition duration-[200ms] ease-in-out group-hover:bg-secondary-jade-20 group-hover:text-primary-green`}
                    icon={'Add'}
                />
            </motion.div>

            <motion.div
                className={`pointer-events-none relative mt-6 sm:mt-4 xs:mt-4`}
                variants={{
                    show: {
                        height: '100%',
                        opacity: 1,
                    },
                    hidden: {
                        height: '0px',
                        opacity: 0,
                    },
                }}
                animate={expandedId === id ? 'show' : 'hidden'}
                initial="show"
                transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                }}
            >
                <BodyText
                    text={expandedText}
                    size="medium"
                    className="pb-6 sm:pb-4 xs:pb-4"
                    color="text-primary-soft-black"
                />
            </motion.div>
        </div>
    )
}

export default AccordionItem
