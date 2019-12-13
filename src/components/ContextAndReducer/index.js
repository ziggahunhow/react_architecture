import React from "react";
import PropTypes from "prop-types";
import { ContextAndReducerProvider } from "./ContextAndReducerContext";
import ChildFirst from "./ChildFirst";

function ContextAndReducer(props) {
  return (
    <div>
      <h2>Sending complex state to nested children</h2>
      <ContextAndReducerProvider>
        <ChildFirst />
      </ContextAndReducerProvider>
    </div>
  );
}

ContextAndReducer.propTypes = {};

export default ContextAndReducer;
