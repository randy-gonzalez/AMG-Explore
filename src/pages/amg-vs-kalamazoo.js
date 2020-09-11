import React from 'react';
import Layout from '../components/layout';
import HeroBlue from '../components/heroBlue';
import OverlappingImageComparison from '../components/overlappedImageComparison';
import ThreeCheckBoxComparison from '../components/threeCheckBoxComparison'
import OverlappingImageLongDescription from '../components/overlappingImageLongDescription';
import PictureTextLeft from '../components/pictureTextLeft';
import PictureTextRight from '../components/pictureTextRight';
import FeatureByFeatureComparison from '../components/featureByFeatureComparison';
import TextBox from '../components/textBox';
import Collections from '../components/collections';
import Process from '../components/process';
import Reviews from '../components/reviews';
import PictureForm from '../components/pictureForm';
import StalloneVideo from '../components/stalloneVideo';
import Cta from '../components/cta';

const pictureTextData1 = {
  image: "product-amg-54-cart.jpg",
  primaryText: "One Grill To Last",
  secondaryText:
    "No More replacing grills every couple of years. The American Muscle Grill is proudly crafted and built in America using the highest standards redefining outdoor living.",
  buttonText: "Get Started",
}

const pictureTextData2 = {
  image: "product-amg-54-fuel.jpg",
  primaryText: "ONE GRILL THAT BURNS ANY FUEL",
  secondaryText:
    "With patented solid fuel trays, cook with gas, charcoal, hardwood, lump charcoal, wood chips, or any combination. Explore new techniques and combinations for unique adventures.",
  buttonText: "Get Started",
}

const pictureTextData3 = {
  image: "product-amg-54-buttons.jpg",
  primaryText: "ONE GRILL WITH UNMATCHED VALUE",
  secondaryText:
    "Get more for less. The American Muscle Grill gives you more performance, verstaility, and features for a third of Kalamazoo's price.",
  buttonText: "Get Started",
}

const pictureFormData = {
  image: "hero2.jpg",
  primaryText: "Free Informational PDF + Special Offer",
  secondaryText:
    "Tell us where to send your free informational pdf and special offer.",
  buttonText: "Get Started",
}

const textBoxData = {
  primaryText: "Burn it all",
  secondaryText: "American Made Grills",
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

const AmgVsKalamazooLandingPage = () => (
  <Layout>
    <HeroBlue />
    <OverlappingImageComparison />
    <ThreeCheckBoxComparison />

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
    <FeatureByFeatureComparison />
    <TextBox
      primaryText={textBoxData.primaryText}
      secondaryText={textBoxData.secondaryText}
    />
    <Collections />
    <Process />
    <OverlappingImageLongDescription />
    <Reviews />
    <PictureForm
      image={pictureFormData.image}
      primaryText={pictureFormData.primaryText}
      secondaryText={pictureFormData.secondaryText}
      buttonText={pictureFormData.buttonText}
    />
    <StalloneVideo />
    <Cta
      buttonAddress={ctaData2.buttonAddress}
      primaryText={ctaData2.primaryText}
      secondaryText={ctaData2.secondaryText}
      buttonText={ctaData2.buttonText}
    />


  </Layout>
)

export default AmgVsKalamazooLandingPage
