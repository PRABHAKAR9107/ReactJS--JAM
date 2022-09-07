import React, { useState } from "react";

function Arrayusestate() {
  const [items, setItems] = useState([]);
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
      {items.map((item, index) => (
        <li key={index}>{item.value}</li>
      ))}
    </div>
  );
}

export default Arrayusestate;
