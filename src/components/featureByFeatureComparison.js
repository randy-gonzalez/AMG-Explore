import React from 'react';

const FeatureByFeatureComparison = () => (
  <section className="container section5 text-light">
    <div className="d-flex flex-column ">
      <strong className="text-center mt-4">THE GUIDE</strong>
      <h2 className="text-center m-5">A feature by feature comparison with Kalamazoo shows the American Muscle Grill is the one grill you need.</h2>
    </div>
    <div className="d-flex flex-row justify-content-around">
      <div className="d-flex flex-column">
        <p className="text-center mt-5 font-weight-bold">FEATURES</p>
        <ul className="list">


          <li className="mt-2 ">MODEL</li>
          <li >PRICE</li>
          <li >MATERIAL</li>
          <li >COOKING SURFACE SQ IN</li>
          <li >BURNERS</li>
          <li >BURNER TYPE</li>
          <li >BTU PER BURNER</li>
          <li >IGNITION</li>
          <li >LIGHTING</li>
        </ul>
      </div>
      <div className="d-flex flex-column">
        <p className="text-center mt-5 font-weight-bold">AMERICAN MUSCLE GRILL</p>
        <ul className="list">


          <li className="mt-2 ">AMG36</li>
          <li >$6999.99</li>
          <li >304 STAINLESS</li>
          <li >1105</li>
          <li >FIVE</li>
          <li >14-GAGUE 304 STAINLESS STEEL</li>
          <li >22,000</li>
          <li >SOLID BRASS, FLAME THROWER VALVE</li>
          <li >CONTROL PANEL & INTERIOR LIGHTING</li>
        </ul>
      </div>
      <div className="d-flex flex-column">
        <p className="text-center mt-5 font-weight-bold">KALAMAZOO</p>
        <ul className="list">
          <li className="mt-2 ">K750HB</li>
          <li >$17,995.00</li>
          <li >304 STAINLESS</li>
          <li >726 sq in</li>
          <li >THREE</li>
          <li >CAST BRONZE</li>
          <li >25,000</li>
          <li >EHSI</li>
          <li >CONTROL PANEL</li>
        </ul>
      </div>
    </div>
  </section>
)
export default FeatureByFeatureComparison
