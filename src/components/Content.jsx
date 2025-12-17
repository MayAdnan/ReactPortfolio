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
          .NET Developer | Dental Hygienist
        </p>
        <p className="intro" style={{ maxWidth: "600px" }} data-aos="fade-up" data-aos-delay="600">
          Passionate and solution-oriented .NET Developer with expertise in C#,
          SQL, and modern technologies. My background in customer-focused roles
          helps me build intuitive software solutions.
        </p>
        <a 
          href={CV} 
          target="_blank" 
          className="btn btn-dark mt-3"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <i className="fa-solid fa-download"></i> Download My CV
        </a>
      </div>
    </main>
  );
};

export default Content;
