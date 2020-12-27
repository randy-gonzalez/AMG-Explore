import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const Rotisserie = ({
  image,
  comparisonBrand,
  comparisonRotisserie,
  description

}) => (
    <div className="picture-text-background py-4">
      <div className="container bg-light">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="text-center">
              <p className="title text-uppercase">Rotisserie</p>
              <div className="d-flex justify-content-center">
                <p>Muscle Grill</p>
              </div>
              <p className="d-block">Optional Rotisserie Kit</p>
               <div className="d-flex justify-content-center">
                <div>
                  <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                </div>
                <p>{comparisonBrand}</p>
              </div>
              <p className="d-block">{comparisonRotisserie}</p>
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

export default Rotisserie
