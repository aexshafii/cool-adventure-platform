import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.svg"
import { FiAlignJustify } from "react-icons/fi"
const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="brackets-logo" />
          </Link>
          <button className="nav-btn" onClick={() => setShow(!show)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className="nav-links-container">
          <div className={show ? "nav-links show-links" : "nav-links"}>
            <Link
              to="/whatsincluded"
              className="nav-link"
              activeClassName="active-link"
            >
              What's Included
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
            <div className="nav-link"></div>
            <Link to="/getstarted" className="btn contact-link">
              Get Started <span className="arrow-span">{"›"}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
