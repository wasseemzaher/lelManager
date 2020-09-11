import React from "react";
import firebase from "../db/firebase";
import PreviewMedia from "./previewMedia";

export default function Product(props) {
  // props.mode = {"create" || "edit" || "view"}
  // props.productId

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [instructions, setInstructions] = React.useState("");
  const [salePrice, setSalePrice] = React.useState("");
  //   const [tags, setTags] = React.useState([]);
  const [files, setFiles] = React.useState([]);
  const [urls, setUrls] = React.useState([]);

  const chooseFiles = (e) => {
    if (props.mode === "create") {
      const arrFiles = Array.from(e.target.files);
      const arrUrls = [];
      arrFiles.map((file, index) => {
        arrUrls[index] = URL.createObjectURL(file);
        console.log("arrUrls[", index, "] = ", arrUrls[index]);
      });

      setFiles(arrFiles);
      setUrls(arrUrls);
    } 
  };

  const storePhoto = (productId) => {
    if (props.mode === "create" || props.mode === "edit") {
      const db = firebase.firestore();
      let storageURL = [];
      let storageRef;

      files.map((file, index) => {
        storageRef = firebase
          .storage()
          .ref()
          .child(productId + "/" + index);
        storageRef.put(file).then(function (snap) {
          storageURL[index] =
            snap.ref.location.bucket + "/" + productId + "/" + index;
          db.collection("products")
            .doc(productId)
            .update({
              media: firebase.firestore.FieldValue.arrayUnion(
                storageURL[index]
              ),
            });
        });
      });
      console.log(
        "added the following media file(s) to product: ",
        productId,
        storageURL
      );

      setFiles([]);
      setUrls([]);
    } 
  };

  const onAdd = () => {
    if (props.mode === "create") {
      const db = firebase.firestore();
      const product = {
        name: name,
        price: Number(price),
        salePrice: Number(salePrice),
        stock: Number(stock),
        notes: notes,
        description: description,
        display: document.getElementById("display").checked,
        instructions: instructions,
        // tags: Tags,
      };
      db.collection("products")
        .add(product)
        .then(function (docRef) {
          console.log("saving media files to product with ID ", docRef.id);
          storePhoto(docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding new product: ", error);
        });
    } 
  };

  function onClear() {

    if (props.mode === "create" || props.mode === "edit") {
      setName("");
      setPrice(Number(""));
      setStock(Number(""));
      setSalePrice(Number(""));
      setNotes("");
      setDescription("");
      setInstructions("");
      setDisplay(true);
      // setTags([]);
      setFiles([]);
      setUrls([]);
    }
  }
  // const onUpdate = () => {
  //   const db = firebase.firestore();
  //   db.collection("products")
  //     .doc(product.id)
  //     .set({ ...product, name });
  // };

  // const onDelete = () => {
  //   const db = firebase.firestore();
  //   db.collection("products").doc(product.id).delete();
  // };

  return (
    <>
      <label htmlFor="name">Name </label>
      <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="price">Price </label>
      <input
        type="number"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <label htmlFor="stock">Stock </label>
      <input
        id="stock"
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
      />
      <br />
      <label htmlFor="salePrice">Sale Price </label>
      <input
        id="salePrice"
        type="number"
        value={salePrice}
        onChange={(e) => setSalePrice(e.target.value)}
      />
      <br />
      <label htmlFor="notes">Notes </label>
      <input
        id="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <br />
      <label htmlFor="description">Description </label>
      <input
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label htmlFor="instrcutions">Instructions </label>
      <input
        id="instrcutions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
      />
      <br />
      {/* <label htmlFor="tags">Tags </label>
        <input
          id="tags"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
        <br /> */}
      <label htmlFor="display">Show product? </label>
      <input
        type="checkbox"
        id="display"
        name="on"
        value={display}
        checked
        onChange={(e) =>
          setDisplay(!document.getElementById("display").checked)
        }
      />
      <br />
      <label htmlFor="media">Media </label>
      <input id="input" type="file" onChange={chooseFiles} multiple />
      <br />
      <PreviewMedia arrSource={urls} />
      <br />

      <button onClick={onAdd}>Add New Product</button>
      <button onClick={onClear}>Clear data</button>
      {/* <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button> */}
    </>
  );
}
