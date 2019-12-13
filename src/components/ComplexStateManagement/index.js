import React, { useEffect, useReducer } from "react";

import ComplexInput from "./ComplexInput";

const propTypes = {};

function reducer(state, action) {
  switch (action.type) {
    case "user update":
      return { ...state, [action.payload.name]: action.payload.value };
    case "api call":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      throw new Error();
  }
}

function ComplexStateManagement(props) {
  const initialUserState = { title: "john", id: 5, userId: "bob" };
  const [state, dispatch] = useReducer(
    reducer,
    initialUserState,
    () => initialUserState,
    100
  );

  const onChange = (name, value) => {
    dispatch({ type: "user update", payload: { name, value } });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => {
        Object.keys(json).forEach(key => {
          dispatch({
            type: "api call",
            payload: { name: key, value: json[key] }
          });
        });
      });
  }, []);

  return (
    <>
      <h2>Complex State Management</h2>
      <h3>{`${state.title} ${state.id} ${state.userId}`}</h3>
      <ComplexInput name="title" onChange={onChange} value={state.title} />
      <ComplexInput name="id" onChange={onChange} value={state.id} />
      <ComplexInput name="userId" onChange={onChange} value={state.userId} />
    </>
  );
}

ComplexStateManagement.propTypes = propTypes;

export default ComplexStateManagement;
