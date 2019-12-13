import React, { useReducer } from "react";

export const ContextAndReducerContext = React.createContext({});

export const ContextAndReducerProvider = props => {
  function reducer(state, action) {
    switch (action.type) {
      case "user update":
        return { ...state, id: action.payload };
      default:
        throw new Error();
    }
  }
  const initialUserState = { title: "john", id: 5, userId: "bob" };
  const [state, dispatch] = useReducer(
    reducer,
    initialUserState,
    () => initialUserState,
    100
  );
  return (
    <ContextAndReducerContext.Provider
      value={{
        item: state,
        update: dispatch
      }}
    >
      {props.children}
    </ContextAndReducerContext.Provider>
  );
};

export const ContextAndReducerConsumer = ContextAndReducerContext.Consumer;
