import React from "react"
import Layout from "./components/Layout"
import GbiBridged from "./bg-image"
import Hero from "./components/Hero"
import SpotlightGrid from "./components/SpotlightGrid"

export default function Home() {
  return (
    <GbiBridged>
      <main className="page">
        <Layout>
          <Hero />
          <SpotlightGrid />
        </Layout>
      </main>
    </GbiBridged>
  )
}
