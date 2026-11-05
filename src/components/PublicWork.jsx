const PublicWork = () => {
  return (
    <section id="public-work" className="container py-5 text-center">
      <h2 className="fw-bold" data-aos="fade-up">Public work</h2>
      <div className="card p-4 p-md-5 public-card" data-aos="fade-up" data-aos-delay="100">
        <h4 className="fw-semibold">Most of my work is private</h4>
        <p className="public-text">
          My production work at Comprend is client work and lives in private
          repositories. GitHub shows school projects and early experiments
          rather than the full picture, but it is still the best place to see
          how my work is developing. Ask me about the client projects and I will
          gladly walk you through them.
        </p>
        <a
          href="https://github.com/MayAdnan"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark mt-2"
        >
          <i className="fa-brands fa-github"></i> View public work on GitHub
        </a>
      </div>
    </section>
  );
};

export default PublicWork;
