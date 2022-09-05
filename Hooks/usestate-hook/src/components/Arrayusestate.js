import React, { useState } from "react";

function Arrayusestate() {
  const [items, setItems] = useState([1, 2]);
  console.log(items);

  const addItems = () => {
    setItems([
      ...items,
      {
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  return (
    <div>
      Array useState
      <div>
        <button onClick={addItems}>Random </button>
        {JSON.stringify(items)}
      </div>
      {items.map((item) => (
        <li key={item.value}>{item.value}</li>
      ))}
    </div>
  );
}

export default Arrayusestate;
