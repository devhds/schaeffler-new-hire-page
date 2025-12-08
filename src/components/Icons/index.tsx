import Add from "./Add";
import Check from "./Check";
import Map from "./Map";
import Menu from "./Menu";
import ArrowForward from "./ArrowForward";
import ArrowOutward from "./ArrowOutward";
import ExpandedLess from "./ExpandedLess";
import Instagram from "./SocialMediaIcons/Instagram";
import Facebook from "./SocialMediaIcons/Facebook";
import Twitter from "./SocialMediaIcons/Twitter";
import Weibo from "./SocialMediaIcons/Weibo";
import Xing from "./SocialMediaIcons/Xing";
import Wechat from "./SocialMediaIcons/Wechat";
import WhatsApp from "./SocialMediaIcons/WhatsApp";
import Linkedin from "./SocialMediaIcons/Linkedin";
import Download from "./Download";
import Cancel from "./Cancel";
import Error from "./Error";
import Search from "./Search";
import ArrowDown from "./ArrowDown";
import Play from "./Play";
import Close from "./Close";
import Pause from "./Pause";
import Ellipse from "./Ellipse";
import PlayNavigation from "./PlayNavigation";
import Country from "./Country";
import Stripe from "./Stripe";
import StripeMobile from "./StripeMobile";
import React from "react";
import { MotionValue } from "framer-motion";
import ArrowBack from "./ArrowBack";
import Youtube from "./SocialMediaIcons/Youtube";

export interface IconComponent {
  color?: string;
  currentVideoTime?: number;
  fill?: string;
  colorCircle?: string;
  colorPlay?: string;
  dashOffset?: MotionValue;
}

export const EmptyIcon: React.FC<IconComponent> = () => null;

export interface IconListTypes {
  [name: string]: React.FC<IconComponent>;
}

export const IconList: IconListTypes = {
  Add: Add,
  ArrowBack: ArrowBack,
  ArrowDown: ArrowDown,
  ArrowForward: ArrowForward,
  ArrowOutward: ArrowOutward,
  Country: Country,
  Cancel: Cancel,
  Check: Check,
  Close: Close,
  Download: Download,
  Ellipse: Ellipse,
  Error: Error,
  ExpandedLess: ExpandedLess,
  Facebook: Facebook,
  Instagram: Instagram,
  Linkedin: Linkedin,
  Map: Map,
  Menu: Menu,
  Pause: Pause,
  PlayNavigation: PlayNavigation,
  Play: Play,
  Search: Search,
  Stripe: Stripe,
  StripeMobile: StripeMobile,
  Twitter: Twitter,
  Wechat: Wechat,
  Weibo: Weibo,
  WhatsApp: WhatsApp,
  Xing: Xing,
  Youtube: Youtube,
};
