import React from "react"
import Layout from "./components/Layout"
import Images from "./components/Images"
import Hero from "./components/Hero"
import AllArticles from "./components/AllArticles"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Images />
      <AllArticles />
    </Layout>
  )
}
