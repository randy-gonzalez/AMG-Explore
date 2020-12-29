import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const CookingService = ({AMGgrill, AMGinches, comparisonBrand, comparisonInches, description}) => (
<div className="container bg-light mt-5 picture-text-background">
  <div className="row">
    <div className="col-4 mt-4">
      <h2>Cooking <span className="d-block">Surface</span></h2>
    </div>

    <div className="col-4 ">
      <hr className=""></hr>
      <div className="d-flex flex-column mb-2">
        <div className="d-flex ml-3">
          <div>
            <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
          </div>
          <dt>{AMGgrill}</dt>
        </div>
        <ds className="ml-5">{AMGinches}</ds>
      </div>
      <div className="d-flex flex-column mb-2">
        <ds className="ml-5">{comparisonBrand}</ds>
        <ds className="ml-5">{comparisonInches}</ds>
      </div>

    </div>
    <div className="col-4">
      <hr></hr>
      <p>{description}</p>
    </div>
  </div>
</div>
)

export default CookingService
