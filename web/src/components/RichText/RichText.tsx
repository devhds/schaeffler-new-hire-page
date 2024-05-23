import React from 'react'
import { PortableText } from '@portabletext/react'
import BodyText from '../Text/BodyText'
import Headlines from '../Headlines/Headlines'

interface RichTextProps {
    content: any
    additionalClassnames?: string
}

const RichText = ({ content, additionalClassnames }: RichTextProps) => {
    return (
        <PortableText
            value={content}
            components={{
                block: {
                    h3: ({ children }) => (
                        <Headlines
                            element="h3"
                            text={children}
                            className={additionalClassnames}
                            color="text-primary-soft-black"
                        />
                    ),
                    h4: ({ children }) => (
                        <Headlines
                            element="h4"
                            text={children}
                            className={additionalClassnames}
                            color="text-primary-soft-black"
                        />
                    ),
                    bodyBase: ({ children }) => (
                        <BodyText
                            text={children}
                            size="base"
                            className={additionalClassnames}
                            color="text-primary-soft-black"
                        />
                    ),
                },
            }}
        />
    )
}

export default RichText
