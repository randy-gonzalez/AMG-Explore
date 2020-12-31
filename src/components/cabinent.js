import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const Cabinent = ({
  image,
  AMGproduct,
  AMGcabinent,
  comparisonBrand,
  comparisonCabinent,
  description

}) => (
    <div className="picture-text-background-2 py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="image col-12 col-lg-8 p-5">
            <Image filename={image} alt={description} />
          </div>
          <div className="col-12 col-lg-4 d-flex align-items-center">
            <div className="text-left">
              <p className="title text-uppercase ml-5">Cabinent</p>
              <div className="d-flex flex-column mb-2">
                <ds className="ml-4 px-4">{AMGproduct}</ds>
                <ds className="ml-4 px-4">{AMGcabinent}</ds>
              </div>
              <div className="container">
               <div className="d-flex flex-column mb-2">
                <div className="d-flex">
                  <div>
                    <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                  </div>
                  <dt>{comparisonBrand}</dt>
                </div>
                <ds className="w-md-50 ml-4 px-2">{comparisonCabinent}</ds>
              </div>
              <hr className="w-50 ml-4"></hr>
              <p className="description w-75 ml-4 pl-2 ml-md-3 pl-md-0 px-md-3">{description}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Cabinent
