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
                    h4: ({ children }: any) => {
                        if (children.length === 1 && children[0] === '') {
                            return ''
                        }
                        return (
                            <Headlines
                                element="h4"
                                text={children}
                                className="mb-6 mt-12 sm:mb-4 sm:mt-8 md:mb-4 md:mt-8 xs:mb-4 xs:mt-8"
                                color="text-primary-soft-black"
                            />
                        )
                    },
                    bodyLarge: ({ children }: any) => {
                        if (children.length === 1 && children[0] === '') {
                            return ''
                        }
                        return (
                            <BodyText
                                text={children}
                                size="large"
                                className={`${isJourneyItem ? 'mb-8 sm:mb-4 xs:mb-4' : 'my-8 sm:my-6 md:my-6 xs:my-6'}`}
                                color="text-primary-soft-black"
                            />
                        )
                    },
                    normal: ({ children }: any) => {
                        if (children.length === 1 && children[0] === '') {
                            return ''
                        }
                    },
                },
            }}
        />
    )
}

export default RichText
