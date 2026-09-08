import { useTheme } from "./hooks";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      {/* Fixed warm bloom + film grain behind everything. */}
      <div className="ambient" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <Marquee />
          <Stats />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
