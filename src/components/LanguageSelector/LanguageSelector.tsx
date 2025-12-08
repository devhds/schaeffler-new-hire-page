"use client";

import React, { useState } from "react";
import { IconList } from "../Icons";
import LabelText from "../Text/LabelText";
import { fullConfig } from "@/constants/TailwindConfig/FullTailwindConfig";
import { motion } from "framer-motion";
import Link from "next/link";
import { localization } from "@/middleware";
import { useParams } from "next/navigation";

interface LanguageSelectorProps {
  darkEdition?: boolean;
  icon?: boolean;
  specialHrefForTranslation?: Record<string, string>;
}

const LanguageSelector = ({
  icon = false,
  darkEdition = false,
  specialHrefForTranslation,
}: LanguageSelectorProps) => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const ArrowIcon = IconList["ArrowDown"];
  const Country = IconList["Country"];
  const { language } = useParams();
  const currentLanguage = typeof language === "string" ? language : "";

  const reorderedLocales = [
    ...localization.locales
      .filter((locale) => locale.code !== currentLanguage)
      .sort((a, b) => a.code.localeCompare(b.code)),
  ];

  const updatedCurrentLanguage =
    currentLanguage === "es-mx"
      ? "mx"
      : currentLanguage === "pt-br"
        ? "br"
        : currentLanguage;

  return (
    <div className="relative sm:-ml-4 md:-mr-4 lg:-mr-4 xl:-mr-4 xs:-ml-4 ul:-mr-4">
      <motion.button
        onClick={() => {
          setDropDownOpen(!dropDownOpen);
        }}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`relative flex h-10 items-center justify-center rounded-[20px] py-2 pl-4 pr-[0.56rem] transition duration-[800ms]  ${darkEdition ? "hover-hover:hover:bg-transparent-white-20" : "hover-hover:hover:bg-secondary-jade-20"}`}
      >
        <LabelText
          text={updatedCurrentLanguage.toUpperCase()}
          size="small"
          color={
            darkEdition
              ? dropDownOpen
                ? "text-primary-white"
                : "text-primary-white"
              : dropDownOpen
                ? "text-primary-green"
                : "text-primary-soft-black"
          }
        />
        <motion.span
          variants={{
            initial: {
              transform: "rotate(0)",
            },
            active: {
              transform: "rotate(-180deg)",
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          initial={"initial"}
          animate={dropDownOpen ? "active" : "initial"}
        >
          <ArrowIcon
            color={
              darkEdition
                ? dropDownOpen
                  ? fullConfig.theme.colors.primary["white"]
                  : fullConfig.theme.colors.primary["white"]
                : dropDownOpen
                  ? fullConfig.theme.colors.primary["green"]
                  : fullConfig.theme.colors.primary["soft-black"]
            }
          />
        </motion.span>

        {icon && (
          <div className="absolute right-[-24px]">
            <Country />
          </div>
        )}
      </motion.button>
      <motion.ul
        variants={{
          opened: {
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
            opacity: 1,
            boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.10)",
            backgroundColor: fullConfig.theme.colors.primary.white,
          },
          closed: {
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
            opacity: 0,
            backgroundColor: "rgba(255,255,255,0)",
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        initial={"closed"}
        animate={dropDownOpen ? "opened" : "closed"}
        className="absolute top-12 w-full overflow-hidden rounded-[10px]"
      >
        {reorderedLocales.map((item) => (
          <motion.li
            variants={{
              opened: {
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                },
              },
              closed: {
                transition: { duration: 0.2 },
              },
            }}
            className={`${dropDownOpen ? "cursor-pointer" : "pointer-events-none"} px-4 py-2.5 transition duration-[500ms] border-b border-transparent-carbon-grey-12 hover:bg-primary-carbon-grey-10`}
            onClick={() => {
              setDropDownOpen(false);
            }}
            key={item.code}
          >
            <motion.div
              variants={{
                opened: {
                  opacity: 1,
                },
                closed: {
                  opacity: 0,
                },
              }}
            >
              <Link
                href={
                  specialHrefForTranslation
                    ? specialHrefForTranslation[item.code]
                    : `/${item.code}`
                }
              >
                <LabelText
                  text={
                    item.code === "es-mx"
                      ? "mx".toUpperCase()
                      : item.code === "pt-br"
                        ? "br".toUpperCase()
                        : item.code.toUpperCase()
                  }
                  size="small"
                  color="text-primary-soft-black"
                />
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default LanguageSelector;
