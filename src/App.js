import "./App.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
