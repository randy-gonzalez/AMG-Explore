import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const UniqueFeatures = ({ AMGfeatures, comparisonBrand, comparisonAccessories, description}) => (
<div className="container bg-light">
  <div className="row">
    <div className="col-4">
      <h2>Unique <span class="d-block">Features</span></h2>
    </div>
    <div className="col-4 ">
      <div className="d-flex">
         <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
        </div>
        <p>Muscle Grill</p>
      </div>
      <p>{AMGfeatures}</p>
      <p>{comparisonBrand}</p>
      <p>{comparisonAccessories}</p>
    </div>
    <div className="col-4">
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default UniqueFeatures
