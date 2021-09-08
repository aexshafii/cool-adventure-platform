import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import GbiBridged from "../bg-image"
import "normalize.css"
import "../assets/main.css"
import "../assets/custom.css"
const Layout = ({ children }) => {
  const LayoutWrapper = styled.section`
    main {
      padding: 0px;
      position: relative;
      z-index: 15;
      background-color: #ff0000;
    }
  `
  return (
    <LayoutWrapper>
      <Navbar></Navbar>
      {children}
    </LayoutWrapper>
  )
}

export default Layout
