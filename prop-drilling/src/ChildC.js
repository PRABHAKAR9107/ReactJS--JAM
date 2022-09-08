import React from "react";
import { data } from "./App";
function ChildC({ ChildB }) {
  return (
    <div>
      <h3>
        Data is coming from ChildB to ChildC:-
        {ChildB}
      </h3>
      <div>
        <data.Consumer>
          {(student) => {
            return (
              <div>
                <h3>
                  My name is {student.name} .I am studying in class{" "}
                  {student.class}
                </h3>
              </div>
            );
          }}
        </data.Consumer>
      </div>
    </div>
  );
}

export default ChildC;
