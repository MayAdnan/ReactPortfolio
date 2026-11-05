import CV from "../assets/CV.pdf";

const roles = [
  {
    title: "Comprend – Junior Full-stack Developer",
    meta: "April 2026 — Present · Full-time · Stockholm",
    tag: "Full-stack · .NET · TypeScript",
    summary:
      "Developer at a digital agency, working in client projects for Swedbank, L'Oréal and SCA in agile teams together with UX, project managers and the client.",
    bullets: [
      "Building an integration between Optimizely CMP and Elevate for a global management consultancy: a Python service that receives webhooks from CMP and publishes posts through Elevate's REST API, with a separate step for images. Runs on Azure with Key Vault and APIM, PostgreSQL as database, tested with pytest, Postman and ngrok. I document how the API actually behaves and take requirement questions directly with the client's team.",
      "Built an automation system for L'Oréal Nordics' copy production in five languages: copy synced from Google Sheets to After Effects text layers, and AI translation in n8n through seven workflows (one per brand) with character limits per channel. Legally approved claims are injected into the prompt before translation so the approved wording is always used.",
      "Stabilised that system in production: fixed encoding and performance issues, replaced unsafe eval() with JSON parsing, and made the scripts work on both Windows and Mac.",
      "Part of the team rebuilding Swedbank's site search on GraphQL with Optimizely Graph.",
      "Develop SCA's website in Optimizely CMS (C#): new page-type properties with conditional rendering, and illustrations and descriptions in Swedish and English in the block picker so new editors find the right block faster.",
      "Build AI agents and custom tools in Optimizely Agent Platform (Opal) connected to the client's content workflows.",
    ],
    stack:
      "TypeScript, React, C#, .NET, Python, GraphQL, REST APIs, webhooks, Optimizely (CMS, Graph, CMP, Agent Platform), PostgreSQL, Azure (Key Vault, APIM), n8n, pytest, Postman, Git, Jira",
  },
  {
    title: "Comprend – Software Developer Intern",
    meta: "November 2025 — April 2026 · Internship (LIA) · Stockholm",
    tag: "Full-stack · .NET",
    summary:
      "Internship in the same team, working on real client deliveries from day one. Hired directly after the internship.",
    bullets: [],
    stack: "C#, .NET, Optimizely CMS, React, TypeScript, SQL",
  },
  {
    title: "DentSmile – Dental Hygienist",
    meta: "2024 — 2026 · Sundsvall",
    tag: "Healthcare",
    summary: "Licensed dental hygienist with own patient responsibility.",
    bullets: [],
  },
  {
    title: "Tandläkargruppen Täby Centrum – Dental Hygienist",
    meta: "2018 — 2024 · Täby",
    tag: "Healthcare",
    summary:
      "Own patient responsibility, treatment planning and daily record keeping under the Swedish Patient Data Act and GDPR.",
    bullets: [
      "Responsible for patients with periodontitis, in close collaboration with periodontologists.",
      "Explained treatments and findings to patients every day, which is where I learned to make complex things understandable.",
    ],
    domain: "Dental care, patient record systems, patient data, regulatory compliance",
  },
  {
    title: "Folktandvården Mörby Centrum – Dental Hygienist / Dental Assistant",
    meta: "2016 — 2018 · Danderyd",
    tag: "Healthcare",
    summary: "Part-time as a licensed dental hygienist alongside my studies at Karolinska Institutet.",
    bullets: [],
  },
  {
    title: "Coop Vallentuna Centrum – Bakery Manager",
    meta: "2014 — 2019 · Vallentuna",
    tag: "Retail",
    summary: "Responsible for daily bakery operations, including baking, ordering and customer service.",
    bullets: [],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="container py-5">
      <h2 className="fw-bold text-center" data-aos="fade-up">Experience</h2>
      {roles.map((r, i) => (
        <div className="xp-card" data-aos="fade-up" data-aos-delay={100 + i * 50} key={r.title}>
          <div className="xp-head">
            <div>
              <h4 className="fw-semibold">{r.title}</h4>
              <p className="xp-meta">
                <i className="fa-regular fa-calendar"></i> {r.meta}
              </p>
            </div>
            <span className="chip chip-tag">{r.tag}</span>
          </div>
          <p className="xp-summary">{r.summary}</p>
          {r.bullets.length > 0 && (
            <ul className="xp-bullets">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
          {r.stack && (
            <p className="xp-stack"><strong>Stack:</strong> {r.stack}</p>
          )}
          {r.domain && (
            <p className="xp-stack"><strong>Domain:</strong> {r.domain}</p>
          )}
        </div>
      ))}
      <div className="text-center mt-4" data-aos="fade-up">
        <a href={CV} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
          <i className="fa-solid fa-download"></i> Download full CV
        </a>
      </div>
    </section>
  );
};

export default Experience;
