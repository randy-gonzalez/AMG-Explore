import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const Lighting = ({ comparisonBrand, comparisonLighting, description}) => (
<div className="container bg-light">
  <div className="row">
    <div className="col-4">
      <h2>Lighting</h2>
    </div>
    <div className="col-4 ">
      <div className="d-flex">
         <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
        </div>
        <p>Muscle Grill</p>
      </div>
      <p>Control Panel and Interior Lighting</p>
      <p>{comparisonBrand}</p>
      <p>{comparisonLighting}</p>
    </div>
    <div className="col-4">
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default Lighting
