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
                    h4: ({ children, index }: any) => {
                        if (children.length === 1 && children[0] === '') {
                            return ''
                        }
                        return (
                            <Headlines
                                element="h4"
                                text={children}
                                className={`mb-6 ${index === 0 ? '' : 'mt-12 sm:mt-8 md:mt-8 xs:mt-8'} sm:mb-4 md:mb-4 xs:mb-4`}
                                color="text-primary-soft-black"
                            />
                        )
                    },
                    bodyLarge: ({ children, index }: any) => {
                        if (children.length === 1 && children[0] === '') {
                            return ''
                        }
                        return (
                            <BodyText
                                text={children}
                                size="large"
                                className={`${isJourneyItem ? 'mb-8 sm:mb-4 xs:mb-4' : `${index === 0 ? 'mb-8 sm:mb-6 md:mb-6 xs:mb-6' : 'my-8 sm:my-6 md:my-6 xs:my-6'}`}`}
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
                list: {
                    bullet: ({ children }) => {
                        return <ul className="pl-7">{children}</ul>
                    },
                },
                listItem: {
                    bullet: ({ children, index }) => (
                        <li className="list-disc">
                            <BodyText
                                text={children}
                                size="large"
                                className={`${isJourneyItem ? 'mb-8 sm:mb-4 xs:mb-4' : `${index === 0 ? 'mb-8 sm:mb-6 md:mb-6 xs:mb-6' : 'my-8 sm:my-6 md:my-6 xs:my-6'}`}`}
                                color="text-primary-soft-black"
                            />
                        </li>
                    ),
                },
            }}
        />
    )
}

export default RichText
