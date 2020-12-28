import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const IncludedAccessories = ({ comparisonBrand, comparisonAccessories, description}) => (
<div className="container bg-light">
  <div className="row">
    <div className="col-4">
      <h2>Included Accessories</h2>
    </div>
    <div className="col-4 ">
      <div className="d-flex">
         <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
        </div>
        <p>Muscle Grill</p>
      </div>
      <p>Deluxe Head Cover, Grate Tool, Leather Gloves</p>
      <p>{comparisonBrand}</p>
      <p>{comparisonAccessories}</p>
    </div>
    <div className="col-4">
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default IncludedAccessories
