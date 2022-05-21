import React from "react";

function Home(props) {
  console.warn("Home", props.data);
  return (
    <div>
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
          <button
            onClick={() =>
              props.addToCartHandler({ price: 50, name: "crompton table fan " })
            }
          >
            Add To Cart
          </button>
          <div>
            {" "}
            <button
              className="remove-btn"
              onClick={() => props.removeToCartHandler()}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
