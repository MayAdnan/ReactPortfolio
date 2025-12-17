const Skills = () => {
  return (
    <section id="skills" className="container py-5 text-center">
      <h2 className="fw-bold">Skills</h2>
      <div className="row row-cols-2 row-cols-md-4 g-3 mt-4">
        <div className="col">ASP.NET
          <li> Developing web APIs and MVC-based web applications using ASP.NET. </li>
        </div>
        <div className="col">Azure Cloud
          <li> Deploying and managing cloud-based applications with Azure Functions, Azure Service Bus, Azure Communication Services, and related resources.</li>
        </div>
        <div className="col">C# .NET
          <li> Object-oriented programming with LINQ, async/await, and modern .NET features.</li>
        </div>
        <div className="col">Data Communication and Security
          <li>Implementing secure REST APIs with JWT, HTTPS, and best practices for authentication and authorization.</li>
        </div>
        <div className="col">Database
          <li> Working with relational and NoSQL databases using EF Core, ADO.NET, SQL Server, T-SQL, and MongoDB.</li>
        </div>
        <div className="col">DevOps
          <li> Working with CI/CD pipelines, Azure DevOps, GitHub Actions, and cloud deployments.</li>
        </div>
        <div className="col">Frontend
          <li> Building modern and responsive web interfaces with JavaScript, TypeScript, React, HTML, and CSS.</li>
        </div>
        <div className="col">Microservices, gRPC & REST Communication
          <li> Designing and implementing distributed systems and microservices using gRPC and REST for scalable service-to-service communication.</li>
        </div>
        <div className="col">Object-Oriented Analysis and Design
          <li> Applying design patterns, SOLID principles, and UML to create maintainable software architectures.</li>
        </div>
        <div className="col">Unit Testing & Integration Testing
          <li> Writing automated unit and integration tests to ensure reliability and quality, using tools such as xUnit and in-memory databases.</li>
        </div>
      </div>
    </section>

  );
};

export default Skills;
