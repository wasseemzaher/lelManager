import React from "react";
import { ProductInput } from "../components/productInput";
import firebase from "../db/firebase";
import UploadMedia from "./uploadMedia";

export default function AddProduct() {
  const [products, setProducts] = React.useState([]);
  const [newProductName, setNewProductName] = React.useState();
  const [newProductId, setNewProductId] = React.useState();
  const [newProductMedia, setNewProductMedia] = React.useState();
  const [newProductPrice, setNewProductPrice] = React.useState();
  const [newProductStock, setNewProductStock] = React.useState();
  const [newProductNotes, setNewPoductNotes] = React.useState();
  const [newProductDescription, setNewProductDescription] = React.useState();
  const [newProductDisplay, setNewProductDisplay] = React.useState();
  const [newProductInstructions, setNewProductInstructions] = React.useState();
  const [newProductTags, setNewProductTags] = React.useState();
  const [newProductSalePrice, setNewProductSalePrice] = React.useState();

  const onAdd = () => {
    const db = firebase.firestore();
    const storage = firebase.storage();

    // const = newProductMedia
    const newProduct = {
      name: newProductName,
      media: newProductMedia,
      price: Number(newProductPrice),
      salePrice: Number(newProductSalePrice),
      stock: Number(newProductStock),
      notes: newProductNotes,
      description: newProductDescription,
      display: document.getElementById("newProductDisplay").checked,
      instructions: newProductInstructions,
      // tags: newProductTags,
    };
    db.collection("products").add(newProduct);
    console.log("newProductId= ", newProductId);
  };

  return (
    <ul>
      <label htmlFor="newProductName">Name </label>
      <input
        id="newProductName"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
      />
      <br />
      

      <label htmlFor="newProductPrice">Price </label>
      <input
        type="number"
        id="newProductPrice"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
      />
      <br />

      <label htmlFor="newProductStock">Stock </label>
      <input
        id="newProductStock"
        type="number"
        value={newProductStock}
        onChange={(e) => setNewProductStock(e.target.value)}
      />
      <br />

      <label htmlFor="newProductSalePrice">Sale Price </label>
      <input
        id="newProductSalePrice"
        type="number"
        value={newProductSalePrice}
        onChange={(e) => setNewProductSalePrice(e.target.value)}
      />
      <br />

      <label htmlFor="newProductNotes">Notes </label>
      <input
        id="newProductNotes"
        value={newProductNotes}
        onChange={(e) => setNewPoductNotes(e.target.value)}
      />
      <br />

      <label htmlFor="newProductDescription">Description </label>
      <input
        id="newProductDescription"
        value={newProductDescription}
        onChange={(e) => setNewProductDescription(e.target.value)}
      />
      <br />

      <label htmlFor="newProductInstructions">Instructions </label>
      <input
        id="newProductInstructions"
        value={newProductInstructions}
        onChange={(e) => setNewProductInstructions(e.target.value)}
      />
      <br />

      {/* <label htmlFor="newProductTags">Tags </label>
        <input
          id="newProductTags"
          value={newProductTags}
          onChange={e => setNewProductTags(e.target.value)}
        />
        <br /> */}

      <label htmlFor="newProductDisplay">Show product? </label>
      <input
        type="checkbox"
        id="newProductDisplay"
        name="on"
        value={newProductDisplay}
        checked
        onChange={(e) =>
          setNewProductDisplay(
            !document.getElementById("newProductDisplay").checked
          )
        }
      />
      <br />

      <label htmlFor="newProductMedia">Media </label>
      <UploadMedia />
      <br />

      <button onClick={onAdd}>Add New Product</button>

      {products.map((product) => (
        <li key={product.name}>
          <ProductInput product={product} />
        </li>
      ))}
    </ul>
    // <ListProducts />
  );
}
