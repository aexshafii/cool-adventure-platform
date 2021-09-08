import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import Hero from "./components/Hero"
import SpotlightGrid from "./components/SpotlightGrid"

const GbiBridged = () => {
  const { backgroundImage123 } = useStaticQuery(
    graphql`
      query {
        backgroundImage123: file(
          relativePath: { eq: "hero-background@2x.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              webpOptions: { quality: 70 }
              quality: 50
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(backgroundImage123)
  return <BgImage image={pluginImage} className="masthead"></BgImage>
}
export default GbiBridged
