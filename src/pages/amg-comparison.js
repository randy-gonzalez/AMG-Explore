import React from 'react';
import Layout from '../components/layout';
import HeroBlue from '../components/heroBlue';
import Comparison from '../components/comparison';
import Burners from '../components/burners';
import CookingService from '../components/cookingService';
import Material from '../components/material'
import TotalBtus from '../components/total-btus';
import Lighting from '../components/lighting';



const comparisonData = {
  image: "product-amg-54-cart.jpg",
  title: "A head to head comparison of the Muscle Grill & the Kalamazoo Hybrid Fire",
  description: "This is the evaluation of premium hybrid grills that allow you to cook with any fuel or combination of fuels. Both of our participants are top tier in their own right, but how do they compare feature by feature? we will go item by item to see how they stack up against each other. The first grill is the MG36, the 36-inch Muscle Grill from American Made Grills. The second grill is the K750HB from Kalamazoo. Let's see how they line up!",
}

const materialData = {
  image: "product-amg-54-cart.jpg",
  description: "Durability and beauty have made 304 the hottest grade of stainless steel on the market. It is a T300 Series Austenitic Stainless Steel with a minimum of 18% chromium and 8% nickel, combined with a maximum of 0.08% carbon. This alloy is extremely durable, temperature resistant, and provides a beautiful finish.",
}

const cookingServiceData = {
  AMGgrill: "Muscle Grill",
  AMGinches: '1,105 sq-inches',
  comparisonBrand: 'Kalamazoo',
  comparisonInches: '726 sq-inches',
  description: 'A large cooking surface allows you to get more done with your time. Here the Muscle Grill is the clear winner boasting an extra 379 square inches of cooking surface to grill all the burgers and dogs at the same time or room to grill sides and veggies on one side of the grill with steaks on the other.'
}

const burnersData = {
  AMGBurnerDescription: "Five (5) 14-Guage #304 Stainless Steel Burners at 22,000 BTUs each.",
  comparisonBrand: 'Kalamazoo',
  comparisonDescription: 'The burners are the work center of the grill when using liquid fuels like natural gas and propane. They need to be durable, resistant to corrosion, and evenly distribute heat. Both grills feature top of the line cast burners that deliver in all three areas. The Kalamazoo feagures three cast bronze burners, while the Muscle Grill brings five heavy gauge stainless steel burners. Lack of heat will not be a problem for either grill, but the Muscle Grill edges in front here sporting two more burners for more power and control of the cooking surface.'
}

const totalBtusData = {
  image: "product-amg-54-cart.jpg",
  AMGbtus: "110,00(NG)",
  comparisonBrand: "Kalamazoo",
  comparisonBtus: "107,150(NG)",
  description: "Total BTU's on a grill is like comparing total horsepower between cars. More power means a better experience. With a high Total BTU rating, you get better ehat transfer, faster preheat process, less sticking, uniform cooking, and simply better food. The Muscle Grill edges ahead here as well, with 110,000 total BTU's from it's five stainless steel burners. The Kalamazoo is closely behind with 107,150 total BTU's."
}

const lightingData = {
  comparsonBrand: "Kalamazoo",
  comparisonLighting: "Control Panel",
  description: "Proper lighting is a must when grilling, especially during gorgeous sunsets when the ambient lighting's various shades and tones are in constant flux. Control Panel lighting is useful for illuminatign the burner controls, so you always know your settings. Interior lighting can assist in adequately seeing your food in the dark while it finishes cooking. The Muscle Grill comes with both control panel and interior lighting for a comoplete solution, whereas the Kalamazoo only included lighting in the control panel."

}




const AMGComparison = () => (
<Layout>
  <Comparison
    image={comparisonData.image}
    title={comparisonData.title}
    description={comparisonData.description}

  />
  <Material
    image={materialData.image}
    secondaryText={materialData.description}

  />
  <CookingService
    AMGgrill={cookingServiceData.AMGgrill}
    AMGinches={cookingServiceData.AMGinches}
    comparisonBrand={cookingServiceData.comparisonBrand}
    comparisonInches={cookingServiceData.comparisonInches}
    description={cookingServiceData.description}
  />

  <Burners
  AMGburnerDescription={burnersData.AMGburnerDescription}
  comparisonBrand={burnersData.comparisonBrand}
  comparisonDescription={burnersData.comparisonDescription}
  />

  <TotalBtus
    image={totalBtusData.image}
    AMGbtus={totalBtusData.AMGbtus}
    comparisonBrand={totalBtusData.comparisonBrand}
    comparisonBtus={totalBtusData.comparisonBtus}
    description={totalBtusData.description}
   />

   <Lighting
    comparisonBrand={lightingData.comparsonBrand}
    comparisonLighting={lightingData.comparisonLighting}
    description={lightingData.description}
   />


</Layout>
)


export default AMGComparison
