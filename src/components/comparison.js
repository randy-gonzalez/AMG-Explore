import React from "react"
import Image from "./image"

const Comparison = ({ image, description, title  }) => (
  <div className="picture-text-background-2 py-4">
    <div className="container  p-5">
      <div className="row bg-light">
        <div className="col-12 col-lg-6 d-flex align-items-center">
          <div className="text-left">
            <p className="title text-uppercase">{title}</p>
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="image col-12 col-lg-6">
          <Image filename={image} alt={description} />
        </div>
      </div>
    </div>
  </div>
)

export default Comparison
