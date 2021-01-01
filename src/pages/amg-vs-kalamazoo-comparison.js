import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from '../components/image';
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
import Warranty from '../components/warranty'
import AdditionalOptions from '../components/additional-options';
import Price from '../components/price';
import Winner from '../components/winner';

const images = {
  backgroundImageOne: "AMG-54-Grates-Lifestyle.png",
  backgroundImageTwo: "grilling-steaks.png",
  backgroundImageThree: "warming-rack.png",
  backgroundImageFour: "accessories.png",
  backgroundImageFive: "unique-features.png",
  backgroundImageSix: "price.png"
}


const comparisonData = {
  image: "Product.png",
  title: "A head to head comparison of the Muscle Grill & the Kalamazoo Hybrid Fire",
  description: "This is the evaluation of premium hybrid grills that allow you to cook with any fuel or combination of fuels. Both of our participants are top tier in their own right, but how do they compare feature by feature? we will go item by item to see how they stack up against each other. The first grill is the MG36, the 36-inch Muscle Grill from American Made Grills. The second grill is the K750HB from Kalamazoo. Let's see how they line up!",
}

const materialData = {
  AMGimage: "material-photo.png",
  AMGproduct: "MUSCLE GRILL",
  AMGmaterial: "304 Stainless Steel",
  comparisonImage: "kalamazoo-cabinents.jpg",
  comparisonBrand: "KALAMAZOO",
  comparisonMaterial: "304 Stainless Steel",
  description: "Durability and beauty have made 304 the hottest grade of stainless steel on the market. It is a T300 Series Austenitic Stainless Steel with a minimum of 18% chromium and 8% nickel, combined with a maximum of 0.08% carbon. This alloy is extremely durable, temperature resistant, and provides a beautiful finish.",
}

const cookingServiceData = {
  AMGproduct: "MUSCLE GRILL",
  AMGinches: '1,105 sq-inches',
  comparisonBrand: 'KALAMAZOO',
  comparisonInches: '726 sq-inches',
  description: 'A large cooking surface allows you to get more done with your time. Here the Muscle Grill is the clear winner boasting an extra 379 square inches of cooking surface to grill all the burgers and dogs at the same time or room to grill sides and veggies on one side of the grill with steaks on the other.'
}

const burnersData = {
  AMGimage: 'burners-photo.png',
  AMGproduct: "MUSCLE GRILL",
  AMGburnerDescription: "Five (5) 14-Guage #304 Stainless Steel Burners at 22,000 BTUs each.",
  comparisonImage: "kalamazoo-burners.png",
  comparisonBrand: 'KALAMAZOO',
  comparisonDescription: 'Three (3) Cast Bronze Burners at 25,000 BTUs each',
  description: 'The burners are the work center of the grill when using liquid fuels like natural gas and propane. They need to be durable, resistant to corrosion, and evenly distribute heat. Both grills feature top of the line cast burners that deliver in all three areas. The Kalamazoo feagures three cast bronze burners, while the Muscle Grill brings five heavy gauge stainless steel burners. Lack of heat will not be a problem for either grill, but the Muscle Grill edges in front here sporting two more burners for more power and control of the cooking surface.'
}

const totalBtusData = {
  AMGimage: "burners-photo.png",
  AMGproduct: "MUSCLE GRILL",
  AMGbtus: "110,00(NG)",
  comparisonImage: "kalamazoo-steaks.jpg",
  comparisonBrand: "KALAMAZOO",
  comparisonBtus: "107,150(NG)",
  description: "Total BTU's on a grill is like comparing total horsepower between cars. More power means a better experience. With a high Total BTU rating, you get better ehat transfer, faster preheat process, less sticking, uniform cooking, and simply better food. The Muscle Grill edges ahead here as well, with 110,000 total BTU's from it's five stainless steel burners. The Kalamazoo is closely behind with 107,150 total BTU's."
}

const lightingData = {
  AMGproduct: "MUSCLE GRILL",
  AMGlighting: "Control Panel and Interior Lighting",
  comparsonBrand: "KALAMAZOO",
  comparisonLighting: "Control Panel",
  description: "Proper lighting is a must when grilling, especially during gorgeous sunsets when the ambient lighting's various shades and tones are in constant flux. Control Panel lighting is useful for illuminatign the burner controls, so you always know your settings. Interior lighting can assist in adequately seeing your food in the dark while it finishes cooking. The Muscle Grill comes with both control panel and interior lighting for a comoplete solution, whereas the Kalamazoo only included lighting in the control panel."
}

const ignitionData = {
  AMGimage: "ignition.png",
  AMGproduct: "MUSCLE GRILL",
  AMGignitionDescription: "Solid Brass. Flame Thrower Valve, Ignition",
  comparisonImage: "hybrid-fire-functionality.jpg",
  comparisonBrand: "KALAMAZOO",
  comparisonDescription: "Electronic Hot Surface Ignition",
  description: "Raging BTU's of cooking power means nothing if it doesn't start when you want it to start. The Muscle Grill employs Solid Brass Glame Thrower Ignition, so you can rest assured it will light quickly and safely every time. The Kalamazoo uses Electronic Hot Surface Ignition, a version of what modern water heaters use."
}

const warmingRackData = {
  AMGproduct: "MUSCLE GRILL",
  AMGrack: "Flip-up Warming Rack",
  comparisonBrand: 'KALAMAZOO',
  comparisonRack: 'Flip-up Warming Rack',
  description: "A warming rack can help when cooking multiple items to control the heat level, avoid flareups, and keep the quicker food warm until everything is ready. Both grills include a heavy-duty Flip-up Warming Rack that can easily be flipped into place when needed or kept out of the way when not."
}

const cabinentData = {
  AMGimage: "cabinent.png",
  AMGproduct: "MUSCLE GRILL",
  AMGcabinent: "Optional",
  comparisonImage: "hybrid-fire-grill.jpg",
  comparisonBrand: "KALAMAZOO",
  comparisonCabinent: "Double Door Cabinent Included",
  description: "Storage for a grill is helpful to keep the station cleaned and organized. The Kalamazoo comes with a Double Door Cabinent included since the larger firebox requires the extra space. The Muscle Grill has several options for the cabinents so it can be customized to your install. The built-in model can be adapted into any custom grill island configuration with a matching extra-large storage drawer or double door cabinent for storage. Alternatively, the Muscle Grill's freestanding model comes with a matching cart with multiple drawers to keep everything clean and tidy."
}

const rotisserieData = {
  AMGimage: "rotisserie.png",
  AMGproduct: "MUSCLE GRILL",
  AMGrotisserie: "Optional Rotisserie Kit",
  comparisonImage: "kalamazoo-rotisserie.jpg",
  comparisonBrand: "KALAMAZOO",
  comparisonRotisserie: "Rotisserie Motor Mounted in Cabinent",
  description: "Rotisserie is a technique beloved by many, and both grills provide the utility to slow-roas over open flame with any fuel or combination thereof. The Kalamazoo includes a Rotisserie Motor in the cabinent and an Infared Burner to get that chicken just right. The Muscle Grill has an optional Rotisserie Kit that can be added to the grill if needed."
}

const accessoryData = {
  AMGproduct: "MUSCLE GRILL",
  AMGaccessories: "Deluxe Head Cover, Grate Tool, Leather Gloves",
  comparisonBrand: "KALAMAZOO",
  comparisonAccessories: "None",
  description: "Besides the power and craftsmanship of these fantastic grills, the Muscle Grill also includes some handy innovations and accessories. The included Grate Tool allows you to safely lift a section of grill grates to add solid fuels or manipulate them. The included leather gloves keep you protected from the incredible heat that can be achieved by combining solid and liquid fuels."
}

const featuresData = {
  AMGproduct: "MUSCLE GRILL",
  AMGfeatures: "Reversible 9-Gauge V-Shaped Grates, Double Lined Construction, Patented 12-Gauge Solid Fuel Trays, Easy-Glide Drip Tray, Heavy-Duty Double-Lined, Spring Assisted Hood",
  comparisonBrand: "KALAMAZOO",
  comparisonFeatures: "Rotisserie Motor Mounted in Cabinent",
  description: "The Muscle Grill has several unique features that seperate it from the competition. Reversible 9-Gauge V-Shaped Grates robust, stylish, and engineered for high performance, delivering added control of heat-transfer. The Muscle Grill features double-lined construction for durability and safety. Patented 12-Gauge Solid Fuel Trays are the heart of the innovation of the Muscle Grill. With its creative Multi-Fuel Tray System, grilling with any combination of solid fuels places innovation in the chef's hands. The protective shield is a 2-in-1 burner cover and multi-fuel tray systems featuring a 12-gauge #304 stainless steel tray for charcoal or other solid fuels. The Easy-Glide Drip Tray keeps the inside of the grill unpolluted and makes cleaning easy to maintain. Lastly, the Heavy-Duty Double-Lined, Spring Assisted Hood is a handy feature making it easy to lift and close the massive hood with a single hand."
}

const warrantyData = {
  AMGimage: "warranty.png",
  AMGproduct: "MUSCLE GRILL",
  AMGwarranty: "Lifetime (Construction, Manufacturing, Frame, Housing, Cooking Grates, Burners, Valves, Burner Cover, Fuel Trays) One Year (All Other Parts, Components, And Electrical)",
  comparisonImage: "kalamazoo-cabinents.jpg",
  comparisonBrand: "KALAMAZOO",
  comparisonWarranty: "2 Yrs. - All Parts & Labor, Limited 25 Years (Cast Brass Burners, Cooking Grates, Fabricated Steel), Limited 5 Years (SS Burners, IR Burners, Cooktop Burners, Gas Valves, Manifold Pipes & Electronic Control Boards)",
  description: "Built for high performance, these grills are only as good as how long they last. The Muscle Grill comes with first-rate support and a Lifetime Warranty on construction and manufacturer defects, frame, cooking grates, burners, and fuel trays. All other parts and the electrical system have a one-year warranty. The Kalamazoo covers all parts and labor for two years and offers a limited 25-year warranty on cast brass burners, cooking grates, and fabricated steel. A limited five-year warranty covers other stainless steel burners, infared burners, cooktop burners, gas valves, manifold pipes and electronic systems."
}

const additionalOptionsData = {
  AMGimage: "additional-options.png",
  AMGproduct: "MUSCLE GRILL",
  AMGoptions: "Drop-in Infrared Sear Burner, Power Burner, Rotisserie Kit, Griddle",
  comparisonImage: "kalamazoo-wood.jpg",
  comparisonBrand: 'KALAMAZOO',
  comparisonOptions: "Laser-Cut Grill Grates",
  description: "As needed, the Muscle Grill offers several additional options for added flexibility and cooking techniques. The Drop-In Infrared Sear Burner can be used in four of the five burner locations to get that beautiful sear in just minutes, providing more cooking versatility in combination with other fuels. The Power Burner combines thecomfort of an indoor kitchen range with all the benefits fo being outside, featuring #304 stainless steel construction, 60,000 BTUs of power, heavy stainless steel grates, stainless steel lid, matching Muscle Grill front face design, and industry-top warranty. The Rotisserie Kit provides a commercial grade rotisserie with a 100lb motor that can roast virtually any fowl or cut of meat. The Muscle Grill Griddle Plate upgrades your grilling options with 312 sq. in. of #304 stainless steel grilling space, perfect for cooking breakfast, burgers, veggies, or stir-fry. The Kalamazoo offers optional Laser-Cut Grill Grates with various holes and designs, specifically designed for different meats, veggies, and fish. These heavy-duty grates offer premium heat transfer and can be mixed and matched to your preference."
}

const priceData = {
  AMGproduct: "MUSCLE GRILL",
  AMGprice: "$6,999.99",
  comparisonBrand: "KALAMAZOO",
  comparisonPrice: "$17,995.00",
  description: "Here at the end, the essential feature comes into view, and the Muscle Grill has a clear advantage over the Kalamazoo. The Muscle Grill is one-third of the cost of the Kalamazoo! For substantially less money, the Muscle Grill gives you more burners, more BTU's, larger cooking surface, better ignition, more lighting, more customization, included grill grates, patented fuel trays, better warranty, more options, more more more!"
}

const winnerData = {
  image: "Product.png",
  title: "The Muscle Grill is unrivaled in power, flexibility, durability, and price.",
  description: "High-performance hybrid grills are the future of grilling, and both the Muscle Grill and the Kalmazoo Hybrid Fire are terrific machines. With fantastic design and craftsmanship, these grills have set a new benchmark for outdoor kitchen appliances. The truth becomes apperant on a feature by feature comparison that the Muscle Grill is the better value between the two. It either equals or surpasses the Kalmazoo in every catagory at one-third of the price! You cannot find a better value in quality, flexibility, craftsmanship, and warranty than the Muscle Grill - it is the definitive grilling experience. The Muscle Grill is the one grill to last; the one grill that burns any fuel; the one grill with unmatched value. Transform your outdoor kitchen today with the hybrid grill that is redefining outdoor living.",
  buttonText: "Get Started",
  buttonAddress: "https://americanmadegrills.com/"
}



const AMGComparison = () => (
<Layout>
  <Comparison
    image={comparisonData.image}
    title={comparisonData.title}
    description={comparisonData.description}
  />

  <Material
    AMGimage={materialData.AMGimage}
    description={materialData.description}
    AMGproduct={materialData.AMGproduct}
    AMGmaterial={materialData.AMGmaterial}
    comparisonImage={materialData.comparisonImage}
    comparisonBrand={materialData.comparisonBrand}
    comparisonMaterial={materialData.comparisonMaterial}
  />

  <Image filename={images.backgroundImageOne} alt="title" />



  <CookingService
    AMGproduct={cookingServiceData.AMGproduct}
    AMGinches={cookingServiceData.AMGinches}
    comparisonBrand={cookingServiceData.comparisonBrand}
    comparisonInches={cookingServiceData.comparisonInches}
    description={cookingServiceData.description}
  />

  <Burners
  AMGimage={burnersData.AMGimage}
  AMGproduct={burnersData.AMGproduct}
  AMGburnerDescription={burnersData.AMGburnerDescription}
  comparisonImage={burnersData.comparisonImage}
  comparisonBrand={burnersData.comparisonBrand}
  comparisonDescription={burnersData.comparisonDescription}
  description={burnersData.description}
  />

  <TotalBtus
    AMGimage={totalBtusData.AMGimage}
    AMGproduct={totalBtusData.AMGproduct}
    AMGbtus={totalBtusData.AMGbtus}
    comparisonImage={totalBtusData.comparisonImage}
    comparisonBrand={totalBtusData.comparisonBrand}
    comparisonBtus={totalBtusData.comparisonBtus}
    description={totalBtusData.description}
   />

  <Image filename={images.backgroundImageTwo} alt="cooking around the american muscle grill" />

   <Lighting
    AMGproduct={lightingData.AMGproduct}
    AMGlighting={lightingData.AMGlighting}
    comparisonBrand={lightingData.comparsonBrand}
    comparisonLighting={lightingData.comparisonLighting}
    description={lightingData.description}
   />

   <Ignition
    AMGimage={ignitionData.AMGimage}
    AMGproduct={ignitionData.AMGproduct}
    AMGignitionDescription={ignitionData.AMGignitionDescription}
    comparisonImage={ignitionData.comparisonImage}
    comparisonBrand={ignitionData.comparisonBrand}
    comparisonDescription={ignitionData.comparisonDescription}
    description={ignitionData.description}
   />

    <Image filename={images.backgroundImageThree} alt="cooking around the american muscle grill" />

   <WarmingRack
    AMGproduct={warmingRackData.AMGproduct}
    AMGrack={warmingRackData.AMGrack}
    comparisonBrand={warmingRackData.comparisonBrand}
    comparisonRack={warmingRackData.comparisonRack}
    description={warmingRackData.description}
   />

   <Cabinent
    AMGproduct={cabinentData.AMGproduct}
    AMGcabinent={cabinentData.AMGcabinent}
    AMGimage={cabinentData.AMGimage}
    comparisonImage={cabinentData.comparisonImage}
    comparisonBrand={cabinentData.comparisonBrand}
    comparisonCabinent={cabinentData.comparisonCabinent}
    description={cabinentData.description}
   />

   <Rotisserie
    AMGimage={rotisserieData.AMGimage}
    AMGproduct={rotisserieData.AMGproduct}
    AMGrotisserie={rotisserieData.AMGrotisserie}
    comparisonImage={rotisserieData.comparisonImage}
    comparisonBrand={rotisserieData.comparisonBrand}
    comparisonRotisserie={rotisserieData.comparisonRotisserie}
    description={rotisserieData.description}
   />

    <Image filename={images.backgroundImageFour} alt="included accessories" />

   <IncludedAccessories
    AMGproduct={accessoryData.AMGproduct}
    AMGaccessories={accessoryData.AMGaccessories}
    comparisonBrand={accessoryData.comparisonBrand}
    comparisonAccessories={accessoryData.comparisonAccessories}
    description={accessoryData.description}
   />

   <Image filename={images.backgroundImageFive} alt="american muscle grill unique features" />

   <UniqueFeatures
    AMGproduct={featuresData.AMGproduct}
    AMGfeatures={featuresData.AMGfeatures}
    comparisonBrand={featuresData.comparisonBrand}
    comparisonFeatures={featuresData.comparisonFeatures}
    description={featuresData.description}
   />

  <Warranty
    AMGimage={warrantyData.AMGimage}
    AMGproduct={warrantyData.AMGproduct}
    AMGwarranty={warrantyData.AMGwarranty}
    comparisonImage={warrantyData.comparisonImage}
    comparisonBrand={warrantyData.comparisonBrand}
    comparisonWarranty={warrantyData.comparisonWarranty}
    description={warrantyData.description}
  />

  <AdditionalOptions
    AMGimage={additionalOptionsData.AMGimage}
    AMGproduct={additionalOptionsData.AMGproduct}
    AMGoptions={additionalOptionsData.AMGoptions}
    comparisonImage={additionalOptionsData.comparisonImage}
    comparisonBrand={additionalOptionsData.comparisonBrand}
    comparisonOptions={additionalOptionsData.comparisonOptions}
    description={additionalOptionsData.description}
  />

  <Image filename={images.backgroundImageSix} alt="American Muscle grill at an affordable price" />

  <Price
    AMGproduct={priceData.AMGproduct}
    AMGprice={priceData.AMGprice}
    comparisonBrand={priceData.comparisonBrand}
    comparisonPrice={priceData.comparisonPrice}
    description={priceData.description}
  />

  <Winner
    image={winnerData.image}
    title={winnerData.title}
    description={winnerData.description}
    buttonText={winnerData.buttonText}
    buttonAddress={winnerData.buttonAddress}
  />

</Layout>
)


export default AMGComparison
