"use client";

import { useStore } from "@/store/useStore";
import { Hero } from "@/components/Hero";
import { SystemStatus } from "@/components/SystemStatus";
import { ProjectHub } from "@/components/ProjectHub";
import { HackathonTimeline } from "@/components/HackathonTimeline";
import { SourceCodeToggle } from "@/components/SourceCodeToggle";
import { SourceCodeView } from "@/components/SourceCodeView";
import { ContactTerminal } from "@/components/ContactTerminal";
import { FloatingDock } from "@/components/FloatingDock";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const { isSourceCodeMode } = useStore();

  return (
    <main className="relative min-h-screen">
      <SystemStatus />
      <SourceCodeToggle />
      <FloatingDock />

      <AnimatePresence mode="wait">
        {isSourceCodeMode ? (
          <SourceCodeView key="source" />
        ) : (
          <div key="ui" className="w-full">
            <Hero />
            <ProjectHub />
            <HackathonTimeline />
            <ContactTerminal />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
