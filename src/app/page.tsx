import { Hero } from "@/components/Hero";
import { SystemStatus } from "@/components/SystemStatus";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SystemStatus />
      <Hero />
    </main>
  );
}
