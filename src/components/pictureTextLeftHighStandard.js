import React from "react"
import Image from "./image"
import highStandard from "../images/high-standard-image.png"

const PictureTextLeftHighStandard = ({ image, primaryText, secondaryText, buttonText, buttonAddress }) => (
  <div className="picture-text-background py-4 container">

    <div className="row">

      <div className="col-12 col-lg-6 d-flex align-items-center">

        <div className="text-center mt-5">
          <div className="text-center">
            <img src={highStandard} className="check-mark" />
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
      <div className="image col-12 col-lg-6 p-5 order-1">
        <Image filename={image} alt={primaryText} />
      </div>
    </div>
  </div>

)

export default PictureTextLeftHighStandard
