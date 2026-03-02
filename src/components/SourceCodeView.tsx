"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { hackathons } from "@/data/hackathons";

export function SourceCodeView() {
    const data = JSON.stringify({ projects, hackathons }, null, 2);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full bg-[#0a0a0a] z-40 fixed inset-0 overflow-auto pt-24 px-4 pb-12"
        >
            <div className="max-w-4xl mx-auto w-full">
                <div className="mb-4 font-mono text-xs text-green-400">
          // index.json
                </div>
                <pre className="p-6 rounded-lg bg-black/50 border border-white/10 overflow-x-auto text-sm font-mono leading-relaxed CustomScrollbar shadow-2xl">
                    <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(data) }} />
                </pre>
            </div>
        </motion.section>
    );
}

// Minimal JSON syntax highlighting
function syntaxHighlight(json: string) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        let cls = 'text-[#e5c07b]'; // Strings
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'text-[#e06c75]'; // Keys
            }
        } else if (/true|false/.test(match)) {
            cls = 'text-[#d19a66]'; // Booleans
        } else if (/null/.test(match)) {
            cls = 'text-[#56b6c2]'; // Nulls
        } else {
            cls = 'text-[#d19a66]'; // Numbers
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
