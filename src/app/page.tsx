import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden selection:bg-primary selection:text-white">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
