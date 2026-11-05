import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import PublicWork from "./components/PublicWork";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Content />
      <Experience />
      <Skills />
      <Certifications />
      <PublicWork />
      <Education />
      <Languages />
      <Contact />
    </>
  );
}

export default App;
