"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterBar } from "./FilterBar";
import { ProjectCard } from "./ProjectCard";
import { projects, ProjectCategory } from "@/data/projects";

const ALL_CATEGORIES: ProjectCategory[] = ["All", "Full Stack", "Figma", "Hackathon", "Clone"];

export function ProjectHub() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

    const filteredProjects = projects.filter((project) =>
        activeCategory === "All" ? true : project.categories.includes(activeCategory)
    );

    return (
        <section className="min-h-screen flex flex-col items-center w-full relative">
            <FilterBar
                categories={ALL_CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
            />

            <div className="w-full max-w-6xl px-4 py-12 mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
