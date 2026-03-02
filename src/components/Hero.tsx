"use client";

import { motion } from "framer-motion";

export function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
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
        </section>
    );
}
