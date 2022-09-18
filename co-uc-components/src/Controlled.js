import React, { useState } from "react";

function Controlled() {
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(" ");
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleSubmit = (e) => {
    console.log(fname, lname);
    e.preventDefault();
  };
  return (
    <div>
      <h3>Controlled Component</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />

        <br />
        <br />
        <textarea
          value={textarea}
          onChange={(e) => {
            setTextarea(e.target.value);
          }}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Controlled;
