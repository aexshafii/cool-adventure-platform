import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

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
        <h2> {title}</h2> <div> {parapgraph}</div>
      </div>
      <GatsbyImage className="feature-image phone" image={image} alt={title} />
    </>
  )
}

export default FeatureThree
