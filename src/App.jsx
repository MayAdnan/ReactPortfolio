import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
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
      <Education />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
