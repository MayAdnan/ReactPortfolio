import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (
    <section id="contact" className="text-center py-5">
      <h2 className="fw-bold"> Let's get in touch </h2>
      <div className="social-icons mt-3">
        <a
          href="https://www.linkedin.com/in/may-adnan-b90793193/"
          target="_blank"
          className="text-dark mx-2"
        >
          <i className="fa-brands fa-linkedin fa-2x"></i>
        </a>
        <a
          href="https://github.com/MayAdnan"
          target="_blank"
          className="text-dark mx-2"
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
        <a href="mailto:maay.adnan96@gmail.com" className="text-dark mx-2">
          <i className="fa-solid fa-envelope fa-2x"></i>
        </a>
      </div>
    </section>
  );
};

export default Contact;
