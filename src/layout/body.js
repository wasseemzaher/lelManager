import React from "react"
import Header from "../components/header"

export default function PageBody({ children }) {
  return (
    <div >
      <Header headerText="Page Body" />
      {children}
    </div>
  )
}
