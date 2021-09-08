import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    contentfulArticle(contentful_id: { eq: "713HF2lNldcsOvTF34cwTU" }) {
      title
      parapgraph
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 200)
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
      <div className="feature-text-container">
        <h2> {title}</h2> <p> {parapgraph}</p>
      </div>
      <GatsbyImage className="feature-image" image={image} alt={title} />
    </>
  )
}

export default FeatureTwo
