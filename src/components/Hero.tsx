import heroImage from "../assets/img/hero-bg3.webp";
import ReactTypingEffect from "react-typing-effect";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="hero" className="hero section dark-background">
      <img src={heroImage} alt="" data-aos="fade-in" className="" />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Mario Ezeobele</h2>
        <div className="d-inline type-container" style={{fontSize: '26px'}}>
          I'm{" "}
          <ReactTypingEffect
            text={[
              "a .Net Developer",
              "a React Developer",
              "an Angular Developer",
            ]}
            speed={100}
            eraseDelay={2000}
            typingDelay={500}
          />
        </div>
      </div>
    </Element>
  );
};

export default Hero;
