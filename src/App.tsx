import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen text-[#f6f1ff]">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] btn-primary"
      >
        پرش به محتوای اصلی
      </a>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}