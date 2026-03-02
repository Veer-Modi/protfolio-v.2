"use client";

import { motion, Variants } from "framer-motion";

export function Hero() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden px-4">
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col items-center text-center z-10"
            >
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
                    <motion.h1
                        variants={item}
                        className="font-serif text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight text-white"
                    >
                        VEER
                    </motion.h1>
                    <motion.h1
                        variants={item}
                        className="font-mono text-6xl md:text-8xl lg:text-[10rem] tracking-tighter text-white"
                    >
                        MODI
                    </motion.h1>
                </div>
                <motion.p
                    variants={item}
                    className="text-lg md:text-2xl text-gray-400 font-light tracking-wide mt-4"
                >
                    Aspiring Full Stack Developer | UI/UX Designer
                </motion.p>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-4 h-6 rounded-full border border-gray-600 flex justify-center p-1"
                >
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
