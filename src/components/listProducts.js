import React from "react"
import firebase from "../db/firebase"

export default function ListProduct(){
    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
    const db = firebase.firestore()

    // Here is how you subscribe to the data to update any changes in values in realtime.
    const unsubscribe = db.collection("products").onSnapshot(snapshot => {
      const productsData = []
      snapshot.forEach(doc => productsData.push({ ...doc.data(), id: doc.id }))
      setProducts(productsData)
    })
    return unsubscribe
  }, []) }