import React from "react";
import ProductCard from "./components/ProductCard";
import Products from "./products.js";
import EmployeeCard from "./components/EmployeeCard";
import empleados from "./empleados.js";

function createProductCard(product) {
  return (
    <ProductCard
      key={product.id}
      productName={product.name}
      price={product.price}
      image={product.image}
      ingredients={product.ingredients}
    />
  );
}
function createEmployeeCard(employee) {
  return (
    <EmployeeCard
      key={employee.id}
      employeeName={employee.name}
      description={employee.description}
      image={employee.image}
      position={employee.puesto}
    />
  );
}
function App() {
  return (
    <div>
      <div>{Products.map(createProductCard)}</div>

      <div>{empleados.map(createEmployeeCard)}</div>
    </div>
  );
}

export default App;
