import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const query = graphql`
  {
    contentfulArticle(contentful_id: { eq: "1cLtgG2MTXjOyoLtdqdRBa" }) {
      title
      parapgraph
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200)
      }
    }
  }
`
const FeatureThree = () => {
  const data = useStaticQuery(query)
  const featureThreeData = data.contentfulArticle
  const image = featureThreeData.image.gatsbyImageData
  const { title, parapgraph } = featureThreeData
  return (
    <>
      <div className="feature-text-container">
        <h2> {title}</h2> <p> {parapgraph}</p>
        <Link to="/">
          <p className="feature-link">
            Learn more <span className="arrow-span">{"›"}</span>
          </p>
        </Link>
      </div>
      <GatsbyImage className="feature-image phone" image={image} alt={title} />
    </>
  )
}

export default FeatureThree
