import React, { useContext } from "react";
import { ContextAndReducerContext } from "./ContextAndReducerContext";
import PropTypes from "prop-types";

function NestedChild(props) {
  const contextData = useContext(ContextAndReducerContext);
  return (
    <div className="flex">
      <p style={{ marginRight: "10px" }}>I'm a nested child: </p>
      <p>{contextData.item.id}</p>
    </div>
  );
}

NestedChild.propTypes = {};

export default NestedChild;
