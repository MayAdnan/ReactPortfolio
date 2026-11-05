const languages = [
  { name: "Swedish", level: "Native" },
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Good working knowledge" },
];

const Languages = () => {
  return (
    <section id="languages" className="container py-5 text-center">
      <h2 className="fw-bold" data-aos="fade-up">Languages</h2>
      <div className="row row-cols-2 row-cols-md-4 g-3 mt-1 justify-content-center">
        {languages.map((l, i) => (
          <div className="col" key={l.name}>
            <div className="skill-card lang-card" data-aos="fade-up" data-aos-delay={100 + i * 50}>
              <h5>{l.name}</h5>
              <p>{l.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
