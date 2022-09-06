import React from "react";
import Child from "./Child";
import styled from "styled-components";

function Parent(props) {
  return (
    <div>
      <Child title="props" />
      {props.children}
    </div>
  );
}

const Title = styled.div`
  text-align: center;
`;

export default Parent;
