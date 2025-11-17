import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { initAllAnimations } from "./utils/scrollAnimations.js";

export default function App() {
  useEffect(() => {
    initAllAnimations();
  }, []);
  return (
    <div>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


