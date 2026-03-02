"use client";

import { useState, useEffect } from "react";

export function SystemStatus() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            });
            setTime(formatter.format(new Date()));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!time) return null;

    return (
        <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="tracking-wider">STATUS: OPEN FOR FREELANCE</span>
            </div>
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 tracking-wider">
                SURAT, IN • {time}
            </div>
        </div>
    );
}
