import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const query = graphql`
  {
    contentfulSpotlight2(contentful_id: { eq: "gEFUrt2qlASZUsLH1Vsr0" }) {
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

const SpotlightTwo = () => {
  const data = useStaticQuery(query)
  const spotlightTwoData = data.contentfulSpotlight2
  const image = spotlightTwoData.image.gatsbyImageData
  const { title, paragraph } = spotlightTwoData
  return (
    <>
      <div className="spotlight-text-container">
        <h2> {title}</h2> <p> {paragraph}</p>
        <p className="spotlight-link">
          <Link to="/">
            <p className="spotlight-link">
              Learn more <span className="arrow-span">{"›"}</span>
            </p>
          </Link>
        </p>
      </div>
      <GatsbyImage className="spotlight-image" image={image} alt={title} />
    </>
  )
}

export default SpotlightTwo
