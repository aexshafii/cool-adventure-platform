import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    contentfulHero(contentful_id: { eq: "4a0G8FiJXTHdgtkeYHcbEA" }) {
      aboveText
      mainHeader
      subText
      mainCta
      secondaryCta
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)
  const heroData = data.contentfulHero

  const { aboveText, mainHeader, subText, mainCta, secondaryCta } = heroData
  return (
    <>
      <section className="hero-section">
        <article>
          <h2> {aboveText}</h2>
          <h1>{mainHeader}</h1>

          <h3>{subText}</h3>
          <div className="hero-ctas">
            <Link to="/contact" className="btn hero-btn">
              {mainCta} <span className="arrow-span">{"›"}</span>
            </Link>
            <Link to="/contact" className="hero-btn btn grey">
              {secondaryCta} <span className="arrow-span">{"›"}</span>
            </Link>
          </div>
        </article>
      </section>
    </>
  )
}

export default Hero
