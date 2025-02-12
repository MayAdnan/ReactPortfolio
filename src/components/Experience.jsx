import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Experience = () => {
  return (
    <section id="experience" className="container py-5 text-center">
      <h2 className="fw-bold">Experience</h2>
      <div className="card p-4 shadow-sm text-start">
        <h4 className="fw-semibold">Dental Hygienist - Täby Centrum</h4>
        <p>
          <em>2018-2024</em>
        </p>
        <ul>
          <li>
            Responsible for patients with periodontitis and close collaboration
            with periodontologists.
          </li>
          <li>
            Developed strong communication and problem-solving skills to handle
            complex cases.
          </li>
        </ul>
        <h4 className="fw-semibold">
          Dental Hygienist/Dental Assistant - Mörby Centrum
        </h4>
        <p>
          <em>2016-2018</em>
        </p>
        <ul>
          <li>
            Worked part-time as a licensed dental hygienist after two years of
            education at Karolinska Institutet.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
