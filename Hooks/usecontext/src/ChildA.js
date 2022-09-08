import React, { useContext } from "react";

import { myContext } from "./App";

function ChildA() {
  const user = useContext(myContext);
  console.log("user:", user);
  return (
    <div>
      <hr />
      <h2>Data is coming from Parent to ChildC component</h2>
      <h3>
        My Name is {user.name}. I am {user.age} years old
      </h3>
    </div>
  );
}

export default ChildA;
