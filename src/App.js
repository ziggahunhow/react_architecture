import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Hooks from "./pages/Hooks";
import Performance from "./pages/Performance";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/hooks">
            <Hooks />
          </Route>
          <Route path="/performance">
            <Performance />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
