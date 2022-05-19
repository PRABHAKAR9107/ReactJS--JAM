import React, { useState } from "react";

function ObjectuseState() {
  const [name, setName] = useState({ firstName: " ", lastName: " " });

  return (
    <div>
      <form>
        <h5>
          First Name:{" "}
          <input
            type="text"
            value={name.firstName}
            onChange={(e) => {
              setName({ ...name, firstName: e.target.value });
            }}
          />
        </h5>

        <div>
          <h5>
            Last Name :{" "}
            <input
              type="text"
              value={name.lastName}
              onChange={(e) => {
                setName({ ...name, lastName: e.target.value });
              }}
            />
          </h5>
        </div>
      </form>
      <p>
        Your Full name is {name.firstName} {name.lastName}
      </p>
      {JSON.stringify(name)}
    </div>
  );
}

export default ObjectuseState;
