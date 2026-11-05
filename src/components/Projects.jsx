const work = [
  {
    title: "CMP → Elevate integration",
    client: "Global management consultancy, via Comprend",
    description:
      "A Python service that receives webhooks from Optimizely CMP and publishes posts through Elevate's REST API, with a separate step for images. Runs on Azure with Key Vault and APIM, PostgreSQL as database, and is tested with pytest, Postman and ngrok. I also document how the API actually behaves and take requirement questions directly with the client's team.",
    tags: ["Python", "REST API", "Webhooks", "Azure", "PostgreSQL", "pytest"],
  },
  {
    title: "Copy automation for L'Oréal Nordics",
    client: "L'Oréal, via Comprend",
    description:
      "Automates copy production in five languages. Copy is synced from Google Sheets into After Effects text layers, and translated with AI through seven n8n workflows (one per brand) with character limits per channel. Legally approved claims are injected into the prompt before translation so the approved wording is always used.",
    tags: ["n8n", "ExtendScript", "Apps Script", "AI", "Automation"],
  },
  {
    title: "Site search rebuilt on GraphQL",
    client: "Swedbank, via Comprend",
    description:
      "Part of the team rebuilding Swedbank's site search on GraphQL with Optimizely Graph.",
    tags: ["GraphQL", "Optimizely Graph", "TypeScript"],
  },
  {
    title: "Optimizely CMS development",
    client: "SCA, via Comprend",
    description:
      "New page-type properties with conditional rendering, and illustrations and descriptions in Swedish and English in the block picker so new editors find the right block faster.",
    tags: ["C#", "Optimizely CMS", ".NET"],
  },
];

const personal = [
  {
    title: "Real-time chat app",
    description: "TypeScript/React frontend talking to a C#/.NET backend over a REST API.",
    tags: ["TypeScript", "React", "C#", ".NET"],
    links: [
      { label: "Frontend", url: "https://github.com/MayAdnan/ChatAppFrontEnd" },
      { label: "Backend", url: "https://github.com/MayAdnan/ChatAppServerApi" },
    ],
  },
  {
    title: "CineMatch",
    description: "Movie web app built with ASP.NET Core, React, SQL Server and a REST API.",
    tags: ["ASP.NET Core", "React", "SQL Server"],
    links: [
      { label: "Backend", url: "https://github.com/MayAdnan/CineMatch" },
      { label: "Frontend", url: "https://github.com/MayAdnan/CineMatchFrontEnd" },
    ],
  },
  {
    title: "CarSim DevOps",
    description: "CI/CD pipeline with automated tests running in GitHub Actions.",
    tags: ["C#", "GitHub Actions", "CI/CD"],
    links: [{ label: "Repo", url: "https://github.com/MayAdnan/CarSim_DevOps" }],
  },
];

const ProjectCard = ({ project, index }) => (
  <div className="col" key={project.title}>
    <div className="project-card" data-aos="fade-up" data-aos-delay={100 + index * 50}>
      <h5>{project.title}</h5>
      {project.client && <p className="project-client">{project.client}</p>}
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>
      {project.links && (
        <div className="project-links">
          {project.links.map((l) => (
            <a href={l.url} target="_blank" rel="noopener noreferrer" key={l.url}>
              <i className="fa-brands fa-github"></i> {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="container py-5 text-center">
      <h2 className="fw-bold" data-aos="fade-up">Projects</h2>

      <h3 className="subheading" data-aos="fade-up">Client work at Comprend</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-1">
        {work.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.title} />
        ))}
      </div>

      <h3 className="subheading mt-5" data-aos="fade-up">Personal projects</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
        {personal.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
