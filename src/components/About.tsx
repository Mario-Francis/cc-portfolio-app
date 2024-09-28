import profileImage from "../assets/img/profile_img.jpeg";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Dedicated and detail-oriented Software Developer with 5+ years of
          experience in strategic problem-solving and system analysis. With a
          solid background in .Net Applications Development using Asp.Net/Core
          MVC and Web API. Recognized for developing custom solutions that
          optimize business performance and generate positive customer reviews.
          An excellent verbal and written communicator that enjoys team
          collaboration and cultivating positive relationships to exceed goals.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profileImage} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Fullstack .Net Developer.</h2>
            <p className="fst-italic py-3">
              Developing high-performance web applications using the latest
              technologies in the .NET ecosystem, with a focus on delivering
              seamless user experiences and efficient backend architecture.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Website:</strong>{" "}
                    <a href="https://www.mariofc.com" target="_blank">
                      https://www.mariofc.com
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong> <span>+1 641 233 9537</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Availability:</strong>{" "}
                    <span>Fulltime/Contract</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Degree:</strong>{" "}
                    <span>Master’s Degree in Computer Science</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>marioezeobele@yahoo.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Preferred Work Mode:</strong> <span>Remote</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              With extensive experience in both frontend and backend
              development, I specialize in building scalable, secure web
              applications that meet the needs of modern businesses. I leverage
              my expertise in .NET, C#, React, Angular, and cloud technologies
              to create applications that enhance business productivity and user
              engagement. Always looking for new challenges and collaborations,
              I am dedicated to staying at the forefront of web development
              trends and best practices.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default About;
