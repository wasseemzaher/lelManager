import React from 'react'
import firebase from '../db/firebase'

export default ListProducts =()=>{
db = firebase.firestore()

  products.map((product, index) => (
  <li key={index}>
    <ProductInput product={product} />
  </li>
))}