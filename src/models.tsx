export interface SocialLink {
    name: string;
    url?: string;
    hideFromPrint?: boolean   
}

export interface ResumeInfo {
    name: string;
    email: string,
    links: SocialLink[];
}

export interface Skill {
    name: string;
    items: Array<string|Skill>;
}

export interface Education {
    institute: string;
    graduationDate: string;
    degree: string;
    subDegree?: string;
    majorGpa?: string;
    overallGpa?: string;
    coursework?: string[];
}

export interface BulletLink {
    text: string;
    link: string;
}

export interface ExperienceBullet {
    text: string;
    links?: BulletLink[];
}

export interface Experience {
    company: string;
    jobTitle: string;
    location: string;
    startDate: string;
    endDate?: string;
    bullets: Array<string|ExperienceBullet>;
}

export interface Resume {
    info: ResumeInfo;
    skills: Skill[];
    education: Education[];
    experience: Experience[];
}