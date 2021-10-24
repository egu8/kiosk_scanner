import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./view/landing_page";
import HelpPage from "./components/help_page";
import CardPay from "./components/payCard_page";
import CashPay from "./components/payCash_page";

function App() {
  return (
    <Router>
      <div className="page content">

        <Route exact path="/" ><LandingPage /></Route>
        <Route path="/help"><HelpPage /></Route>
        <Route path="/pay1card"><CardPay /></Route>
        <Route path="/pay2cash"><CashPay /></Route>

      </div>
    </Router>

  );
}
export default App;
