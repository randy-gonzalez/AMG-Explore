import React from 'react';
import checkMarkImage from '../images/check-mark.png'


const CookingService = ({AMGgrill, AMGinches, comparisonBrand, comparisonInches, description}) => (
<div className="container  my-5 picture-text-background-2">
  <div className="row">
    <div className="col-12 col-lg-3 mt-4 ml-5 ml-md-0">
      <h2>Cooking <span className="d-block">Surface</span></h2>
    </div>

    <div className="col-lg-3 col-12 ">
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
    <div className="col-lg-6 col-12">
      <hr></hr>
      <p className="ml-5 ml-md-0">{description}</p>
    </div>
  </div>
</div>
)

export default CookingService
