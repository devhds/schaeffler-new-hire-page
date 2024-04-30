import React from 'react'
import { PortableText } from '@portabletext/react'
import BodyText from '../Text/BodyText'

interface RichTextProps {
    content: any
}

const RichText = ({ content }: RichTextProps) => {
    return (
        <PortableText
            value={content}
            components={{
                block: {
                    bodyBase: ({ children }) => (
                        <BodyText
                            text={children}
                            size="base"
                            color="text-primary-soft-black"
                        />
                    ),
                },
            }}
        />
    )
}

export default RichText
