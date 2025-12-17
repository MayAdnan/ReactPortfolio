const Skills = () => {
  const skills = [
    {
      title: "ASP.NET",
      description: "Developing web APIs and MVC-based web applications using ASP.NET."
    },
    {
      title: "Azure Cloud",
      description: "Deploying and managing cloud-based applications with Azure Functions, Azure Service Bus, Azure Communication Services and related resources."
    },
    {
      title: "C# .NET",
      description: "Object-oriented programming with LINQ, async/await and modern .NET features."
    },
    {
      title: "Data Communication & Security",
      description: "Implementing secure REST APIs with JWT, HTTPS and best practices for authentication and authorization."
    },
    {
      title: "Database",
      description: "Working with relational and NoSQL databases using EF Core, ADO.NET, SQL Server, T-SQL and MongoDB."
    },
    {
      title: "DevOps",
      description: "Working with CI/CD pipelines, Azure DevOps, GitHub Actions and cloud deployments."
    },
    {
      title: "Frontend",
      description: "Building modern and responsive web interfaces with JavaScript, TypeScript, React, HTML and CSS."
    },
    {
      title: "Microservices & gRPC",
      description: "Designing and implementing distributed systems and microservices using gRPC and REST for scalable service-to-service communication."
    },
    {
      title: "Object-Oriented Analysis & Design",
      description: "Applying design patterns, SOLID principles and UML to create maintainable software architectures."
    },
    {
      title: "Testing",
      description: "Writing automated unit and integration tests to ensure reliability and quality, using tools such as xUnit and in-memory databases."
    }
  ];

  return (
    <section id="skills" className="container py-5 text-center">
      <div className="container">
        <h2 className="fw-bold" data-aos="fade-up">Skills</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2">
          {skills.map((skill, index) => (
            <div className="col" key={index}>
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
