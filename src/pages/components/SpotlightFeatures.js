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
  return (
    <div>
      <h4>All Articles</h4>
    </div>
  )
}
export default FeatureOne
