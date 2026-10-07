import content from "./content.json";

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}

export const journeyData: JourneyItem[] = content.journey;
