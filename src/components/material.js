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
      <div className="container bg-light">
        <div className="row">
          <div className="image col-12 col-md-6 p-5">
            <Image filename={image} alt={primaryText} />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="text-center">
              <p className="title text-uppercase">Material</p>
              <div className="d-flex justify-content-center">
                <div>
                  <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                </div>
                <p>Muscle Grill</p>
              </div>
              <p className="d-block">304 Stainless steel</p>
               <div className="d-flex justify-content-center">
                <div>
                  <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                </div>
                <p>Kalamazoo</p>
              </div>
              <p className="d-block">304 Stainless steel</p>
              <p className="description">{secondaryText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Material
