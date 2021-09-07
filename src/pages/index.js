import React from "react"
import Layout from "./components/Layout"
import Images from "./components/Images"
import Hero from "./components/Hero"
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Images />
    </Layout>
  )
}
