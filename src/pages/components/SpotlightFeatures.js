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
    }
  }
`

const FeatureOne = () => {
  const data = useStaticQuery(query)
  console.log(data.contentfulArticle.title)
  const featureOne = data.contentfulArticle
  console.log(featureOne)

  const { title, parapgraph } = featureOne
  console.log(parapgraph)
  return (
    <div>
      <SpotlightGrid title={title} parapgraph={parapgraph}></SpotlightGrid>
    </div>
  )
}
export default FeatureOne
