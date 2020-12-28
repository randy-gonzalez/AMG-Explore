import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const Price = ({ AMGprice, comparisonBrand, comparisonPrice, description}) => (
<div className="container bg-light">
  <div className="row">
    <div className="col-4">
      <h2>Price</h2>
    </div>
    <div className="col-4 ">
      <div className="d-flex">
         <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
        </div>
        <p>Muscle Grill</p>
      </div>
      <p>{AMGprice}</p>
      <p>{comparisonBrand}</p>
      <p>{comparisonPrice}</p>
    </div>
    <div className="col-4">
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default Price
