"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactTerminal() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        window.location.href = `mailto:veer.modi.cg@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(message)}`;
    };

    return (
        <section className="relative w-full max-w-2xl mx-auto px-4 py-24 min-h-[60vh] flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 md:p-8 font-mono shadow-2xl"
            >
                <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-gray-500 text-sm ml-4 border-l border-white/10 pl-4 tracking-wider">
                        terminal@veer-modi ~ contact
                    </span>
                </div>

                <div className="flex flex-col gap-6 text-sm md:text-base text-gray-300">
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
                        <span className="text-green-400 whitespace-nowrap">{"> Subject: "}</span>
                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="bg-transparent border-b border-white/20 focus:border-green-400 outline-none flex-1 text-white py-1 transition-colors"
                            placeholder="Freelance Inquiry..."
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-green-400">{"> Message: "}</span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-black/50 border border-white/10 rounded-lg p-4 focus:border-green-400 outline-none w-full min-h-[150px] text-white resize-y transition-colors"
                            placeholder="Type your message here..."
                        />
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            onClick={handleSend}
                            disabled={!subject || !message}
                            className="px-6 py-2 bg-white text-black font-sans font-bold text-sm tracking-wider rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                        >
                            Execute: Send
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
