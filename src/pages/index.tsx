import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/aboutSection";
import SkillsSection from "@/components/skillsSection";
import ProjectsSection from "@/components/projectsSection";

export default function Home() {
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
