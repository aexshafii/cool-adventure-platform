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
          <div className="nav-link contact-link">
            <Link
              to="/whats-included"
              className="nav-link"
              activeClassName="active-link"
            >
              What's included?
            </Link>
            <Link
              to="/pricing"
              className="nav-link"
              activeClassName="active-link"
            >
              Pricing
            </Link>
            <Link
              to="/signin"
              className="nav-link"
              activeClassName="active-link"
            >
              Sign in
            </Link>
            <Link to="/getstarted" className="nav-link" className="btn">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
