import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const Price = ({ AMGprice, comparisonBrand, comparisonPrice, description}) => (
<div className="container mt-5 picture-text-background-2">
  <div className="row">
    <div className="col-3 mt-4">
      <h2>Price</h2>
    </div>
    <div className="col-3 ">
      <hr className="w-50 ml-2"></hr>
      <div className="d-flex flex-column mb-2">
        <div className="d-flex ml-3">
          <div>
              <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
          </div>
          <dt>Muscle Grill</dt>
        </div>
        <ds className="ml-5">{AMGprice}</ds>
      </div>
      <div className="d-flex flex-column mb-2">
        <ds className="ml-5">{comparisonBrand}</ds>
        <ds className="ml-5">{comparisonPrice}</ds>
      </div>
    </div>
    <div className="col-6">
      <hr></hr>
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default Price
