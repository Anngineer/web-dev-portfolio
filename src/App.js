import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import { useState } from "react";

function App() {
  const [dropDownVisible, setDropDownVisible] = useState(false);

  return (
    <Router>
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
    </Router>
  );
}

export default App;
