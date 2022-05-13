import Blog from "./container/Blog";
import "./App.css";
import Testing from "./container/Testing";

function App() {
  const numbers = [1, 2, 3, 5];
  const posts = [
    { id: 1, title: "Hello World", content: "Welcome to learning React!" },
    {
      id: 2,
      title: "Installation",
      content: "You can install React from npm.",
    },
  ];

  const listitems = numbers.map((numbers, i) => {
    // console.log(numbers);
    console.log(i);
    console.log(numbers);
    // return <li>{numbers}</li>; warning:-Each child in a list should have a unique "key" prop.
    return <li key={numbers.toString()}>{numbers}</li>;
    // return <li key={i}>{numbers}</li>;
  });
  return (
    <div>
      <center>
        <h2>List and Key</h2>
        <p>
          A “key” is a special string attribute you need to include when
          creating lists of elements in React.
        </p>
        <h3>
          Keys are used to React to identify which items in the list are
          changed, updated, or deleted.
        </h3>
        {/* <div>{listitems}</div> */}
      </center>
      <h3>Keys Must Only Be Unique Among Siblings</h3>
      <Blog posts={posts} />
      <p>How to pass key from parent to child components in React</p>
      <Testing key={numbers.toString()} value={numbers.toString()} />
    </div>
  );
}

export default App;
