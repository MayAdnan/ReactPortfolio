const Contact = () => {
  return (
    <footer id="contact" className="footer text-center">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/may-adnan-b90793193/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/MayAdnan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a 
          href="mailto:maay.adnan96@gmail.com" 
          aria-label="Email"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <p className="mt-3">© 2025 May Adnan</p>
    </footer>
  );
};

export default Contact;
