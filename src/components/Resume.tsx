const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Fullstack .NET Developer skilled in building scalable, secure web
          applications using .NET Core, React, and Azure. Passionate about
          delivering high-performance solutions.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Maharishi International University</h4>
              <h5>Jan 2023 - Oct 2025</h5>
              <p>
                <em>Fairfield, IA.</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>Chukwuemeka Odumegwu Ojukwu University</h4>
              <h5>2014 - 2018</h5>
              <p>
                <em>Anambra, Nigeria.</em>
              </p>
            </div>
            <h3 className="resume-title">Academic Projects</h3>
            <div className="resume-item">
              <h4>Racing Games</h4>
              <p>
                Designed and implemented a web application used to manage the
                collection of games created by different game companies.
              </p>
              <p className="mb-0">
                <strong>Technologies Used:</strong> Node, Express, Angular and
                MongoDB.
              </p>
              <p>
                <strong>Github url:</strong>{" "}
                <a
                  href="https://github.com/Mario-Francis/racing-games"
                  target="_blank"
                >
                  https://github.com/Mario-Francis/racing-games
                </a>
              </p>
            </div>
            <div className="resume-item">
              <h4>e-Registrar</h4>
              <p>
              Designed and implemented a web service that manages registration of students.The service was built with Java Spring Boot and PostgreSQL.
              </p>
              <p className="mb-0">
                <strong>Technologies Used:</strong> Java, Spring Boot, Maven, Postgre Sql, Spring Boot JPA.
              </p>
              <p>
                <strong>Github url:</strong>{" "}
                <a
                  href="https://github.com/Mario-Francis/cs425-swe-eregistrar-webapi"
                  target="_blank"
                >
                  https://github.com/Mario-Francis/cs425-swe-eregistrar-webapi
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>Nov 2023 - Present</h5>
              <p>
                <em>Gallup, Omaha, NE </em>
              </p>
              <ul>
                <li>
                  Redesigned the Manager access tool from MVC to react to
                  improve user experience and accessibility.
                </li>
                <li>
                  Implemented a job engine that helps in meeting the SAR
                  requirements to faciliatate easy processing of user/clients
                  requests.
                </li>
                <li>
                  Optimizing application codes leading to reduced cloud
                  infrastructure cost.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>Apr 2021 - Jan 2023</h5>
              <p>
                <em>eProcess International SA, Lagos, Nigeria.</em>
              </p>
              <ul>
                <li>
                  Spearheaded the development of a 2FA service, cutting payment
                  authorization costs by 30% using TOTP algorithm and Asp.Net
                  Core.
                </li>
                <li>
                  Implemented a solution that transformed strategy execution at
                  Ecobank Group, optimizing progress tracking using Angular
                  framework.
                </li>
                <li>
                  Developed a robust web service for the Ecobank Group to enable
                  seamless payment of the e-levy, ensuring compliance with the
                  regulations set forth by the Ghana government using Asp.Net
                  Core Web API.
                </li>
                <li>
                  Improved adherence with Ecobank's core values by leading the
                  implementation of a behavioural assessment solution which
                  facilitates obtaining 360-degree feedback for over 10k+ users
                  using Asp.Net Core MVC.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Software Developer</h4>
              <h5>Oct 2019 - Apr 2021</h5>
              <p>
                <em>
                  Secured Records Management Solutions (SRMS), Lagos, Nigeria.
                </em>
              </p>
              <ul>
                <li>
                  Automated the Retirement Savings Account Opening Process for
                  Radix Pensions by leveraging ABBYY FlexiCapture for efficient
                  data capture and integrating it with the existing system using
                  Asp.Net Web API.
                </li>
                <li>
                  Increased document digitization by implementing a web service
                  for Union Bank of Nigeria, enabling seamless integration with
                  the M-Files document management platform using Asp.Net Web
                  API.
                </li>
                <li>
                  Implemented a custom API gateway for Development Bank of
                  Nigeria, which led to streamlined API governance using Asp.Net
                  MVC and Web API.
                </li>
                <li>
                  Achieved an increase in document digitization and cost
                  reduction by developing a client-server-based solution for
                  Union Bank of Nigeria PLC, which facilitates the capture and
                  archival of transaction evidence across 200+ branches using
                  Asp.Net MVC, Web API, and C# WinForms.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
