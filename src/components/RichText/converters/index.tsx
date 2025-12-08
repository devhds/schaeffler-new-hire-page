// jsxConverter.ts

import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { getTextConverters } from './textConverters'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode

export const createJsxConverter = (
  isJourneyItem: boolean | undefined,
): JSXConvertersFunction<NodeTypes> => {
  return ({ defaultConverters }) => ({
    ...defaultConverters,
    ...getTextConverters(isJourneyItem),
  })
}
