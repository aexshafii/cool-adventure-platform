import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const query = graphql`
  {
    contentfulArticle(contentful_id: { eq: "nDx95pNngCTOYutTmJ5Sk" }) {
      title
      parapgraph
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`
const FeatureOne = () => {
  const data = useStaticQuery(query)
  const featureOneData = data.contentfulArticle
  const image = featureOneData.image.gatsbyImageData

  const { title, parapgraph } = featureOneData
  return (
    <>
      <h2> {title}</h2> <div> {parapgraph}</div>
      <GatsbyImage image={image} alt={title} />
    </>
  )
}

export default FeatureOne
