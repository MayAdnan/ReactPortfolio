const certs = [
  { title: "Optimizely Certified Opal Administrator", date: "May 2026" },
  { title: "Optimizely Opal Development Accredited", date: "December 2025" },
  { title: "Optimizely Certified Opal Tools Developer", date: "November 2025" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="container py-5 text-center">
      <h2 className="fw-bold" data-aos="fade-up">Certifications</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
        {certs.map((c, index) => (
          <div className="col" key={c.title}>
            <div className="skill-card cert-card" data-aos="fade-up" data-aos-delay={100 + index * 50}>
              <i className="fa-solid fa-certificate cert-icon"></i>
              <h5>{c.title}</h5>
              <p>{c.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
