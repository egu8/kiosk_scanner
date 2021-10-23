import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import LandingPage from "./view/landing_page"
function App() {
  return (
    <Router>
      <div>
          <Route path="/">
            <LandingPage />
          </Route>
      </div>
    </Router>
  );
}
export default App;
