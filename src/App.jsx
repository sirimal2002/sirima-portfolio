import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import AboutMe from "./components/About";
function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
