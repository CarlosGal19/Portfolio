export interface ExperienceProps {
    title: string;
    description: string;
    studiesTitle: string;
    studies: Study[];
    workTitle: string;
    workExperience: Work[];
}

export interface Study {
    name: string;
    degree: string;
    date: string;
    href: string;
    alt: string;
}

export interface Work {
    company: string;
    position: string;
    description: string;
    technologies: string[];
    date: string;
    href: string;
    alt: string;
}
