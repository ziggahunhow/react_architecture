import React, { useState, useEffect } from "react";
import ChildWithMemo from "./ChildWithMemo";
import ChildNoMemo from "./ChildNoMemo";

export default function ReactMemo() {
  const [counter, setCounter] = useState(0);
  const [updateMemoCounter, setupdateMemoCounter] = useState(0);

  return (
    <div>
      <h2>React Memo Demo:</h2>
      <h4>Counter</h4>
      <p>{counter}</p>
      <button type="button" onClick={() => setCounter(i => i + 1)}>
        Add
      </button>
      <button type="button" onClick={() => setupdateMemoCounter(i => i + 1)}>
        Click me to update Child-With-Memo component
      </button>
      <ChildWithMemo counter={updateMemoCounter} />
      <ChildNoMemo />
    </div>
  );
}
