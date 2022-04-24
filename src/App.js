import "./App.css";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import About from "./About";
import { useState } from "react";

function App() {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  return (
    <BrowserRouter basename={`anngineer.com` || "" || window.location.pathname}>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  dropDownVisible={dropDownVisible}
                  setDropDownVisible={setDropDownVisible}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  dropDownVisible={dropDownVisible}
                  setDropDownVisible={setDropDownVisible}
                />
              }
            />
          </Routes>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
