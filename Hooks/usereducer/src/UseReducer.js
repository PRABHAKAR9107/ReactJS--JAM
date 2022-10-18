import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  if (state >= 0) {
    switch (action) {
      case "add":
        return state + 1;
      case "delete":
        return state - 1;
      case "reset":
        return state;
      default:
        throw new Error("Unexpected value");
    }
  } else {
    return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <main>
        <section>
          <p>
            syntax:-
            <code> useReducer(reducer, initialState) </code>
          </p>
          <ul>
            <li>
              If you find yourself keeping track of multiple pieces of state
              that rely on complex logic, useReducer may be useful.
            </li>
            <li>The useReducer Hook is similar to the useState Hook.</li>
            <li>It allows for custom state logic.</li>

            <li>
              The reducer function contains your custom state logic and the
              initialStatecan be a simple value but generally will contain an
              object.
            </li>
            <li>
              The useReducer Hook returns the current state and a dispatch
              method.
            </li>
            <li>
              Dispatch : this function allows us to send actions to the reducer
            </li>
          </ul>
          <h3>{count}</h3>
          <div>
            <button onClick={() => dispatch("add")}>Add</button>
          </div>
          <div>
            <button onClick={() => dispatch("delete")}> Delete</button>
          </div>
          <div>
            <button onClick={() => dispatch("reset")}>Reset</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UseReducer;
