import React from "react";

function ChildC({ ChildB }) {
  return (
    <div>
      <h3>
        Data is coming from Parent to ChildC:-
        {ChildB}
      </h3>
    </div>
  );
}

export default ChildC;
