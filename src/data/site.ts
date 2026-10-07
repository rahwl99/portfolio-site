import content from "./content.json";

export interface SocialLink {
  key: string;
  label: string;
  url: string;
  display?: string;
}

export interface SiteMeta {
  author: string;
  initials: string;
  headline: string;
  role: string;
  bioLead: string;
  socials: SocialLink[];
}

export interface FootprintData {
  intro: string;
  youtubeSubscribers: string;
  youtubeViews: string;
  playStoreDownloads: string;
}

export interface NowData {
  headline: string;
  lastUpdated?: string;
}

export const siteMeta: SiteMeta = content.siteMeta;
export const footprintData: FootprintData = content.footprint;
export const nowData: NowData = content.now;
