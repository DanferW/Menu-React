import React from "react";

function Details(props) {
  return (
    <div className="bottom">
      <p className="info">{props.ingredients}</p>
      <p className="info">{props.price}</p>
    </div>
  );
}

export default Details;
