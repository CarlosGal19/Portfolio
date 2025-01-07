export interface ProjectsProps {
    title: string;
    description: string;
    projects: Project[];
}

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    href?: string[];
    alt?: string;
    github?: string;
    completed: boolean;
}
