import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.svg"
import { FaAlignJustify } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="brackets-logo" />
          </Link>
          <button className="nav-btn">
            <FaAlignJustify />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">
            What's included?
          </Link>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Pricing
          </Link>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Sign in
          </Link>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Get started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
