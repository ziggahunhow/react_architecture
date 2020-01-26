import React from "react";
import logo from "../logo.svg";
import Counter from "../components/Counter";
import Goto from "../components/Goto";
import ComplexStateManagement from "../components/ComplexStateManagement";
import ContextAndReducer from "../components/ContextAndReducer";
import CacheContent from "../components/CacheContent";
import Menu from "../components/Menu";

export default function Hooks() {
  return (
    <div className="App-header">
      <Menu />
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <Goto />
      <ComplexStateManagement />
      <CacheContent />
      <ContextAndReducer />
    </div>
  );
}
