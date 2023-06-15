import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import AboutSection from "@/components/aboutSection";
import SkillsSection from "@/components/skillsSection";
import ProjectsSection from "@/components/projectsSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
