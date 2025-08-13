import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { motion, useScroll, useTransform } from "framer-motion";
import BodyText from "@/components/Text/BodyText";

interface CopySpacing {
  start: string;
  end: string;
  opacity: number[];
}

interface JourneyCopyProps {
  text: React.ReactNode[];
}

const JourneyCopy: React.FC<JourneyCopyProps> = ({ text }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mediaQuery = useMediaQuery();
  const [dynamicCopySpacing, setDynamicCopySpacing] = useState<CopySpacing>({
    start: "6.5rem",
    end: "-6.5rem",
    opacity: [0, 0.35, 0.45, 0.52, 0.54, 1],
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  useEffect(() => {
    if (mediaQuery.sm || mediaQuery.xs) {
      setDynamicCopySpacing({
        start: "0rem",
        end: "0rem",
        opacity: [0, 0.5, 0.54, 0.68, 0.7, 1],
      });
    } else {
      setDynamicCopySpacing({
        start: "6.5rem",
        end: "-6.5rem",
        opacity: [0, 0.35, 0.45, 0.52, 0.54, 1],
      });
    }
  }, [mediaQuery.sm, mediaQuery.xs]);

  const textOpacity = useTransform(
    scrollYProgress,
    dynamicCopySpacing.opacity,
    [0.25, 0.25, 1, 1, 0.25, 0.25],
  );

  const textOffset = useTransform(
    scrollYProgress,
    [0, 0.4, 0.54, 1],
    [
      dynamicCopySpacing.start,
      dynamicCopySpacing.start,
      dynamicCopySpacing.end,
      dynamicCopySpacing.end,
    ],
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: textOpacity,
        y: textOffset,
      }}
    >
      <BodyText
        text={text}
        size="large"
        className={`mb-8 sm:mb-4 xs:mb-4`}
        color="text-primary-soft-black"
      />
    </motion.div>
  );
};

export default JourneyCopy;
