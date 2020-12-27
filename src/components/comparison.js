import React from "react"
import Image from "./image"

const Comparison = ({ image, description, title  }) => (
  <div className="picture-text-background py-4">
    <div className="container bg-light">
      <div className="row">
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="text-center">
            <p className="title text-uppercase">{title}</p>
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="image col-12 col-md-6 p-5">
          <Image filename={image} alt={description} />
        </div>
      </div>
    </div>
  </div>
)

export default Comparison
