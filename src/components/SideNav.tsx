import profileImage from "../assets/img/profile_img.jpeg";
import { Link } from "react-scroll";

const SideNav = () => {
  const linkOptions = {
    spy: true,
    smooth: true,
    duration: 500,
    offset: -150,
  };
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>

      <div className="profile-img">
        <img src={profileImage} alt="" className="img-fluid rounded-circle" />
      </div>

      <a
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Mario Ezeobele</h1>
      </a>

      <div className="social-links text-center">
        <a
          href="https://www.x.com/francis_mario"
          target="_blank"
          className="twitter"
        >
          <i className="bi bi-twitter-x"></i>
        </a>
        <a
          href="https://www.facebook.com/marioezeobele"
          target="_blank"
          className="facebook"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://join.skype.com/invite/kerpMfLnFc5J"
          target="_blank"
          className="google-plus"
        >
          <i className="bi bi-skype"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mario-francis-ezeobele-42174375"
          target="_blank"
          className="linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://www.github.com/Mario-Francis"
          target="_blank"
          className="github"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link
              href="#hero"
              to="hero"
              {...linkOptions}
            >
              <i className="bi bi-house navicon"></i>Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              to="about"
              {...linkOptions}
            >
              <i className="bi bi-person navicon"></i> About
            </Link>
          </li>
          <li>
            <Link
              href="#resume"
              to="resume"
              {...linkOptions}
            >
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              to="contact"
              {...linkOptions}
            >
              <i className="bi bi-envelope navicon"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideNav;
