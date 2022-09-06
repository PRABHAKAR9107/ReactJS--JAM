import React from "react";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  text-decoration: underline;
  margin: 1em;
  font-weight: 800;
`;
const Main = styled.div`
  text-align: center;

  font-size: 1.5em;

  margin: 1em;
  font-weight: 400;
`;

function Child(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <Main>
        <li>Props are just like properties</li>

        <li>They are read-only components.</li>

        <li>
          Props are immutable so we cannot modify the props from inside the
          component.
        </li>
      </Main>
    </div>
  );
}

export default Child;
