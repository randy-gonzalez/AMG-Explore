import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const Lighting = ({ AMGproduct, AMGlighting, comparisonBrand, comparisonLighting, description}) => (
<div className="container  picture-text-background-2 my-5">
  <div className="row">
    <div className="col-lg-3 col-12 mt-4 ml-5 ml-md-0">
      <h2 className="blue-text">Lighting</h2>
    </div>
    <div className="col-lg-3 col-12 ">
      <hr></hr>
      <div className="d-flex flex-column mb-3">
        <div className="d-flex ml-3">
          <div>
              <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
          </div>
          <dt>{AMGproduct}</dt>
        </div>
        <ds className="ml-5">{AMGlighting}</ds>
      </div>
      <div className="d-flex flex-column mb-2">
        <ds className="ml-5">{comparisonBrand}</ds>
        <ds className="ml-5">{comparisonLighting}</ds>
      </div>

    </div>
    <div className="col-lg-6 col-12">
      <hr></hr>
      <p className="mx-5 mx-md-0">{description}</p>
    </div>
  </div>
</div>
)

export default Lighting
