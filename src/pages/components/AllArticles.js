import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ArticlesList from "./ArticlesList"
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
          gatsbyImageData(layout: FIXED, placeholder: TRACED_SVG)
        }

        id
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
      <ArticlesList articles={articles}></ArticlesList>
    </div>
  )
}

export default AllArticles
