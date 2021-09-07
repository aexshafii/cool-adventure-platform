import React from "react"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <>
      <main className="page">
        <section className="about-page">
          <article>
            <h5>AMERICA’S #1 RATED ADVENTURE PLATFORM</h5>
            <h1>Take Control of your Weekends</h1>

            <p>Find adenture anywhere</p>
            <Link to="/contact" className="btn">
              contact
            </Link>
            <Link to="/contact" className="btn grey">
              Request a demo
            </Link>
          </article>
        </section>
      </main>
    </>
  )
}

export default Hero
