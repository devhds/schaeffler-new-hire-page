"use client";

import React, { useEffect, useRef, useState } from "react";
import LabelText from "../Text/LabelText";
import IconButton from "../Button/IconButton";
import { motion } from "framer-motion";
import { RichText } from "@/components/RichText/RichText";
import { AccordionTypes } from "@/payload-types";

type AccordionItemData = NonNullable<AccordionTypes["accordionItems"]>[number];

interface AccordionItemProps extends AccordionItemData {
  expandedId: string;
  updatedExpandedId: (id: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  headline,
  expandedText,
  expandedId,
  updatedExpandedId,
  disable,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expandedId]);

  return (
    <div
      onClick={(event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof HTMLElement && event.target.id) {
          updatedExpandedId(event.target.id);
        }
      }}
      id={id ?? undefined}
      className={`group overflow-hidden ${disable && "pointer-events-none"} z-30 flex cursor-pointer flex-col border-b border-primary-carbon-grey-60 pt-6 transition duration-[300ms] first-of-type:border-t sm:pt-4 xs:pt-4`}
    >
      <motion.div
        className={`flex items-center justify-between pointer-events-none ${disable && "text-primary-carbon-grey-60"}`}
      >
        <LabelText
          text={headline}
          size="extra-large"
          color={
            disable
              ? "text-primary-carbon-grey-60"
              : expandedId === id
                ? "text-primary-green"
                : "text-primary-soft-black"
          }
          className={`max-w-[85%] transition duration-[300ms] group-hover:text-primary-green`}
        />
        <IconButton
          onClick={() => null}
          isGroupHover
          hoverStyles={`group-hover:border-secondary-jade-20 ${expandedId === id ? "rotate-[45deg]" : ""} transition duration-[200ms] ease-in-out group-hover:bg-secondary-jade-20 group-hover:text-primary-green`}
          icon={"Add"}
        />
      </motion.div>

      <motion.div
        className={`pointer-events-none relative mt-6 sm:mt-4 xs:mt-4`}
        animate={{
          height: expandedId === id ? contentHeight : 0,
          marginBottom: expandedId === id ? "1.5rem" : "0rem",
          opacity: expandedId === id ? 1 : 0,
        }}
        initial={false}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <motion.div ref={contentRef}>
          <RichText data={expandedText} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
