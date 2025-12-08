"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { cubicBezier, motion } from "framer-motion";
import LabelText from "../Text/LabelText";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { useDynamicNavigationContext } from "../context/DynamicNavigationContext";
import { Config, Navigation as NavigationTypes } from "@/payload-types";

interface DesktopVersionProps extends NavigationTypes {
  headerIsHidden?: boolean;
  navIsInTopLocation?: boolean;
  isTextOnlyPage?: Config["collections"]["pages"]["textContentOnly"];
  specialHrefForTranslation?: Record<string, string>;
}

const DesktopVersion = ({
  navigationLinks,
  headerIsHidden,
  navIsInTopLocation,
  isTextOnlyPage,
  specialHrefForTranslation,
}: DesktopVersionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { currentSection, updateCurrentSection } =
    useDynamicNavigationContext();

  useEffect(() => {
    if (ref.current && !headerIsHidden) {
      const height = ref?.current?.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--headerHeight",
        height + "px",
      );
    } else {
      document.documentElement.style.setProperty("--headerHeight", 0 + "px");
    }
  }, [headerIsHidden]);

  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, href: string | null | undefined) => {
      e.preventDefault();
      updateCurrentSection(href);
      if (typeof href === "string") {
        const hero = document.getElementById(href);
        if (hero) {
          hero.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    },
    [updateCurrentSection],
  );

  return (
    <motion.div
      ref={ref}
      variants={{
        open: {
          y: "0px",
          opacity: 1,
        },
        close: {
          y: "-95px",
          opacity: 0,
        },
      }}
      animate={headerIsHidden ? "close" : "open"}
      transition={{
        duration: 0.8,
        ease: cubicBezier(0.16, 1, 0.3, 1),
      }}
      style={{
        boxShadow: navIsInTopLocation ? "" : "0px 8px 24px rgba(0, 0, 0, .1)",
      }}
      className={`fixed left-0 top-0 z-[32] flex w-full flex-row items-center justify-between ${navIsInTopLocation ? "" : "bg-primary-white"} sm:hidden xs:hidden`}
    >
      <div
        className={`flex w-full flex-row items-center ${isTextOnlyPage ? "justify-end" : "justify-between"} px-20 md:px-12 lg:px-12`}
      >
        {!isTextOnlyPage && (
          <div className="flex flex-row gap-x-8">
            {navigationLinks.map((link) => {
              return (
                <div
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className={`relative h-fit cursor-pointer py-[31px] transition duration-[800ms] after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:transition after:duration-[800ms] after:content-[''] ${navIsInTopLocation ? "hover:text-primary-white" : "hover:text-primary-green"}
                                  ${
                                    navIsInTopLocation
                                      ? currentSection === link.slug &&
                                        `after:bg-primary-white`
                                      : currentSection === link.slug &&
                                        `after:bg-primary-green`
                                  }
                                ${navIsInTopLocation ? "hover:after:bg-primary-white" : "hover:after:bg-primary-green"} ${navIsInTopLocation ? (currentSection === link.slug ? "text-primary-white" : "text-primary-white") : currentSection === link.slug ? "text-primary-green" : "text-primary-soft-black"} hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-1 hover:after:w-full hover:after:content-['']`}
                  key={link.id + "desktop-version"}
                  onClick={(event) => handleScrollTo(event, link.slug)}
                >
                  <LabelText
                    text={link.title}
                    size="small"
                    color={"currentColor"}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="py-[15px]">
          <LanguageSelector
            darkEdition={isTextOnlyPage ? !isTextOnlyPage : navIsInTopLocation}
            specialHrefForTranslation={specialHrefForTranslation}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DesktopVersion;
