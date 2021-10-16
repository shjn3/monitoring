import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path={[
            "/setting",
            "/home",
            "/setting/:id",
            "/gstt",
            "/bd",
            "/camera",
            "/tcdl",
            "/dltb",
            "/tk",
          ]}
          render={(props) => <MainPage {...props} />}
        />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
