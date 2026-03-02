"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

            <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-400 font-sans text-sm line-clamp-3 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.categories.filter(c => c !== "All").map((cat) => (
                        <span key={cat} className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-300">
                            {cat}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex gap-3 mt-auto border-t border-white/10 pt-4">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center text-xs font-mono rounded bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5"
                    >
                        GitHub
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center text-xs font-mono rounded bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5"
                    >
                        Live Demo
                    </a>
                )}
                {project.video && (
                    <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 text-center text-xs font-mono rounded bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/5"
                    >
                        Video
                    </a>
                )}
            </div>
        </motion.div>
    );
}
