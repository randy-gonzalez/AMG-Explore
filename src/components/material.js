import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const Material = ({
  image,
  primaryText,
  secondaryText,
  buttonText,
  buttonAddress
}) => (
    <div className="picture-text-background py-4">
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="image col-12 col-md-8 p-5">
            <Image filename={image} alt={primaryText} />
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center">
            <div className="text-left">
              <p className="title text-uppercase ml-5">Material</p>
              <div className="container">
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex">
                    <div>
                      <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                    </div>
                    <dt >Muscle Grill</dt>
                  </div>
                  <ds className="ml-4 px-2">304 Stainless steel</ds>
                </div>
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex">
                    <div>
                      <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                    </div>
                    <dt>Kalamazoo</dt>
                  </div>
                  <ds className="ml-4 px-2">304 Stainless steel</ds>
                </div>
                <hr className="w-50 ml-5 font-weight-bold"></hr>
                <p className="description ml-4 w-75 px-2">{secondaryText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Material
