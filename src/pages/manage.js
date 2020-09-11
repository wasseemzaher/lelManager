import React from "react";
import Product from "../components/product";
import ListProducts from "../components/listProducts"

export default function Manage() {
  return (
    <div>
      <h3>Add a new product:</h3>
      <Product mode="create"/>
      <h3>Defined Products:</h3>
      {/* <Product mode="edit"/> */}
      <ListProducts />
    </div>
  );
}
