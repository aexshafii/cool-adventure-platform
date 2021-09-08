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

const FeatureTwo = () => {
  const data = useStaticQuery(query)
  const featureTwoData = data.contentfulSpotlight2
  const image = featureTwoData.image.gatsbyImageData
  const { title, paragraph } = featureTwoData
  return (
    <>
      <div className="feature-text-container">
        <h2> {title}</h2> <p> {paragraph}</p>
        <p className="feature-link">
          <Link to="/">
            <p className="feature-link">
              Learn more <span className="arrow-span">{"›"}</span>
            </p>
          </Link>
        </p>
      </div>
      <GatsbyImage className="feature-image" image={image} alt={title} />
    </>
  )
}

export default FeatureTwo
