import React from "react";
import useSWR from "swr";
import PropTypes from "prop-types";

function ApiComponent(props) {
  const { data, error } = useSWR("/todo/2");

  const renderData = () => {
    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>Loaded 5000 photos!</div>;
  };

  return (
    <div className="apiComponent">
      <h5>Using cached data from above!</h5>
      {renderData()}
    </div>
  );
}

ApiComponent.propTypes = {};

export default ApiComponent;
