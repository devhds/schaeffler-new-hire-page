// textConverters.ts

import {
  SerializedHeadingNode,
  SerializedLinkNode,
  SerializedListItemNode,
  SerializedListNode,
  SerializedParagraphNode,
} from "@payloadcms/richtext-lexical";
import { JSXConverters } from "@payloadcms/richtext-lexical/react";
import Headlines from "@/components/Headlines/Headlines";
import BodyText from "@/components/Text/BodyText";
import JourneyCopy from "@/components/Journey/JourneyCopy";
import React from "react";

export const getTextConverters = (
  isJourneyItem: boolean | undefined,
): JSXConverters<
  | SerializedHeadingNode
  | SerializedParagraphNode
  | SerializedLinkNode
  | SerializedListNode
  | SerializedListItemNode
> => ({
  heading: ({ node, nodesToJSX, childIndex }) => {
    const text = nodesToJSX({ nodes: node.children }).join("");
    const Tag = node.tag;

    return (
      <Headlines
        element={Tag}
        text={text}
        className={`mb-6 ${childIndex === 0 ? "" : "mt-12 sm:mt-8 md:mt-8 xs:mt-8"} sm:mb-4 md:mb-4 xs:mb-4`}
        color="text-primary-soft-black"
      />
    );
  },
  paragraph: ({ node, nodesToJSX, childIndex }) => {
    return (
      <div>
        {isJourneyItem ? (
          <JourneyCopy
            key={childIndex}
            text={nodesToJSX({ nodes: node.children })}
          />
        ) : node.children[0] &&
          "text" in node.children[0] &&
          typeof node.children[0].text === "string" &&
          node.children[0].text.includes("button") ? (
          <div dangerouslySetInnerHTML={{ __html: node.children[0].text }} />
        ) : (
          <BodyText
            text={nodesToJSX({ nodes: node.children })}
            size="large"
            className={`${
              isJourneyItem
                ? "mb-8 sm:mb-4 xs:mb-4"
                : childIndex === 0
                  ? "mb-8 sm:mb-6 md:mb-6 xs:mb-6"
                  : "my-8 sm:my-6 md:my-6 xs:my-6"
            }`}
            color="text-primary-soft-black"
          />
        )}
      </div>
    );
  },
  link: ({ node, nodesToJSX }) => {
    return (
      <a
        href={node.fields.url}
        className="underline decoration-primary-carbon-grey-50 underline-offset-4 transition duration-[800ms] visited:text-tertiarty-visited-links hover:text-primary-green hover:decoration-primary-green focus:text-primary-green focus:no-underline focus:decoration-primary-green focus:outline-dashed focus:outline-1 focus:outline-offset-1 active:text-primary-green active:decoration-primary-green"
        target={node.fields.newTab ? "_blank" : undefined}
        rel={node.fields.newTab ? "noopener noreferrer" : undefined}
      >
        {nodesToJSX({ nodes: node.children })}
      </a>
    );
  },
  code: ({ node, nodesToJSX }) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: nodesToJSX({ nodes: node.children }),
        }}
      />
    );
  },
  list: ({ node, nodesToJSX }) => {
    return <ul className="pl-7">{nodesToJSX({ nodes: node.children })}</ul>;
  },
  listitem: ({ node, nodesToJSX, childIndex }) => {
    return (
      <li className="list-disc">
        <BodyText
          text={nodesToJSX({ nodes: node.children })}
          size="large"
          className={`${
            isJourneyItem
              ? "mb-8 sm:mb-4 xs:mb-4"
              : childIndex === 0
                ? "mb-8 sm:mb-6 md:mb-6 xs:mb-6"
                : "my-8 sm:my-6 md:my-6 xs:my-6"
          }`}
          color="text-primary-soft-black"
        />
      </li>
    );
  },
});
