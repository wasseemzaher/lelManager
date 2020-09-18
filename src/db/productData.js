import React from "react";
import firebase from "../db/firebase";

export default function productDataSubscribe() {

const [products, setProducts] = React.useState([]);
const db = firebase.firestore();
db.collection("products").onSnapshot(function (products) {
    setProducts(products);
});


  React.useEffect(() => {
    const db = firebase.firestore();

    //Subscribe to a db collection to update any changes in realtime.
    const unsubscribe = db.collection("products").onSnapshot((snapshot) => {
      const products = [];
      snapshot.forEach((doc) =>
        products.push({ ...doc.data(), id: doc.id })
      );
      setProducts(products);
    });
    return unsubscribe;

  }, []);

}