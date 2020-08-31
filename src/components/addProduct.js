import React from "react"
import Layout from "../components/layout"
import { ProductInput } from "../components/productInput"
import firebase from "../db/firebase"
import ListProducts from "./listProducts"

export default function AddProduct() {
  const [products, setProducts] = React.useState([])
  const [newProductName, setNewProductName] = React.useState()
  const [newProductMedia, setNewProductMedia] = React.useState()
  const [newProductPrice, setNewProductPrice] = React.useState()
  const [newProductStock, setNewProductStock] = React.useState()
  const [newProductNotes, setNewPoductNotes] = React.useState()
  const [newProductDescription, setNewProductDescription] = React.useState()
  const [newProductDisplay, setNewProductDisplay] = React.useState()
  const [newProductInstructions, setNewProductInstructions] = React.useState()
  const [newProductTags, setNewProductTags] = React.useState()
  const [newProductSalePrice, setNewProductSalePrice] = React.useState()

  //moved to a seperate component ListProducts
  // React.useEffect(() => {
  //   const db = firebase.firestore()

  //   // Here is how you subscribe to the data to update any changes in values in realtime.
  //   const unsubscribe = db.collection("products").onSnapshot(snapshot => {
  //     const productsData = []
  //     snapshot.forEach(doc => productsData.push({ ...doc.data(), id: doc.id }))
  //     setProducts(productsData)
  //   })
  //   return unsubscribe
  // }, [])

  const onAdd = () => {
    const db = firebase.firestore()

    // const newProductMediaArray = JSON.stringify(newProductMedia).split(",")

    const newProduct = {
      name: newProductName,
      // media: [newProductMediaArray],
      price: Number(newProductPrice),
      salePrice: Number(newProductSalePrice),
      stock: Number(newProductStock),
      notes: newProductNotes,
      description: newProductDescription,
      display: (document.getElementById("newProductDisplay").checked),
      instructions: newProductInstructions,
      // tags: newProductTags,
    }
    db.collection("products").add(newProduct)
  }

  return (
      <ul>
        <label for="newProductName">Name </label>
        <input
          id="newProductName"
          value={newProductName}
          onChange={e => setNewProductName(e.target.value)}
        />
        <br />

        {/* <label for="newProductMedia">Media </label>
        <input
          id="newProductMedia"
          type="text"
          value={newProductMedia}
          onChange={e => setNewProductMedia(e.target.value.split(", "))}
        />
        <br /> */}

        <label for="newProductPrice">Price </label>
        <input
          type="number"
          id="newProductPrice"
          value={newProductPrice}
          onChange={e => setNewProductPrice(e.target.value)}
        />
        <br />

        <label for="newProductStock">Stock </label>
        <input
          id="newProductStock"
          type="number"
          value={newProductStock}
          onChange={e => setNewProductStock(e.target.value)}
        />
        <br />

        <label for="newProductSalePrice">Sale Price </label>
        <input
          id="newProductSalePrice"
          type="number"
          value={newProductSalePrice}
          onChange={e => setNewProductSalePrice(e.target.value)}
        />
        <br />

        <label for="newProductNotes">Notes </label>
        <input
          id="newProductNotes"
          value={newProductNotes}
          onChange={e => setNewPoductNotes(e.target.value)}
        />
        <br />

        <label for="newProductDescription">Description </label>
        <input
          id="newProductDescription"
          value={newProductDescription}
          onChange={e => setNewProductDescription(e.target.value)}
        />
        <br />

        <label for="newProductInstructions">Instructions </label>
        <input
          id="newProductInstructions"
          value={newProductInstructions}
          onChange={e => setNewProductInstructions(e.target.value)}
        />
        <br />

        {/* <label for="newProductTags">Tags </label>
        <input
          id="newProductTags"
          value={newProductTags}
          onChange={e => setNewProductTags(e.target.value)}
        />
        <br /> */}

        <label for="newProductDisplay">Show product? </label>
        <input
          type="checkbox"
          id="newProductDisplay"
          name="on"
          value={newProductDisplay}
          checked
          // onChange={e => setNewProductDisplay(!document.getElementById("newProductDisplay").checked)}
        />
        <br />

        <button onClick={onAdd}>Add New Product</button>

        {products.map(product => (
          <li key={product.name}>
            <ProductInput product={product} />
          </li>
        ))}
      </ul>
      // <ListProducts />
  )
}
