import Nav from "./Nav";
const About = ({ dropDownVisible, setDropDownVisible }) => {
  return (
    <div className="about">
      <Nav
        location={"about"}
        dropDownVisible={dropDownVisible}
        setDropDownVisible={setDropDownVisible}
      />

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
