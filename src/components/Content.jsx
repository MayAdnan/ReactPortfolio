import CV from "../assets/CV.pdf";

const Content = () => {
  return (
    <main className="hero d-flex flex-column justify-content-center align-items-center text-center">
      <div id="content">
        <div className="flip-container" data-aos="zoom-in" data-aos-delay="400">
          <div className="flip-card">
            <div className="flip-card-front">
              <img src="assets/workmay.JPG" alt="May Adnan at work" className="profile-img" />
            </div>
            <div className="flip-card-back">
              <img src="assets/May_Adnan.JPG" alt="May Adnan" className="profile-img" />
            </div>
          </div>
        </div>
        <p className="lead text-secondary" data-aos="fade-up" data-aos-delay="500">
          Full-stack Developer at Comprend · Dental Hygienist by background
        </p>
        <p className="intro" style={{ maxWidth: "640px" }} data-aos="fade-up" data-aos-delay="600">
          I build web platforms and integrations for clients like Swedbank,
          L&apos;Oréal and SCA, mostly in TypeScript, React, C#/.NET, Python and
          Optimizely. Before I wrote code I spent eight years in dental care,
          so I know what it&apos;s like to be the person using the system, not
          just the one building it.
        </p>
        <div data-aos="fade-up" data-aos-delay="700">
          <a href="#projects" className="btn btn-dark mt-3 me-2">
            <i className="fa-solid fa-code"></i> See my work
          </a>
          <a href={CV} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark mt-3">
            <i className="fa-solid fa-download"></i> Download CV
          </a>
        </div>
      </div>
    </main>
  );
};

export default Content;
