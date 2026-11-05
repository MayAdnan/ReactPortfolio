import CV from "../assets/CV.pdf";

const keyTech = [
  "TypeScript & React",
  ".NET & C#",
  "Python",
  "REST & GraphQL APIs",
  "Optimizely",
  "PostgreSQL",
  "Azure",
  "n8n & AI-Assisted Dev",
  "Healthcare Domain",
];

const Content = () => {
  return (
    <main id="home" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 text-lg-start text-center">
            <h1 className="hero-name" data-aos="fade-up">May Adnan</h1>
            <p className="hero-title" data-aos="fade-up" data-aos-delay="100">
              Full-stack Developer · C# / .NET · TypeScript / React
            </p>
            <p className="hero-bio" data-aos="fade-up" data-aos-delay="200">
              Full-stack developer at Comprend with a background as a licensed
              dental hygienist. Eight years in dental care taught me how a clinic
              actually runs, how patient record systems are used day to day, and
              why patient data has to be handled with care. Today I build web
              platforms and integrations for clients like Swedbank, L&apos;Oréal
              and SCA, and that user-side perspective helps me build software
              that solves the right problem, not just the stated one.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
              <a href={CV} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                <i className="fa-solid fa-download"></i> Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/may-adnan-b90793193/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
              >
                <i className="fa-brands fa-linkedin"></i> Contact me on LinkedIn
              </a>
            </div>
          </div>
          <div className="col-lg-5 text-center" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/May_Adnan.JPG" alt="May Adnan" className="hero-photo" />
          </div>
        </div>

        <div className="key-tech" data-aos="fade-up" data-aos-delay="350">
          <p className="key-tech-label">Key technologies</p>
          <div className="key-tech-chips">
            {keyTech.map((t) => (
              <span className="chip" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
