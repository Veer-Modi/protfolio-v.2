export type ProjectCategory = "All" | "Full Stack" | "Figma" | "Hackathon" | "Clone";

export interface Project {
    id: string;
    title: string;
    description: string;
    categories: ProjectCategory[];
    github?: string;
    demo?: string;
    video?: string;
}

export const projects: Project[] = [
    {
        id: "vermio",
        title: "Vermio",
        description: "Cloud Gaming App connecting users with high-fidelity streams.",
        categories: ["Full Stack"],
        github: "https://github.com",
        demo: "https://example.com",
        video: "https://youtube.com"
    },
    {
        id: "attendance-tracker",
        title: "Attendance Tracker",
        description: "Team Project utilizing sophisticated backend architecture.",
        categories: ["Full Stack"],
        github: "https://github.com",
    },
    {
        id: "html-css-works",
        title: "HTML-CSS Works",
        description: "UI Clones and fundamentals demonstrating semantic structure.",
        categories: ["Clone"],
        github: "https://github.com",
        demo: "https://example.com",
    },
];
