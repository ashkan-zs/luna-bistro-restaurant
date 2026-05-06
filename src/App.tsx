import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import CTA from "./components/sections/CTA/CTA";
import Features from "./components/sections/Features/Features";
import Footer from "./components/layout/Footer/Footer";
import Gallery from "./components/sections/Gallery/Gallery";
import Hero from "./components/sections/Hero/Hero";
import Menu from "./components/sections/Menu/Menu";
import Navbar from "./components/layout/Navbar/Navbar";
import Testimonials from "./components/sections/Testimonials/Testimonials";

export default function App() {
  return (
    <div className="text-on-background font-body-md selection:bg-secondary selection:text-on-secondary">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <About />
          <Menu />
          <Features />
          <Gallery />
          <Testimonials />
          <CTA />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
