import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works"
import { BentoGridSection } from "@/components/bento-grid"
import { FixItLabSection } from "@/components/fix-it-lab"
import { ToolLabSection } from "@/components/tool-lab"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <BentoGridSection />
      <FixItLabSection />
      <ToolLabSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
