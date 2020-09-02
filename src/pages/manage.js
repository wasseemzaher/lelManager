import React from "react";
import { ProductInput } from "../components/productInput";
import AddProduct from "../components/addProduct";
import ListProducts from "../components/listProducts"
export default function Manage() {
  return (
    <div>
      <h3>Manage Products here</h3>
      <h3>Add a new product:</h3>
      <AddProduct/>
      <ListProducts/>
    </div>
  );
}
