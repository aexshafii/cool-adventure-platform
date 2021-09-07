import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>constrained/default</h4>
        <StaticImage
          src="../assets/chopper@2x.png"
          alt="chopper"
          placeholder="tracedSVG"
          layout="constrained"
          as="section"
          className="example-img"
        />
        <h2> gatsby image</h2>
      </article>
      <article>
        <h4>fixed</h4>
        <StaticImage
          src="../assets/chopper@2x.png"
          alt="chopper"
          placeholder="blurred"
          layout="fixed"
          width={200}
          as="div"
          className="example-img"
        />
        <h2> gatsby image</h2>
      </article>
      <article>
        <h4>constrained/default</h4>
        <StaticImage
          src="../assets/chopper@2x.png"
          alt="chopper"
          placeholder="dominantColor"
          layout="fullWidth"
          as="section"
          className="article"
        />
        <h2> gatsby image</h2>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin 0 auto;
  display: grid;
  text-align: center;
  gap: 2rem;
  article {

  }
  @media (min-width: 992px) {
     grid-template-columns: 1fr 1fr 1fr;
     grid-auto-flow: row;

  }

`
export default Images
