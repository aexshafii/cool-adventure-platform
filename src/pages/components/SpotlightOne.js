import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const query = graphql`
  {
    contentfulSpotlight1(contentful_id: { eq: "7bgbg4N2Sy0JlO3v6lpU6O" }) {
      title
      paragraph
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 200
          quality: 100
        )
      }
    }
  }
`
const SpotlightOne = () => {
  const data = useStaticQuery(query)
  const spotlightOneData = data.contentfulSpotlight1
  const image = spotlightOneData.image.gatsbyImageData

  const { title, paragraph } = spotlightOneData
  return (
    <>
      <div className="spotlight-text-container">
        <h2> {title}</h2> <p> {paragraph}</p>
        <Link to="/">
          <p className="spotlight-link">
            Learn more <span className="arrow-span">{"›"}</span>
          </p>
        </Link>
      </div>
      <GatsbyImage
        className="spotlight-image"
        image={image}
        alt={title}
        width={100}
      />
    </>
  )
}

export default SpotlightOne
