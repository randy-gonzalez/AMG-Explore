import React from "react"
import Image from "./image"

const Winner = ({ image, title, description, buttonText, buttonAddress }) => (
  <div className="picture-text-background-2 py-4">
    <div className="container bg-light">
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="text-left">
            <p className="text-secondary">THE WINNER IS CLEAR</p>
            <p className="title text-uppercase">{title}</p>
            <p className="description">{description}</p>
            <a href={buttonAddress}>
              <button className="text-uppercase mt-4 py-2 px-3">
                {buttonText}
              </button>
            </a>
          </div>
        </div>
        <div className="image col-12 col-md-6 p-5">
          <Image filename={image} alt={title} />
        </div>
      </div>
    </div>
  </div>
)
export default Winner
