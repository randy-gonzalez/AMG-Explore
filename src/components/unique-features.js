import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const UniqueFeatures = ({ AMGproduct,  AMGfeatures, comparisonBrand, comparisonFeatures, description}) => (
<div className="container my-5 picture-text-background-2">
  <div className="row">
    <div className="col-lg-3 col-12 mt-4 ml-5 ml-md-0">
      <h2 className="blue-text">Unique <span class="d-block">Features</span></h2>
    </div>
    <div className="col-lg-4 col-12">
      <hr></hr>
      <div className="d-flex flex-column mb-2">
        <div className="d-flex ml-3">
          <div>
              <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
          </div>
          <dt>{AMGproduct}</dt>
        </div>
        <ds className="ml-5">{AMGfeatures}</ds>
      </div>
      <div className="d-flex flex-column mb-2">
        <ds className="ml-5">{comparisonBrand}</ds>
        <ds className="ml-5">{comparisonFeatures}</ds>
      </div>
    </div>
    <div className="col-lg-5 col-12">
      <hr></hr>
      <p className="description ml-4 pl-4 pl-md-0 ml-md-5">{description}</p>
    </div>
  </div>
</div>
)

export default UniqueFeatures
