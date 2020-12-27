import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const WarmingRack = ({ comparisonBrand, comparisonRack, description}) => (
<div className="container bg-light">
  <div className="row">
    <div className="col-4">
      <h2>Warming Rack</h2>
    </div>
    <div className="col-4 ">
      <div className="d-flex">
         <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
        </div>
        <p>Muscle Grill</p>
      </div>
      <p>Flip-up Warming Rack</p>
      <div className="d-flex">
         <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
        </div>
        <p>{comparisonBrand}</p>
      </div>
      <p>{comparisonRack}</p>
    </div>
    <div className="col-4">
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default WarmingRack
