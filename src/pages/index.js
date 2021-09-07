import React from "react"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import AllArticles from "./components/AllArticles"
import FeatureOne from "./components/SpotlightFeatures"
export default function Home() {
  return (
    <Layout>
      <FeatureOne></FeatureOne>
      <Hero />
    </Layout>
  )
}
