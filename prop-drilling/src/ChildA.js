import React from "react";
import ChildB from "./ChildB";
function ChildA({ parent }) {
  return (
    <div>
      <h3>Data is coming from Parent to ChildA:- {parent}</h3>
      <ChildB ChildA={parent} />
    </div>
  );
}

export default ChildA;
