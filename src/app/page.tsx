import Navbar from "./components/Navbar";
import ScrollyTelling from "./components/ScrollyTelling";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white selection:bg-[#F1B715] selection:text-black">
      <Navbar />
      <ScrollyTelling />

      <SectionDivider />
      <About />

      <SectionDivider />
      <Features />

      <SectionDivider />
      <Pricing />

      <SectionDivider />
      <Contact />

      <SectionDivider />
      <Footer />
    </main>
  );
}
