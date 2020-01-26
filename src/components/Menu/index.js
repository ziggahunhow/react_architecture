import React, { useState } from "react";
import useUrl from "../share/customHooks/useUrl";

export default function Menu() {
  const [url, setUrl] = useState(false);
  const handleUrlClick = url => setUrl(url);
  useUrl(url);

  return (
    <div className="flex">
      <button type="button" onClick={() => handleUrlClick("performance")}>
        Performance
      </button>
    </div>
  );
}
