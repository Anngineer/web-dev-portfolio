import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";

const About = ({ dropDownVisible, setDropDownVisible }) => {
  useEffect(
    () => scroll.scrollTo(0, { duration: 100, delay: 0, smooth: "linear" }),
    []
  );
  return (
    <div className="about">
      <Nav
        location={"about"}
        dropDownVisible={dropDownVisible}
        setDropDownVisible={setDropDownVisible}
      />

      <div id="about-section">
        <div className="about-header-wrapper">
          <div className="top left"></div>
          <h2>About</h2>
          <div className="bottom right"></div>
        </div>
        <div className="about-description">
          <div className="description-block-1">
            <h3>Skills</h3>
            <p>
              I develop responsive websites using HTML and CSS/SCSS alongside
              vanilla JavaScript. For component-based websites, I use the
              JavaScript library React with JSX, using Axios to interface with
              APIs. Depending on the theme, I may use Semantic UI React or
              Bootstrap for additional stylistic frameworks. <br />
              <br />
              VSCode is my go-to code editor, and I work with Git to review and
              update my repositories hosted on GitHub.
            </p>
          </div>
          <div className="description-block-2">
            <h3>Design Process</h3>
            <p>
              Generally, I start off by identifying the needs of a client and
              their user, then wire-framing possible website solutions by hand.
              After that, with images licensed from Envato Elements, I create
              multiple wire frames in InVision Studio. User feedback helps to
              narrow down which design to use, and I take that into account
              while editing the graphics in Affinity Designer.{" "}
            </p>
          </div>
          <div className="description-block-2">
            <h3>Ongoing</h3>
            <p>
              While studying software engineering, I plan to contribute to open
              source projects on{" "}
              <a
                href="https://github.com/Anngineer"
                style={{ color: "#43b1b9" }}
              >
                GitHub
              </a>
              .
              <br />
              <br />I am looking for freelance, part-time, and full-time work.
              If you would like to connect, please feel free to email me at{" "}
              <a
                href={"mailto:anngineer@gmail.com"}
                style={{ color: "#43b1b9" }}
              >
                Anngineer@gmail.com
              </a>{" "}
              and add me on&nbsp;
              <a
                href="www.linkedin.com/in/anngineer"
                style={{ color: "#43b1b9" }}
              >
                LinkedIn
              </a>
              !
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
