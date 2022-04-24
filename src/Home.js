import Nav from "./Nav";
const Home = ({ dropDownVisible, setDropDownVisible }) => {
  return (
    <div className="home">
      <Nav
        location={"home"}
        dropDownVisible={dropDownVisible}
        setDropDownVisible={setDropDownVisible}
      />
      <section id="introduction-section">
        <header className="intro-text-wrapper">
          <h1>Hey there! I'm Ann Bridge,</h1>
          <h2>web developer and researcher.</h2>
        </header>
      </section>
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
