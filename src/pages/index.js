import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Collections from "../components/collections"
import Reviews from "../components/reviews"

const heroData = {
  image: "hero.jpg",
  primaryText: (
    <>
      The Definitive<br/>
      Grilling <br/>
      Experience
    </>
  ),
  secondaryText: "Get the hybrid grill that is redefining outdoor living.",
  buttonText: "Buy Now",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      image={heroData.image}
      primaryText={heroData.primaryText}
      secondaryText={heroData.secondaryText}
      buttonText={heroData.buttonText}
    />
    <Collections />
    <Reviews />
  </Layout>
)

export default IndexPage
