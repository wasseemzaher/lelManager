import React from "react";
import Layout from "../components/layout";
import { ProductInput } from "../components/productInput";
import AddProduct from "../components/addProduct";
import ListProducts from "../components/listProducts"
export default function Manage() {
  return (
    <div>
      <h3>Manage Page</h3>
      <AddProduct/>
      <ListProducts/>
    </div>
  );
}
