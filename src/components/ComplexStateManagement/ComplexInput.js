import React from "react";

const propTypes = {};

function ComplexInput({ name, value, onChange }) {
  const inputStyles = { margin: "10px", fontSize: "20px" };
  return (
    <input
      name={name}
      style={inputStyles}
      value={value}
      onChange={e => onChange(name, e.target.value)}
    />
  );
}

ComplexInput.propTypes = propTypes;

export default ComplexInput;
