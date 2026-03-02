"use client";

import { useStore } from "@/store/useStore";
import { motion, AnimatePresence } from "framer-motion";

export function SourceCodeToggle() {
    const { isSourceCodeMode, toggleSourceCodeMode } = useStore();

    return (
        <div className="fixed top-6 left-6 z-50">
            <button
                onClick={toggleSourceCodeMode}
                className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 hover:bg-white/10 transition-colors"
            >
                <div className="relative z-10 font-mono text-xs flex items-center gap-2">
                    <span className="text-gray-400">{'<'}</span>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={isSourceCodeMode ? "raw" : "ui"}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-white"
                        >
                            {isSourceCodeMode ? "RENDER_UI" : "VIEW_SOURCE"}
                        </motion.span>
                    </AnimatePresence>
                    <span className="text-gray-400">{'>'}</span>
                </div>
            </button>
        </div>
    );
}
