import React, { useContext, useState, useEffect } from "react";
import { ContextAndReducerContext } from "./ContextAndReducerContext";
import NestedChild from "./NestedChild";
import PropTypes from "prop-types";

function ChildFirst() {
  const contextData = useContext(ContextAndReducerContext);
  const [id, setId] = useState(0);
  const handleClick = () => {
    setId(i => i + 3);
  };

  useEffect(() => {
    if (id > 0) {
      contextData.update({ type: "user update", payload: id });
    }
  }, [id]);

  return (
    <div className="flex">
      <p style={{ marginRight: "10px" }}>First child: </p>
      <p>{contextData.item.id}</p>
      <button onClick={handleClick}>Click me to update id</button>
      <NestedChild />
    </div>
  );
}

ChildFirst.propTypes = {};

export default ChildFirst;
