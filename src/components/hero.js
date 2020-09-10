import React from "react"
import Image from "./image"

const Hero = ({ image, primaryText, secondaryText, buttonText }) => (
  <a
    href="https://americanmadegrills.com/collections/all"
    className="hero d-flex align-items-center py-5"
  >
    <div className="hero-bg">
      <Image filename={image} alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12  text-center text-md-left">
          <h2 className="hero-title text-uppercase">{primaryText}</h2>
          <p className="hero-subtitle">{secondaryText}</p>
          <button className=" py-2 px-3 text-uppercase">{buttonText}</button>
        </div>
      </div>
    </div>
  </a>
)

export default Hero
