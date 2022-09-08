import React, { useContext } from "react";
import { myContext } from "./App";
function ChildC() {
  const user = useContext(myContext);
  console.log("user:", user);
  console.log("myContext2:", myContext);

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

export default ChildC;
