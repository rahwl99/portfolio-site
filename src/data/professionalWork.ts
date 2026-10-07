import content from "./content.json";

export interface ProfessionalWorkItem {
  title: string;
  company: string;
  role: string;
  period: string;
  status: string;
  description: string;
  technologies: string[];
  responsibilities?: string[];
  link?: string;
}

export const professionalWorkData: ProfessionalWorkItem[] = content.professionalWork as ProfessionalWorkItem[];
