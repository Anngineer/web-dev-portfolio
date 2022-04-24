import Nav from "./Nav";
// images for portfolio
import characterintro1 from "./images/characterintro1.jpg";
import characterintro2 from "./images/characterintro2.jpg";
import forestfriend1 from "./images/forestfriend1.jpg";
import forestfriend2 from "./images/forestfriend2.jpg";
import ResourceHub1 from "./images/ResourceHub1.jpg";
import ResourceHub2 from "./images/ResourceHub2.jpg";
import tododog1 from "./images/tododog1.jpg";
import WritingBlog1 from "./images/WritingBlog1.jpg";
import WritingBlog2 from "./images/WritingBlog2.jpg";

const Home = ({ dropDownVisible, setDropDownVisible }) => {
  return (
    <div className="home">
      <Nav
        location={"home"}
        dropDownVisible={dropDownVisible}
        setDropDownVisible={setDropDownVisible}
      />

      {/* Introduction Section */}

      <section id="introduction-section">
        <header className="intro-text-wrapper">
          <h1>Hey there! I'm Ann Bridge,</h1>
          <h2>web developer and researcher.</h2>
        </header>
      </section>

      {/* Portfolio Section  */}

      <section id="portfolio-section">
        <div classname="portfolio-header-wrapper">
          <div className="top left"></div>
          <h2>Portfolio</h2>
          <div className="bottom right"></div>

          <div className="grid-wrapper">
            <div className="portfolio-grid">
              <div className="grid-item-1">
                <a href={"https://anngineer.github.io/character-creator/"}>
                  <article className="portfolio-example">
                    <img
                      src={characterintro1}
                      className="hide-on-hover"
                      alt="preview of Character Creator website showing illustration of a man talking"
                    />
                    <img
                      src={characterintro2}
                      className="show-on-hover"
                      alt="preview of Character Creator website showing illustration of a man talking"
                    />

                    <h3> Character Creator</h3>
                    <p>
                      Jumping into tabletop games can be intimidating! Using
                      D&D's 5th Edition API, this website steps users through
                      the first stages of choosing their character. Try out the
                      tutorial if you prefer dialogue-style interactions or dive
                      right into the cave if you're adventerous!{" "}
                    </p>
                    <p className="tags">
                      &bull; React with State and JSX &bull; React Router Dom v5
                      &bull; Axios &bull; Semantic UI React &bull; Javascript
                      &bull; HTML &bull; CSS/SCSS &bull; HTML &bull;
                    </p>
                  </article>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact-section">
        <h2>Contact</h2>
      </div>
    </div>
  );
};
export default Home;
