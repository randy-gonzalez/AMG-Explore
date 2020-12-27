import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const CookingService = ({AMGgrill, AMGinches, comparisonBrand, comparisonInches, description}) => (
<div className="container bg-light">
  <div className="row">
    <div className="col-4">
      <h2>Cooking <span className="d-block">Surface</span></h2>
    </div>
    <div className="col-4 ">
      <div className="d-flex">
         <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
        </div>
        <p>{AMGgrill}</p>
      </div>
      <p>{AMGinches}</p>
      <p>{comparisonBrand}</p>
      <p>{comparisonInches}</p>
    </div>
    <div className="col-4">
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default CookingService
