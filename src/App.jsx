
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollEffects from "./components/ScrollEffects";
import ScrollReveal from "./components/ScrollReveal";

function App() {
  return (
    <div className="app-shell">
      <ScrollEffects />
      <ScrollReveal />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
