import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        richText {
          raw
        }
        title
        node_locale
        image {
          gatsbyImageData
        }
      }
    }
  }
`

const AllArticles = () => {
  const data = useStaticQuery(query)
  const articles = data.allContentfulArticle.nodes
  console.log(articles)
  return (
    <div>
      <h4>All Articles</h4>
    </div>
  )
}

export default AllArticles
