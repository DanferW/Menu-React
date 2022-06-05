import React from "react";

function Empleados(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.employeeName}</h2>
        <img className="circle-img" src={props.image} alt="Employee_Img" />
      </div>
      <div>{props.description}</div>
    </div>
  );
}

export default Empleados;
