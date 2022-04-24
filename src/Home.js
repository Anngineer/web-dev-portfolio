import Nav from "./Nav";
const Home = ({ dropDownVisible, setDropDownVisible }) => {
  return (
    <div className="home">
      <Nav
        location={"home"}
        dropDownVisible={dropDownVisible}
        setDropDownVisible={setDropDownVisible}
      />
      <div id="intro-section" style={{ height: "100vh" }}>
        <h1>Home</h1>
      </div>
      <div id="portfolio-section" style={{ height: "100vh" }}>
        <h2>Portfolio</h2>
      </div>
      <div id="contact-section">
        <h2>Contact</h2>
      </div>
    </div>
  );
};
export default Home;
