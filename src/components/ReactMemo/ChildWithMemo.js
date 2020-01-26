import React from "react";

const ChildWithMemo = ({ counter }) => {
  console.log("ChildWithMemo is being called here!!!");
  return <div></div>;
};

export default React.memo(ChildWithMemo);
