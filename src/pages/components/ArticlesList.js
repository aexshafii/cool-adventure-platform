import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
const ArticlesList = ({ articles = [] }) => {
  return (
    <div className="recipes-list">
      {articles.map(article => {
        const { title, id } = article
        console.log(id)
        return (
          <div key="" className="recipe">
            <h4>{article.title}</h4>

            <p>{article.parapgraph}</p>
            <GatsbyImage image={article.image.gatsbyImageData} alt={title} />
            <Link to="/">
              Learn More<span className="arrow-span">{"›"}</span>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesList
