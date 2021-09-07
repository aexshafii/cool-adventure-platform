import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <>
      <main className="page">
        <section className="hero-section">
          <article>
            <h2>AMERICA’S #1 RATED ADVENTURE PLATFORM</h2>
            <h1>Take control of your weekends</h1>

            <h3>Find adventure anywhere</h3>
            <div className="hero-ctas">
              <Link to="/contact" className="btn hero-btn">
                Get Started <span className="arrow-span">{"›"}</span>
              </Link>
              <Link to="/contact" className="hero-btn btn grey">
                Request a demo <span className="arrow-span">{"›"}</span>
              </Link>
            </div>
          </article>
        </section>
      </main>
    </>
  )
}

export default Hero
