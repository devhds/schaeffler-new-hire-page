// RichText.tsx

'use client'

import React from 'react'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react'
import { createJsxConverter } from '@/components/RichText/converters'

type RichTextProps = {
  data: SerializedEditorState
  isJourneyItem?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export function RichText(props: RichTextProps) {
  const { className, isJourneyItem, ...rest } = props

  return (
    <RichTextConverter
      {...rest}
      className={className}
      converters={createJsxConverter(isJourneyItem)}
    />
  )
}
