import React from 'react'
import { PortableText } from '@portabletext/react'
import BodyText from '../Text/BodyText'
import Headlines from '../Headlines/Headlines'

interface RichTextProps {
    content: any
    isJourneyItem?: boolean
}

const RichText = ({ content, isJourneyItem = false }: RichTextProps) => {
    return (
        <PortableText
            value={content}
            components={{
                block: {
                    h3: ({ children }) => (
                        <Headlines
                            element="h3"
                            text={children}
                            className="py-6 sm:pb-0 xs:pb-0"
                            color="text-primary-soft-black"
                        />
                    ),
                    h4: ({ children }) => (
                        <Headlines
                            element="h4"
                            text={children}
                            className="py-6 sm:pb-0 xs:pb-0"
                            color="text-primary-soft-black"
                        />
                    ),
                    bodyLarge: ({ children }) => (
                        <BodyText
                            text={children}
                            size="base"
                            className={`${isJourneyItem ? 'mb-8 sm:mb-4 xs:mb-4' : ''}`}
                            color="text-primary-soft-black"
                        />
                    ),
                },
            }}
        />
    )
}

export default RichText
