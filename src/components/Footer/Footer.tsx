"use client";

import React, { useCallback } from "react";
import { Footer as FooterTypes } from "@/payload-types";
import ParallaxText from "../Text/ParallaxText";
import TextLinks from "../Links/TextLinks";
import IconButton from "../Button/IconButton";
import LabelText from "../Text/LabelText";
import SocialIcon from "../Button/SocialIcon";
import { useParams } from "next/navigation";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";

const Footer = ({ ...props }: FooterTypes) => {
  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { parallaxText, socialIconsFields, infoFields, logoUrl } = props;
  const { language } = useParams();

  return (
    <footer className="border-t-transparent-carbon-grey-12 relative z-[31] border-t bg-primary-white sm:px-8 md:px-12 lg:px-12 xl:px-20 xs:px-6 ul:px-20">
      <div className="border-b-transparent-carbon-grey-12 flex border-b sm:-mx-8 sm:py-8 sm:pl-12 md:-mx-12 md:py-8 md:pl-12 lg:-mx-12 lg:py-12 lg:pl-20 xl:-mx-20 xl:py-12 xl:pl-20 xs:-mx-6 xs:justify-end xs:py-6 xs:pr-6 ul:-mx-20 ul:py-12 ul:pl-20">
        <IconButton onClick={handleBackToTop} icon="ExpandedLess" />
      </div>
      <div className="border-b-transparent-carbon-grey-12 border-b py-12 sm:py-8 md:py-8 xs:py-8">
        <ParallaxText
          text={parallaxText}
          className="sm:-mx-8 sm:mb-12 md:-mx-12 md:mb-12 lg:-mx-12 lg:mb-16 xl:-mx-20 xl:mb-20 xs:-mx-6 xs:mb-8 ul:-mx-20 ul:mb-20"
          isFooter
          blockType="parallaxText"
        />
        <div
          className={`flex flex-row-reverse items-center justify-between sm:flex-col sm:items-end xs:flex-col xs:items-end`}
        >
          {logoUrl?.externalPageLink && (
            <Link target="_blank" href={logoUrl?.externalPageLink}>
              <Logo logoColor="#00893D" />
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between py-6  sm:flex-col-reverse sm:pt-7 md:flex-col-reverse md:pt-7 xs:flex-col-reverse xs:pt-7">
        <div className="flex sm:flex-col-reverse sm:items-center xs:flex-col-reverse xs:items-center">
          <LabelText
            text="Copyright © Schaeffler AG 2024"
            size="small"
            color="text-primary-carbon-grey-80"
            className="sm:pt-6 xs:pt-6"
          />
          <LabelText
            text="|"
            size="small"
            className="mx-4 sm:hidden xs:hidden"
            color="text-primary-carbon-grey-80"
          />
          <ul className="flex flex-row flex-wrap justify-center gap-x-4 xs:gap-y-4">
            {infoFields.map((link) => (
              <li key={link.id}>
                <TextLinks
                  href={`${link.externalPageLink ? link.externalPageLink : `/${language}/${link.internalPageLink && typeof link.internalPageLink === "object" && "slug" in link.internalPageLink && link.internalPageLink.slug}`}`}
                  text={link?.infoText ?? ""}
                  location="footer/menu"
                  textSize="small"
                />
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex sm:pb-7 md:pb-7 xs:flex-wrap xs:justify-center xs:pb-7">
          {socialIconsFields.map((item) => {
            if (!item.icon) {
              return null;
            }
            const icon = item.icon.charAt(0).toUpperCase() + item.icon.slice(1);
            return (
              <SocialIcon
                key={item.id}
                iconColor="text-primary-carbon-grey-100"
                icon={icon}
                className="mr-6 last:mr-0"
                href={item.externalPageLink ?? ""}
              />
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
