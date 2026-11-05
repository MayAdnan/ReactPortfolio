const Education = () => {
  return (
    <section id="education" className="container py-5">
      <h2 className="fw-bold text-center" data-aos="fade-up">Education</h2>
      <div className="xp-card" data-aos="fade-up" data-aos-delay="100">
        <h4 className="fw-semibold">Software Developer .NET</h4>
        <p className="xp-meta">Nackademin, Solna · Graduated May 2026</p>
        <p className="xp-summary">
          Two-year vocational higher education programme (yrkeshögskola). Core
          areas: .NET, C#, ASP.NET Core, API development, databases, JavaScript,
          TypeScript, React, object-oriented design, DevOps, CI/CD, Azure, data
          communication and security. Includes six months of internship (LIA) at
          Comprend.
        </p>
      </div>
      <div className="xp-card" data-aos="fade-up" data-aos-delay="150">
        <h4 className="fw-semibold">Bachelor&apos;s Degree in Oral Health</h4>
        <p className="xp-meta">Karolinska Institutet, Stockholm · Graduated 2018</p>
        <p className="xp-summary">
          Dental Hygiene programme followed by a bachelor&apos;s year. Licensed
          dental hygienist (legitimerad tandhygienist) since 2017.
        </p>
      </div>
    </section>
  );
};

export default Education;
