import React, { memo } from "react";

function childA({ todos, addTodo }) {
  console.log("Child Component");
  return (
    <div>
      childA
      <h3>hello Chiild</h3>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}

export default memo(childA);
