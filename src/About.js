import Nav from "./Nav";
const About = () => {
  return (
    <div className="about">
      <Nav location={"about"} />
      <div id="about-section" style={{ height: "100vh" }}>
        <h2>About Section</h2>
      </div>
      <div id="contact-section" style={{ height: "100vh" }}>
        <h2>Contact Section</h2>
      </div>
    </div>
  );
};

export default About;
