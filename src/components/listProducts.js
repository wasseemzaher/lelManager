import React from 'react'
import firebase from '../db/firebase'
import ProductEditor from './productEditor'

export default function ListProducts({products}) {
const db = firebase.firestore()

  products.map((product, index) => (
  <li key={index}>
    {/* <ProductInput product={product} /> */}
    <ProductEditor product={product} />
  </li>
))}