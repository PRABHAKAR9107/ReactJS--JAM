import React from "react";

function Home(props) {
  console.warn("Header", props.data);
  return (
    <div>
      <span className="cart-count">{props.data.length}</span>
      <h1> Home Component</h1>

      <div className="add-to-cart">
        <img src="/images/cart.webp" />
      </div>
    </div>
  );
}

export default Home;
