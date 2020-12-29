import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const Ignition = ({
  image,
  AMGignitionDescription,
  comparisonBrand,
  comparisonDescription,
  description

}) => (
    <div className="picture-text-background py-4">
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="image col-12 col-md-8 p-5">
            <Image filename={image} alt={AMGignitionDescription} />
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center">
            <div className="text-left">
              <p className="title text-uppercase ml-5">Ignition</p>
              <div className="container">
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex">
                    <div>
                      <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                  </div>
                  <dt>Muscle Grill</dt>
                </div>
                  <ds className="w-50 ml-4 px-2">{AMGignitionDescription}</ds>
              </div>


                <div className="d-flex flex-column mb-2">
                  <p className="ml-4 px-2">{comparisonBrand}</p>
                  <p className="ml-4 w-50 px-2">{comparisonDescription}</p>
                </div>
                <hr className="w-50 ml-4"></hr>
                <p className="description w-75 ml-4">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Ignition
