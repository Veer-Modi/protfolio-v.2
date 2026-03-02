export interface Hackathon {
    id: string;
    name: string;
    role: string;
    project?: string;
    impact: string;
    tags: string[];
    verifyLink?: string;
}

export const hackathons: Hackathon[] = [
    {
        id: "amalthea",
        name: "IIT Gandhinagar (Amalthea)",
        role: "Participant",
        project: "WorkZen HRMS",
        impact: "Full-stack prototype & MongoDB integration.",
        tags: ["#FullStack", "#MongoDB"],
        verifyLink: "https://example.com/certificate/amalthea",
    },
    {
        id: "hackxios",
        name: "IIIT Bhopal (HackXios)",
        role: "Participant",
        impact: "36-hour rapid deployment & scalable prototype.",
        tags: ["#RapidDeployment", "#Scalability"],
        verifyLink: "https://example.com/certificate/hackxios",
    },
    {
        id: "lnmhacks",
        name: "LNMIIT Jaipur (LNMHacks 8.0)",
        role: "Participant",
        impact: "Web3/Blockchain & Smart Contract logic.",
        tags: ["#Web3", "#SmartContracts"],
        verifyLink: "https://example.com/certificate/lnmhacks",
    },
    {
        id: "hack-innovate",
        name: "AIDTM (Hack Innovate)",
        role: "Participant",
        impact: "Operations Research optimization in Python.",
        tags: ["#OperationsResearch", "#Python", "#Optimization"],
        verifyLink: "https://example.com/certificate/hack-innovate",
    },
    {
        id: "techpreneur",
        name: "IIT Jammu (TechPreneur)",
        role: "Participant",
        impact: "Product thinking & rapid prototyping.",
        tags: ["#ProductThinking", "#Prototyping"],
        verifyLink: "https://example.com/certificate/techpreneur",
    },
];
