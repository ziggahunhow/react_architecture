import React, { useState, useEffect } from "react";

const propTypes = {};

function Counter(props) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(10);
  }, []);

  return (
    <div>
      <h2>Handle simple state and lifecycle: </h2>
      <h4>Counter</h4>
      <p>{counter}</p>
      <button type="button" onClick={() => setCounter(i => i + 1)}>
        Add
      </button>
    </div>
  );
}

Counter.propTypes = propTypes;

export default Counter;
