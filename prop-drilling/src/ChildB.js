import React from "react";
import ChildC from "./ChildC";

function ChildB({ ChildA }) {
  return (
    <div>
      <h3>Data is coming from ChildA to ChildB:- {ChildA}</h3>
      <ChildC ChildB={ChildA} />
    </div>
  );
}

export default ChildB;
