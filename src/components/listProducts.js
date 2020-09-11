import React from "react";
import firebase from "../db/firebase";
import Product from "./product";
// import productDataSubscribe from "../db/productDataSubscribe"

export default function ListProducts() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const db = firebase.firestore();

    // Subscribe to "products" collection to update any changes in realtime.
    const unsubscribe = db.collection("products").onSnapshot((snapshot) => {
      const productsData = [];
      snapshot.forEach((doc) =>
        productsData.push({ ...doc.data(), id: doc.id })
      );
      setProducts(productsData);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <ul>
        <li>
          {products.map((product, index) => {
            <Product key={product.id} product={product} mode="edit" />;
          })}
        </li>
      </ul>
      <h3> success</h3>
    </div>
  );
}
