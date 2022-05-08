import React, { Component } from "react";
import Child from "./Child";
//From Parent to Child using Props
export default class Parent extends Component {
  state = { data: "Hello Props" };
  render() {
    return (
      <div>
        <Child dataFromParent={this.state.data} />

        <p>
          “Props” is a special keyword in React, which stands for properties and
          is being used for passing data from one component to another.
          Furthermore, props data is read-only, which means that data coming
          from the parent should not be changed by child components.
        </p>
      </div>
    );
  }
}

//Data handling through parent to child component in function component
// function Parent() {
//   const data = "Data from parent";
//   return (
//     <div>
//       <Child dataParentToChild={data} />
//     </div>
//   );
// }

// export default Parent;
