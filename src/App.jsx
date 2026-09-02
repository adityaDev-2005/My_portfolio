import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import WorkAreas from "./components/WorkAreas.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Exploring from "./components/Exploring.jsx";
import Experience from "./components/Experience.jsx";
import OpenSource from "./components/OpenSource.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./components.css";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkAreas />
        <Projects />
        <Skills />
        <Exploring />
        <Experience />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
