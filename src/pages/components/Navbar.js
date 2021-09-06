import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.svg"
import { FiAlignJustify } from "react-icons/fi"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="brackets-logo" />
          </Link>
          <button>
            <FiAlignJustify />
          </button>
        </div>

        <div className="nav-link contact-link">
          <div className={"nav-links show-links"}>
            <Link
              to="/recipes"
              className="nav-link"
              activeClassName="active-link"
            >
              What's Included
            </Link>
            <Link to="/tags" className="nav-link" activeClassName="active-link">
              Sign in
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
            >
              Pricing{" "}
            </Link>
            <Link to="/contact" className="btn">
              Get Started{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
