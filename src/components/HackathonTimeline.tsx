"use client";

import { motion } from "framer-motion";
import { hackathons } from "@/data/hackathons";

export function HackathonTimeline() {
    return (
        <section className="relative w-full max-w-4xl mx-auto px-4 py-24 min-h-screen flex flex-col items-center">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                    Achievement Timeline
                </h2>
                <p className="text-gray-400 font-sans tracking-wide">
                    The Architectural Path
                </p>
            </motion.div>

            <div className="relative w-full">
                {/* The Glowing SVG Circuit Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 flex justify-center">
                    <svg
                        className="h-full w-2"
                        preserveAspectRatio="none"
                        viewBox="0 0 2 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4ade80" stopOpacity="0" />
                                <stop offset="0.5" stopColor="#4ade80" />
                                <stop offset="1" stopColor="#4ade80" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Base dim line */}
                        <line
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="100"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeOpacity="0.2"
                            vectorEffect="non-scaling-stroke"
                        />
                        {/* Animated glowing line overlay */}
                        <motion.line
                            x1="1"
                            y1="0"
                            x2="1"
                            y2="100"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            style={{ filter: "drop-shadow(0 0 4px rgba(74,222,128,0.8))" }}
                        />
                    </svg>
                </div>

                {/* Timeline Nodes */}
                <div className="flex flex-col gap-12 relative z-10">
                    {hackathons.map((hackathon, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={hackathon.id}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`relative flex items-center justify-between md:justify-normal w-full group ${isEven ? "md:flex-row-reverse" : "md:flex-row"
                                    }`}
                            >
                                {/* Center Node (Dot) */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-black border-2 border-green-400 -translate-x-1/2 shadow-[0_0_10px_rgba(74,222,128,0.5)] z-20 group-hover:scale-125 transition-transform" />

                                {/* Content Card */}
                                <div className="w-full pl-12 md:pl-0 md:w-5/12">
                                    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-colors">
                                        <h3 className="font-serif text-xl font-bold text-white mb-1">
                                            {hackathon.name}
                                        </h3>
                                        <div className="text-sm font-sans text-gray-400 mb-3 block">
                                            <span className="text-white mr-1">Role:</span>
                                            {hackathon.role}
                                            {hackathon.project && (
                                                <>
                                                    <span className="mx-2">|</span>
                                                    <span className="text-white mr-1">Project:</span>
                                                    {hackathon.project}
                                                </>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-300 font-sans mb-4 leading-relaxed">
                                            <span className="text-white font-semibold mr-1">Impact:</span>
                                            {hackathon.impact}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {hackathon.tags.map(tag => (
                                                <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-black/40 text-green-400 border border-green-400/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Verify Button */}
                                        {hackathon.verifyLink && (
                                            <a
                                                href={hackathon.verifyLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block px-4 py-2 text-xs font-mono rounded border border-white/20 text-gray-300 hover:text-white hover:border-white hover:bg-white/10 transition-colors"
                                            >
                                                Verify Certification
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
