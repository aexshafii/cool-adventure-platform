import React from "react"
import Navbar from "./Navbar"

import "normalize.css"
import "../assets/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  )
}

export default Layout
