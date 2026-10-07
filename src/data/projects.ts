import content from "./content.json";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string;
  status: "ACTIVE" | "IN PROGRESS" | "SHIPPED";
  links?: ProjectLink[];
}

export const selectedProjects: ProjectItem[] = content.projects as ProjectItem[];
