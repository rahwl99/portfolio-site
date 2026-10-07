import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProfessionalWork } from "@/components/ProfessionalWork";
import { ProjectList } from "@/components/ProjectList";
import { Timeline } from "@/components/Timeline";
import { Footprint } from "@/components/Footprint";
import { Now } from "@/components/Now";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#131316] text-[#e1e1e6]">
      <Header />
      <main className="flex-1 max-w-[760px] w-full mx-auto px-6">
        <Hero />
        <ProfessionalWork />
        <ProjectList />
        <Timeline />
        <Footprint />
        <Now />
        <Footer />
      </main>
    </div>
  );
}
