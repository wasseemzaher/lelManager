import React from "react";
import firebase from "../db/firebase";
import Product from "./product";
// import productDataSubscribe from "../db/productDataSubscribe"

export default function ListProducts(props) {
  
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
        {
        products.map((product, index) => {
          <li key={index}>
            {console.log("product = ", product)}
            <Product product={product} mode={props.mode}/>
          </li>;
        })}
      </ul>
      <h3> success</h3>
    </div>
  );
}
