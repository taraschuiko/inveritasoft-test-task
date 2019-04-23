import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Router>
    </div>
  );
}

export default App;
