const Skills = () => {
  const skills = [
    {
      title: "Frontend",
      description: "TypeScript, JavaScript, React, Next.js, HTML, CSS, Tailwind and component libraries."
    },
    {
      title: "C# / .NET",
      description: "ASP.NET Core, Entity Framework Core, LINQ, async/await, Web APIs and MVC."
    },
    {
      title: "Python & integrations",
      description: "Python services, REST and GraphQL APIs, webhooks and integrations against external APIs."
    },
    {
      title: "Optimizely",
      description: "CMS, Graph, CMP and Agent Platform (Opal). Three Optimizely certifications."
    },
    {
      title: "Databases",
      description: "PostgreSQL, SQL Server, T-SQL, EF Core and MongoDB."
    },
    {
      title: "Cloud & DevOps",
      description: "Azure (Functions, Service Bus, Key Vault, APIM), CI/CD with GitHub Actions and Azure DevOps."
    },
    {
      title: "Automation & AI",
      description: "n8n workflows, AI agents and custom tools, and AI-assisted development every day."
    },
    {
      title: "Security",
      description: "JWT, HTTPS, authentication and authorization, and GDPR in practice from years of handling patient data."
    },
    {
      title: "Testing & quality",
      description: "Automated unit and integration tests with xUnit and pytest, code review and clear documentation."
    }
  ];

  return (
    <section id="skills" className="container py-5 text-center">
      <div className="container">
        <h2 className="fw-bold" data-aos="fade-up">Skills</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
          {skills.map((skill, index) => (
            <div className="col" key={skill.title}>
              <div
                className="skill-card"
                data-aos="fade-up"
                data-aos-delay={100 + index * 50}
              >
                <h5>{skill.title}</h5>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
