import React from "react";
import Img from "./Img";
import Details from "./Details";

function ProductCard(props) {
  return (
    <div>
      <div>
        <h2>{props.productName}</h2>
        <Img image={props.image} />
      </div>
      <Details ingredients={props.ingredients} price={props.price} />
    </div>
  );
}

export default ProductCard;
