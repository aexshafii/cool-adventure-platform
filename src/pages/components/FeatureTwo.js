import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const query = graphql`
  {
    contentfulArticle(contentful_id: { eq: "713HF2lNldcsOvTF34cwTU" }) {
      title
      parapgraph
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`
const FeatureTwo = () => {
  const data = useStaticQuery(query)
  const featureTwoData = data.contentfulArticle
  const image = featureTwoData.image.gatsbyImageData
  const { title, parapgraph } = featureTwoData
  return (
    <>
      <h2> {title}</h2> <div> {parapgraph}</div>
      <GatsbyImage image={image} alt={title} />
    </>
  )
}

export default FeatureTwo
