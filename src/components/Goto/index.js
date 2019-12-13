import React, { useState } from "react";
import useUrl from "../share/customHooks/useUrl";

const propTypes = {};

function Goto(props) {
  const [url, setUrl] = useState(false);

  const handleUrlClick = url => setUrl(url);

  useUrl(url);

  const urlList = ["report", "expense", "user"];

  return (
    <div>
      <h2>Use custom hook to share lifecycle logic</h2>
      <h4>Go to these pages</h4>
      <p>Look at the URL!</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "200px"
          }}
        >
          {urlList.map(item => (
            <button key={item} onClick={() => handleUrlClick(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

Goto.propTypes = propTypes;

export default Goto;
