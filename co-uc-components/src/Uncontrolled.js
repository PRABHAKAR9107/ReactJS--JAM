import React, { useRef } from "react";

function Uncontrolled() {
  const refEl = useRef();

  const handleSubmit = (e) => {
    console.log(refEl.current.value.toUpperCase());
    e.preventDefault();
  };
  return (
    <div>
      Uncontrolled;
      <form onSubmit={handleSubmit}>
        <input type="text" ref={refEl} defaultValue="Prabhakar" />
        {/* <h3>{refEl.current.value}</h3> */}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Uncontrolled;
