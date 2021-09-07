import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import SpacingGrid from "./SpotlightGrid"

import "normalize.css"
import "../assets/main.css"

const Layout = ({ children }) => {
  const LayoutWrapper = styled.section`
    main {
      padding: 0px;
    }
  `
  return (
    <LayoutWrapper>
      <Navbar></Navbar>
      {children}
      <SpacingGrid />
    </LayoutWrapper>
  )
}

export default Layout
