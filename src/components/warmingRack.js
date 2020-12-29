import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const WarmingRack = ({ comparisonBrand, comparisonRack, description}) => (
<div className="container bg-light picture-text-background mt-5">
  <div className="row">
    <div className="col-4 mt-4">
      <h2>Warming Rack</h2>
    </div>
    <div className="col-4 ">
      <hr></hr>
      <div className="d-flex flex-column mb-3">
        <div className="d-flex ml-3">
          <div>
              <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
          </div>
          <dt>Muscle Grill</dt>
        </div>
        <ds className="ml-5">Flip-up Warming Rack</ds>
      </div>
      <div className="d-flex flex-column mb-3">
        <div className="d-flex ml-3">
          <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
          </div>
          <dt>{comparisonBrand}</dt>
        </div>
        <ds className="ml-5">{comparisonRack}</ds>
      </div>
    </div>
    <div className="col-4">
      <hr></hr>
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default WarmingRack
