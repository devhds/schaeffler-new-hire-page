"use client";

import React from "react";
import { fullConfig } from "@/constants/TailwindConfig/FullTailwindConfig";
import { EmptyIcon, IconList } from "../Icons";

interface LabelTextProps {
  text: string;
  size:
    | "extra-large"
    | "large"
    | "medium"
    | "small"
    | "small-uppercase"
    | "extra-small";
  color: string;
  className?: string;
  upperCase?: boolean;
  iconEnabled?: boolean;
  iconPosition?: "start" | "end" | null;
  icon?: string;
}

const LabelText = ({
  text,
  size,
  color,
  className,
  upperCase = false,
  iconEnabled = false,
  iconPosition = null,
  icon = "",
}: LabelTextProps) => {
  const Icon = icon ? IconList[icon] : EmptyIcon;

  const labelTextStyles = {
    "extra-large":
      "xs:text-base sm:text-lg md:text-lg lg:text-2xl xl:text-label-extra-large-xl ul:text-label-extra-large-ul",
    large:
      "xs:text-base sm:text-base md:text-base lg:text-lg xl:text-label-large-xl ul:text-4xl",
    medium:
      "xs:text-base sm:text-base md:text-base lg:text-base xl:text-label-medium-xl ul:text-label-medium-ul",
    small:
      "xs:text-label-small-xs sm:text-label-small-xs-sm md:text-label-small-xs-sm-md lg:text-label-small-xs-sm-md-lg xl:text-label-small-xl ul:text-label-small-ul",
    "small-uppercase":
      "xs:text-label-small-upp-xs sm:text-label-small-upp-sm-md md:text-label-small-upp-sm-md lg:text-label-small-upp-lg xl:text-label-small-upp-xl ul:text-label-small-upp-ul",
    "extra-small":
      "xs:text-xs leading-[133%] tracking-[0.015rem] sm:text-xs md:text-xs lg:text-xs xl:text-label-extra-small-xl ul:text-2xl",
  };

  return (
    <p
      className={`${labelTextStyles[size]} ${iconEnabled && "flex items-center"} ${size === "small" && upperCase && "tracking-[0.07rem]"} ${upperCase && "uppercase"} ${color} ${className}`}
    >
      {iconEnabled && iconPosition === "start" && (
        <div className="mr-2">
          <Icon color={fullConfig.theme.colors.primary.white} />
        </div>
      )}
      {text}
      {iconEnabled && iconPosition === "end" && (
        <div className="ml-2">
          <Icon color={fullConfig.theme.colors.primary.white} />
        </div>
      )}
    </p>
  );
};

export default LabelText;
