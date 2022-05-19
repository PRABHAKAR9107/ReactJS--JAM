import React from "react";

function Home() {
  return (
    <div>
      <h1> Home Component</h1>
      <div className="add-to-cart">
        <img src="/images/cart.webp" />
      </div>
      <div className=" item-wrapper">
        <div className="img-wrapper item">
          <img src="./images/tablefan.jpg" />
        </div>
        <div className="text-wrapper">
          <span>Crompton Table fan</span>
          <br />
          <span>$50</span>
        </div>
        <div className="btn-wrapper">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
