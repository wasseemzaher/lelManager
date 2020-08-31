import React from "react"
import NavigationBar from "../layout/navigationBar"
import PageBody from "../layout/body"

 const Layout = (props) => (
    <div >
      <NavigationBar />
      <PageBody>{props.children}</PageBody>
    </div>
 );

export default Layout;