import React from "react"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import SpotlightGrid from "./components/SpotlightGrid"
export default function Home() {
  return (
    <main className="page">
      <Layout>
        <Hero />
        <SpotlightGrid />
      </Layout>
    </main>
  )
}
