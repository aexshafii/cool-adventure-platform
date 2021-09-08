import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const query = graphql`
  {
    contentfulSpotlight3(contentful_id: { eq: "1zWoWgLvBVbjxsh1HXr4CC" }) {
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

const SpotlightThree = () => {
  const data = useStaticQuery(query)
  const spotlightThreeData = data.contentfulSpotlight3
  const image = spotlightThreeData.image.gatsbyImageData
  const { title, paragraph } = spotlightThreeData
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
        className="spotlight-image phone"
        image={image}
        alt={title}
      />
    </>
  )
}

export default SpotlightThree
