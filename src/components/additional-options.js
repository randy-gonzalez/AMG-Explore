import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const AdditionalOptions = ({
  image,
  AMGoptions,
  comparisonBrand,
  comparisonOptions,
  description

}) => (
    <div className="picture-text-background-2 py-4">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 col-md-4 d-flex align-items-center">
            <div className="ml-5">
              <p className="title text-uppercase ml-5">Additional Options</p>
              <div className="d-flex flex-column mb-2 ml-3">
                <div className="d-flex">
                  <div>
                    <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                  </div>
                  <dt>Muscle Grill</dt>
                </div>
                <ds className="px-2 ml-4 w-50">{AMGoptions}</ds>
              </div>
               <div className="d-flex flex-column mb-2 ml-3">
                <ds className="px-2 ml-4">{comparisonBrand}</ds>
                <ds className="px-2 ml-4">{comparisonOptions}</ds>
              </div>
              <hr className="w-50 ml-5"></hr>
              <p className="description w-75 ml-5">{description}</p>
            </div>
          </div>
          <div className="image col-12 col-md-8 p-5">
            <Image filename={image} alt={AMGoptions} />
          </div>
        </div>
      </div>
    </div>
  )

export default AdditionalOptions
