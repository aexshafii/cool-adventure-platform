import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SpotlightGrid from "./SpotlightGrid"
const query = graphql`
  {
    contentfulArticle(
      contentful_id: { eq: "nDx95pNngCTOYutTmJ5Sk" }
      image: {}
    ) {
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
  console.log(data.contentfulArticle.title)
  const featureOne = data.contentfulArticle
  console.log(featureOne.image.gatsbyImageData)
  const image = featureOne.image.gatsbyImageData

  const { title, parapgraph } = featureOne
  return (
    <div>
      <SpotlightGrid
        title={title}
        parapgraph={parapgraph}
        image={image}
      ></SpotlightGrid>
    </div>
  )
}
export default FeatureOne
