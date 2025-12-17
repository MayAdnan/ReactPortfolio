const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm px-4">
      <div className="container-fluid position-relative">
        <a className="navbar-brand fw-bold" href="#">
          <span className="greeting-nav">Hi, I'm</span>
          <span className="name-nav">May Adnan</span>
        </a>
        
        <div className="social-icons position-absolute start-50 translate-middle-x d-flex">
          <a
            href="https://www.linkedin.com/in/may-adnan-b90793193/"
            target="_blank"
            className="text-dark mx-2"
          >
            <i className="fa-brands fa-linkedin fa-lg"></i>
          </a>
          <a
            href="https://github.com/MayAdnan"
            target="_blank"
            className="text-dark mx-2"
          >
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
          <a href="mailto:maay.adnan96@gmail.com" className="text-dark mx-2">
            <i className="fa-solid fa-envelope fa-lg"></i>
          </a>
        </div>

        <div className="d-flex align-items-center ms-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#content">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  Education 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
