import React from 'react';
import Layout from '../components/layout';
import HeroBlue from '../components/heroBlue';
import Comparison from '../components/comparison';
import Burners from '../components/burners';
import CookingService from '../components/cookingService';
import Material from '../components/material'
import TotalBtus from '../components/total-btus';
import Lighting from '../components/lighting';
import Ignition from '../components/ignition';
import WarmingRack from '../components/warmingRack';
import Cabinent from '../components/cabinent';
import Rotisserie from '../components/rotisserie';
import IncludedAccessories from '../components/included-accessories'
import UniqueFeatures from '../components/unique-features';




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

const ignitionData = {
  image: "product-amg-54-cart.jpg",
  AMGignitionDescription: "Solid Brass. Flame Thrower Valve, Ignition",
  comparisonBrand: "Kalamazoo",
  description: "Raging BTU's of cooking power means nothing if it doesn't start when you want it to start. The Muscle Grill employs Solid Brass Glame Thrower Ignition, so you can rest assured it will light quickly and safely every time. The Kalamazoo uses Electronic Hot Surface Ignition, a version of what modern water heaters use."
}

const warmingRackData = {
  comparisonBrand: 'Kalamazoo',
  comparisonRack: 'Flip-up Warming Rack',
  description: "A warming rack can help when cooking multiple items to control the heat level, avoid flareups, and keep teh quicker food warm until everything is ready. Both grills include a heavy-duty Flip-up Warming Rack that can easily be flipped into place when needed or kept out of the way when not."
}

const cabinentData = {
  image: "product-amg-54-cart.jpg",
  comparisonBrand: "Kalamazoo",
  comparisonDescription: "Double Door Cabinent Included",
  description: "Storage for a grill is helpful to keep the station cleaned and organized. The Kalamazoo comes with a Double Door Cabinent included since the larger firebox requires the extra space. The Muscle Grill has several options for the cabinents so it can be customized to your install. The built-in model can be adapted into any custom grill island configuration with a matching extra-large storage drawer or double door cabinent for storage. Alternatively, the Muscle Grill's freestanding model comes with a matching cart with multiple drawers to keep everything clean and tidy."
}

const rotisserieData = {
  image: "product-amg-54-cart.jpg",
  comparisonBrand: "Kalamazoo",
  comparisonRotisserie: "Rotisserie Motor Mounted in Cabinent",
  description: "Rotisserie is a technique beloved by many, and both grills provide the utility to slow-roas over open flame with any fuel or combination thereof. The Kalamazoo includes a Rotisserie Motor in the cabinent and an Infared Burner to get that chicken just right. The Muscle Grill has an optional Rotisserie Kit that can be added to the grill if needed."
}

const accessoryData = {
  comparisonBrand: "Kalamazoo",
  comparisonAccessories: "None",
  description: "Besides the power and craftsmanship of these fantastic grills, the Muscle Grill also includes some handy innovations and accessories. The included Grate Tool allows you to safely lift a section of grill grates to add solid fuels or manipulate them. The included leather gloves keep you protected from the incredible heat that can be achieved by combining solid and liquid fuels."
}

const featuresData = {
  AMGfeatures: "Reversible 9-Gauge V-Shaped Grates, Double Lined Construction, Patented 12-Gauge Solid Fuel Trays, Easy-Glide Drip Tray, Heavy-Duty Double-Lined, Spring Assisted Hood",
  comparisonBrand: "Kalamazoo",
  comparisonAccessories: "Rotisserie Motor Mounted in Cabinent",
  description: "The Muscle Grill has several unique features that seperate it from the competition. Reversible 9-Gauge V-Shaped Grates robust, stylish, and engineered for high performance, delivering added control of heat-transfer. The Muscle Grill features double-lined construction for durability and safety. Patented 12-Gauge Solid Fuel Trays are teh heart of the innovation of the Muscle Grill. With its creative Multi-Fuel Tray System, grilling with any combination of solid fuels places innovation in the chef's hands. The protective shield is a 2-in-1 burner cover and multi-fuel tray systems featuring a 12-gauge #304 stainless steel tray for charcoal or other solid fuels. The Easy-Glide Drip Tray keeps the inside of teh grill unpolluted and makes cleaning easy to maintain. Lastly, the Heavy-Duty Double-Lined, Spring Assisted Hood is a handy feature making it easy to lift and close the massive hood with a single hand."
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

   <Ignition
    image={ignitionData.image}
    AMGignitionDescription={ignitionData.AMGignitionDescription}
    comparisonBrand={ignitionData.comparisonBrand}
    comparisonDescription={ignitionData.comparisonDescription}
    description={ignitionData.description}
   />

   <WarmingRack
    comparisonBrand={warmingRackData.comparisonBrand}
    comparisonRack={warmingRackData.comparisonRack}
    description={warmingRackData.description}
   />

   <Cabinent
    image={cabinentData.image}
    comparisonBrand={cabinentData.comparisonBrand}
    comparisonDescription={cabinentData.comparisonDescription}
    description={cabinentData.description}
   />

   <Rotisserie
    image={rotisserieData.image}
    comparisonBrand={rotisserieData.comparisonBrand}
    comparisonRotisserie={rotisserieData.comparisonRotisserie}
    description={rotisserieData.description}
   />

   <IncludedAccessories
    comparisonBrand={accessoryData.comparisonBrand}
    comparisonAccessories={accessoryData.comparisonAccessories}
    description={accessoryData.description}
   />

   <UniqueFeatures
    AMGfeatures={featuresData.AMGfeatures}
    comparisonBrand={featuresData.comparisonBrand}
    comparisonAccessories={featuresData.comparisonAccessories}
    description={featuresData.description}
   />


</Layout>
)


export default AMGComparison
