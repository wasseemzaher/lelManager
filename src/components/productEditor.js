import React from 'react'

export default function ProductEditor(){
    const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [instructions, setInstructions] = React.useState("");
  const [salePrice, setSalePrice] = React.useState("");
//   const [tags, setNewProductTags] = React.useState([]);

    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection("products")
          .doc(product.id)
          .set({ ...product, name });
      };
    
      const onDelete = () => {
        const db = firebase.firestore();
        db.collection("products")
          .doc(product.id)
          .delete();
      };
<>
      <input value={name} onChange={(e) => {setName(e.target.value)}}/>
      <input value={price} onChange={(e) => {setPrice(e.target.value)}}/>
      <input value={salePrice} onChange={(e) => {setSalePrice(e.target.value)}}/>
      <input value={stock} onChange={(e) => {setStock(e.target.value)}}/>
      <input value={description} onChange={(e) => {setDescription(e.target.value)}}/>
      <input value={notes} onChange={(e) => {setNotes(e.target.value)}}/>
      <input value={instructions} onChange={(e) => {setInstructions(e.target.value)}}/>
      <input value={display} onChange={(e) => {(e.target.value)}}/>
      <button onClick={onUpdate}>Update</button> 
      <button onClick={onDelete}>Delete</button>
    </>
}