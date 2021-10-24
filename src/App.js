import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import LandingPage from "./view/landing_page";
import HelpPage from "./view/help_page";

function App() {
  return (
    <Router>
      <div>

          
            <Route path="/" ><LandingPage /></Route>
            <Route path="/help"><HelpPage /></Route>
          
          {/* 
          <Route path='/' component={LandingPage} />
          <Route path='help' component={HelpPage} /> */}

      </div>
    </Router>

  );
}
export default App;
