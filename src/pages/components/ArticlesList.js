import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const ArticlesList = ({ articles = [] }) => {
  return (
    <div className="recipes-list">
      {articles.map(article => {
        const { title, id } = article
        console.log(id)
        return (
          <div key="" className="recipe">
            <GatsbyImage image={article.image.gatsbyImageData} alt={title} />
            <h4>{article.title}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesList
