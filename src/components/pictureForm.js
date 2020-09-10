import React from "react"
import Image from "./image"

const PictureForm = ({ image, primaryText, secondaryText, buttonText }) => (
  <div className="picture-form-container">
    <div className="image">
      <Image filename={image} alt="" />
    </div>
    <div className="container mt-5 mx-md-5">
      <div className="row">
        <div className="form text-center col-12 col-md-6 col-lg-4 p-4">
          <p className="title text-uppercase">{primaryText}</p>
          <p className="description">{secondaryText}</p>
          <form action="" className="d-flex">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-100"
            />
            <button className="text-uppercase">Subscribe</button>
          </form>
        </div>
        <div className="spacer col-12"></div>
      </div>
    </div>
  </div>
)

export default PictureForm
