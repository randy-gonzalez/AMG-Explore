import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Collections from "../components/collections"
import Reviews from "../components/reviews"
import Cta from "../components/cta"
import Text from "../components/text"
import TextBox from "../components/textBox"
import PictureTextLeft from "../components/pictureTextLeft"
import PictureTextRight from "../components/pictureTextRight"
import PictureForm from "../components/pictureForm";

const heroData = {
  image: "hero.jpg",
  primaryText: (
    <>
      The Definitive Cooking
      <br />
      Experience & Flavor, Without
      <br />
      Giving Up Great Value
    </>
  ),
  secondaryText: (
    <>
      Even if you've never grilled on solid fuels before
      <br />
      Recommended by Forbes Magazine
    </>
  ),
  buttonText: "Buy Now",
}

const ctaData1 = {
  buttonAddress: "https://americanmadegrills.com/collections/all",
  primaryText: "You have a gas grill...",
  secondaryText: (
    <>
      But you want to grill better food, with better texture and better flavor,
      <br />
      by lighting up solid fuels for a chef quality taste
    </>
  ),
  buttonText: "Get Started",
}

const ctaData2 = {
  buttonAddress: "https://americanmadegrills.com/collections/all",
  primaryText: "Pass on a legacy",
  secondaryText: (
    <>
      Create positive memories with your family that can be passed down from
      generation to
      <br />
      generation, so that your children's children can experience the same joy.
    </>
  ),
  buttonText: "Buy Now",
}

const textData =
  "Burn any fuel for unique flavor. Cook with gas, charcoal, woodchips, or any combination. Which means an amazing mouth watering taste and entertaining cooking experience."

const textBoxData = {
  primaryText: "Burn it all",
  secondaryText: "American Made Grills",
}

const pictureTextData1 = {
  image: "product-amg-54-cart.jpg",
  primaryText: "Luxury grilling experience at an affordable price",
  secondaryText:
    "Get more performance and features for a third of the price of any comparable grill, which puts money back in your pocket.",
  buttonText: "Get Started",
}

const pictureTextData2 = {
  image: "product-amg-54-fuel.jpg",
  primaryText: "Charcoal ready in 3 minutes",
  secondaryText:
    "Using a new innovative design, now you can get your solid fuels up and running in 3 minutes, so that you can waste less time prepping, and more time enjoying.",
  buttonText: "Get Started",
}

const pictureTextData3 = {
  image: "product-amg-54-buttons.jpg",
  primaryText: "Award winning customer service + lifetime warranty",
  secondaryText:
    "Crafted using the highest standard materials and build quality right here in the USA, which means this is the last grill you will need to buy. No more buying a new grill every 2 years. Backed by the best lifetime warranty industry wide.",
  buttonText: "Get Started",
}

const pictureFormData = {
  image: "hero2.jpg",
  primaryText: "Free Informational PDF + Special Offer",
  secondaryText:
    "Tell us where to send your free informational pdf and special offer.",
  buttonText: "Get Started",
}

const LandingPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      image={heroData.image}
      primaryText={heroData.primaryText}
      secondaryText={heroData.secondaryText}
      buttonText={heroData.buttonText}
    />
    <Cta
      buttonAddress={ctaData1.buttonAddress}
      primaryText={ctaData1.primaryText}
      secondaryText={ctaData1.secondaryText}
      buttonText={ctaData1.buttonText}
    />
    <TextBox
      primaryText={textBoxData.primaryText}
      secondaryText={textBoxData.secondaryText}
    />
    <Collections />
    <Text text={textData} />
    <PictureTextLeft
      image={pictureTextData1.image}
      primaryText={pictureTextData1.primaryText}
      secondaryText={pictureTextData1.secondaryText}
      buttonText={pictureTextData1.buttonText}
    />
    <PictureTextRight
      image={pictureTextData2.image}
      primaryText={pictureTextData2.primaryText}
      secondaryText={pictureTextData2.secondaryText}
      buttonText={pictureTextData2.buttonText}
    />
    <PictureTextLeft
      image={pictureTextData3.image}
      primaryText={pictureTextData3.primaryText}
      secondaryText={pictureTextData3.secondaryText}
      buttonText={pictureTextData3.buttonText}
    />
    <PictureForm
      image={pictureFormData.image}
      primaryText={pictureFormData.primaryText}
      secondaryText={pictureFormData.secondaryText}
      buttonText={pictureFormData.buttonText}
    />
    <Cta
      buttonAddress={ctaData2.buttonAddress}
      primaryText={ctaData2.primaryText}
      secondaryText={ctaData2.secondaryText}
      buttonText={ctaData2.buttonText}
    />
  </Layout>
)

export default LandingPage
