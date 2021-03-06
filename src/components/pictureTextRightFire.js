import React from "react"
import Image from "./image"
import fireLogo from "../images/fire-image.png"
const PictureTextRightFire = ({
  image,
  primaryText,
  secondaryText,
  buttonText,
  buttonAddress
}) => (
    <div className="picture-text-background py-4 container">

      <div className="row">
        <div className="image col-12 col-lg-6 p-5">
          <Image filename={image} alt={primaryText} className="order-last" />
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="text-center">
            <div className='text-center'>
              <img src={fireLogo} className="check-mark" />
            </div>
            <p className="title text-uppercase mt-5">{primaryText}</p>
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

  )

export default PictureTextRightFire
