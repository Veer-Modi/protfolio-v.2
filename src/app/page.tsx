import { Hero } from "@/components/Hero";
import { SystemStatus } from "@/components/SystemStatus";
import { ProjectHub } from "@/components/ProjectHub";
import { HackathonTimeline } from "@/components/HackathonTimeline";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SystemStatus />
      <Hero />
      <ProjectHub />
      <HackathonTimeline />
    </main>
  );
}
