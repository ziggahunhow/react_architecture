import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import Counter from "./components/Counter";
import Goto from "./components/Goto";
import ComplexStateManagement from "./components/ComplexStateManagement";
import ContextAndReducer from "./components/ContextAndReducer";
import CacheContent from "./components/CacheContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Counter />
              <Goto />
              <ComplexStateManagement />
              <CacheContent />
              <ContextAndReducer />
            </div>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
