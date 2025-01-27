import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface TrackInfoProps {
  title: string;
  description: string | ReactNode;
  slug: string;
  sponsor: string;
  sponsoredTrack?: boolean;
  // image: JSX.Element;
}

export interface SpeakerOrJudgeInfo {
  name: string;
  about: string;
  image: string | StaticImageData;
  industry?: string;
  socials?: {
    linkedIn?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
  };
}

export interface FaqInfo {
  question: string;
  answer: string;
}

type sponserSubType = {
  type?: String;
  name: String;
  URL: String;
  image: String;
};
export interface SponsorPops {
  gold: Array<sponserSubType>;
  silver: Array<sponserSubType>;
  partners: Array<sponserSubType>;
}
