import { Link as LinkScroll } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkToRoute } from "react-router-dom";
// import { useState } from "react";
import Media from "react-media";
const Nav = ({ location, dropDownVisible, setDropDownVisible }) => {
  const handleDropDownButton = () => {
    setDropDownVisible(!dropDownVisible);
  };
  const closeDropDown = () => {
    setDropDownVisible(false);
  };

  const homeLargeNav = (
    <nav className="nav">
      <div id="left-nav">
        <LinkToRoute
          to="/"
          onClick={() =>
            scroll.scrollTo(0, { duration: 100, delay: 0, smooth: "linear" })
          }
        >
          <div>Ann Bridge</div>{" "}
        </LinkToRoute>
        <button
          className="dropdown-button"
          id="dropdown-button"
          alt="drop-down"
        >
          <i className="fas fa-bars" alt="drop-down menu"></i>
        </button>
      </div>
      <div id="right-nav">
        <LinkScroll
          to="portfolio-section"
          smooth="linear"
          delay={0}
          duration={450}
          id="link-portfolio"
        >
          portfolio
        </LinkScroll>
        <LinkScroll
          to="contact-section"
          smooth="linear"
          delay={0}
          duration={450}
          id="link-portfolio"
        >
          contact
        </LinkScroll>
        <LinkToRoute to="/about">about</LinkToRoute>
      </div>
    </nav>
  );
  const homeSmallNav = (
    <nav className="nav">
      <div id="left-nav">
        <LinkToRoute
          to="/"
          onClick={() =>
            scroll.scrollTo(0, { duration: 100, delay: 0, smooth: "linear" })
          }
        >
          <div>Ann Bridge</div>{" "}
        </LinkToRoute>
        <button
          className="dropdown-button"
          id="dropdown-button"
          alt="drop-down"
          onClick={() => {
            handleDropDownButton();
          }}
        >
          <i className="fas fa-bars" alt="drop-down menu"></i>
        </button>
      </div>
      {dropDownVisible && (
        <div id="right-nav">
          <LinkScroll
            to="portfolio-section"
            smooth="linear"
            delay={0}
            duration={450}
            id="link-portfolio"
            onClick={() => closeDropDown()}
          >
            portfolio
          </LinkScroll>
          <LinkScroll
            to="contact-section"
            smooth="linear"
            delay={0}
            duration={450}
            id="link-portfolio"
            onClick={() => closeDropDown()}
          >
            contact
          </LinkScroll>
          <LinkToRoute to="/about" onClick={() => closeDropDown()}>
            about
          </LinkToRoute>
        </div>
      )}
    </nav>
  );
  const aboutLargeNav = (
    <nav className="nav">
      <div id="left-nav">
        <LinkToRoute to="/">
          <div>Ann Bridge</div>
        </LinkToRoute>
        <button
          className="dropdown-button"
          id="dropdown-button"
          alt="drop-down"
        >
          <i className="fas fa-bars" alt="drop-down menu"></i>
        </button>
      </div>
      <div id="right-nav">
        <LinkToRoute to="/">portfolio</LinkToRoute>
        <LinkScroll
          to="contact-section"
          smooth="linear"
          delay={0}
          duration={450}
          id="link-portfolio"
        >
          contact
        </LinkScroll>
        <LinkToRoute to="/about">about</LinkToRoute>
      </div>
    </nav>
  );
  const aboutSmallNav = (
    <nav className="nav">
      <div id="left-nav">
        <LinkToRoute to="/">
          <div>Ann Bridge</div>
        </LinkToRoute>
        <button
          className="dropdown-button"
          id="dropdown-button"
          alt="drop-down"
          onClick={() => {
            handleDropDownButton();
          }}
        >
          <i className="fas fa-bars" alt="drop-down menu"></i>
        </button>
      </div>
      {dropDownVisible && (
        <div id="right-nav">
          <LinkToRoute to="/" onClick={() => closeDropDown()}>
            portfolio
          </LinkToRoute>
          <LinkScroll
            to="contact-section"
            smooth="linear"
            delay={0}
            duration={450}
            id="link-portfolio"
            onClick={() => closeDropDown()}
          >
            contact
          </LinkScroll>
          <LinkToRoute to="/about" onClick={() => closeDropDown()}>
            about
          </LinkToRoute>
        </div>
      )}
    </nav>
  );
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && location === "home" && homeSmallNav}
            {matches.medium && location === "home" && homeLargeNav}
            {matches.small && location === "about" && aboutSmallNav}
            {matches.medium && location === "about" && aboutLargeNav}
          </>
        )}
      </Media>
    </>
  );
};
export default Nav;
