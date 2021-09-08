import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

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
        <p className="feature-link">
          <Link to="/">
            <p className="feature-link">
              Learn more <span className="arrow-span">{"›"}</span>
            </p>
          </Link>
        </p>
      </div>
      <GatsbyImage className="feature-image" image={image} alt={title} />
    </>
  )
}

export default FeatureTwo
