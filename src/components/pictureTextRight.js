import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const PictureTextRight = ({
  image,
  primaryText,
  secondaryText,
  buttonText,
  buttonAddress
}) => (
    <div className="picture-text-background py-4">
      <div className="container bg-light">
        <div className="row">
          <div className="image col-12 col-lg-6 p-5">
            <Image filename={image} alt={primaryText} />
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="text-center">
              <p className="title text-uppercase">{primaryText}</p>
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
              <a href={buttonAddress}>
                <button className="text-uppercase mt-4 py-2 px-3">
                  {buttonText}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default PictureTextRight
