import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./view/landing_page";
import HelpPage from "./view/help_page";

function App() {
  return (
    <Router>
      <div className="page content">

        <Route exact path="/" ><LandingPage /></Route>
        <Route path="/help"><HelpPage /></Route>

      </div>
    </Router>

  );
}
export default App;
