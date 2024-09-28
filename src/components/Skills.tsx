const Skills = () => {
  return (
    <section id="skills" className="skills section light-background">
      <div className="container section-title pb-1" data-aos="fade-up">
        <h2>Skills</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-12">
            <h6>
              <strong>Programming Languages</strong>
            </h6>
            <p>
              <i className="bi bi-chevron-right text-primary"></i> C#, HTML,
              CSS, Javascript, Typescript, XML, JSON, Java.
            </p>
          </div>
          <div className="col-lg-12">
            <h6>
              <strong>Frameworks</strong>
            </h6>
            <p>
              <i className="bi bi-chevron-right text-primary"></i> .Net, Asp.Net
              Core (MVC, Web API), .Net Framework, Razor, Entity Framework,
              Bootstrap, jQuery, Angular, REST, SOAP, Node.JS, Express, NUnit,
              XUnit.
            </p>
          </div>
          <div className="col-lg-12">
            <h6>
              <strong>Databases</strong>
            </h6>
            <p>
              <i className="bi bi-chevron-right text-primary"></i> MSSQL Server,
              MySQL, T-SQL, PostgreSQL, MongoDB.
            </p>
          </div>
          <div className="col-lg-12">
            <h6>
              <strong>Tools</strong>
            </h6>
            <p>
              <i className="bi bi-chevron-right text-primary"></i>Windows OS,
              Mac OS, Visual Studio, Visual Studio Code, Azure SSO, Azure App
              Services, Git, GitHub, GitLab, Jira, IIS, SharePoint, Docker,
              Containers, Microservices, Kubernetes, SDLC, RabbitMQ, gRPC, AMQP.
            </p>
          </div>
          <div className="col-lg-12">
            <h6>
              <strong>Collaboration & Leadership Skills</strong>
            </h6>
            <p>
              <i className="bi bi-chevron-right text-primary"></i>Excellent communication in technical and non-technical settings, Problem-solving in team-based environments, Leading troubleshooting sessions to resolve critical issues.
            </p>
          </div>

          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
