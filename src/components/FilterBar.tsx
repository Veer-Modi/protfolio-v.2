"use client";

import { motion } from "framer-motion";
import { ProjectCategory } from "@/data/projects";

interface FilterBarProps {
    categories: ProjectCategory[];
    activeCategory: ProjectCategory;
    onSelectCategory: (category: ProjectCategory) => void;
}

export function FilterBar({ categories, activeCategory, onSelectCategory }: FilterBarProps) {
    return (
        <div className="sticky top-0 z-40 w-full flex justify-center py-6 backdrop-blur-md bg-black/40 border-b border-white/5">
            <div className="flex gap-2 sm:gap-4 overflow-x-auto px-4 max-w-full no-scrollbar">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`relative px-4 py-2 rounded-full text-sm font-mono transition-colors whitespace-nowrap ${activeCategory === category ? "text-white" : "text-gray-400 hover:text-gray-200"
                            }`}
                    >
                        {activeCategory === category && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{category}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
