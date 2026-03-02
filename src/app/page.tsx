import { Hero } from "@/components/Hero";
import { SystemStatus } from "@/components/SystemStatus";
import { ProjectHub } from "@/components/ProjectHub";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SystemStatus />
      <Hero />
      <ProjectHub />
    </main>
  );
}
