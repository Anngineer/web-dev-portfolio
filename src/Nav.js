import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkToRoute } from "react-router-dom";
const Nav = ({ location }) => {
  return (
    <>
      {location === "home" && (
        <nav className="nav">
          <div id="left-nav">
            <LinkToRoute to="/">
              <div>Ann Bridge</div>
              <button className="dropdown-button" id="dropdown-button">
                <i className="fas fa-bars" alt="drop-down menu"></i>
              </button>
            </LinkToRoute>
          </div>
          <div id="right-nav">
            <LinkScroll
              to="portfolio-section"
              smooth={true}
              duration={1000}
              id="link-portfolio"
            >
              portfolio
            </LinkScroll>
            <LinkScroll
              to="contact-section"
              smooth={true}
              duration={1000}
              id="link-portfolio"
            >
              contact
            </LinkScroll>
            <LinkToRoute to="/about">About</LinkToRoute>
          </div>
        </nav>
      )}
      {location === "about" && (
        <nav className="nav">
          <div id="left-nav">
            <LinkToRoute to="/">
              <div>Ann Bridge</div>
              <button className="dropdown-button" id="dropdown-button">
                <i class="fas fa-bars" alt="drop-down menu"></i>
              </button>
            </LinkToRoute>
          </div>
          <div id="right-nav">
            <LinkToRoute to="/">portfolio</LinkToRoute>
            <LinkScroll
              to="contact-section"
              smooth={true}
              duration={1000}
              id="link-portfolio"
            >
              contact
            </LinkScroll>
            <LinkToRoute to="/about">About</LinkToRoute>
          </div>
        </nav>
      )}
    </>
  );
};
export default Nav;
