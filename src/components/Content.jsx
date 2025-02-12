import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CV from "../assets/CV.pdf";

const Content = () => {
  return (
    <main className="hero d-flex flex-column justify-content-center align-items-center text-center">
      <div id="content">
        <img src="assets/may.JPG" alt="May Adnan" className="profile-img" />
        <img
          src="/assets/workmay.JPG"
          alt="May Adnan"
          className="profile-img"
        />
        <p className="lead text-secondary">.NET Developer</p>
        <p className="intro" style={{ maxWidth: "600px" }}>
          Passionate and solution-oriented .NET Developer with expertise in C#,
          SQL, and modern technologies. My background in customer-focused roles
          helps me build intuitive software solutions.
        </p>
        <a href={CV} target="_blank" className="btn btn-dark mt-3">
          <i className="fa-solid fa-download"></i> Download My CV
        </a>
      </div>
    </main>
  );
};

export default Content;
