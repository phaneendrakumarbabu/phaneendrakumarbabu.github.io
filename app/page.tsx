import { HeroWith3D } from "@/components/hero/hero-with-3d"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"
import { ShowcaseScrollSection } from "@/components/sections/showcase-scroll"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroWith3D />
      <ShowcaseScrollSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
