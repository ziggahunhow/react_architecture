import React, { useState } from "react";
import useSWR from "swr";
import PropTypes from "prop-types";
import ApiComponent from "./ApiComponent";
import CacheMany from "./CacheMany";

function CacheContent(props) {
  const [apiComponent, setApiComponent] = useState(false);
  const fetcher = () =>
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        return json;
      });
  const { data, error } = useSWR("/todo/2", fetcher);

  const renderInitialApiCall = () => {
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>Loaded 5000 photos!</div>;
  };

  return (
    <div className="cacheContent">
      <h2>Cache API Data</h2>
      <button onClick={() => setApiComponent(i => !i)}>
        Toggle API call component
      </button>
      {renderInitialApiCall()}
      {apiComponent && <ApiComponent />}
      <CacheMany />
    </div>
  );
}

CacheContent.propTypes = {};

export default CacheContent;
