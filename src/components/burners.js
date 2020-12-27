import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const Burners = ({
  image,
  AMGburnerDescription,
  comparisonBrand,
  comparisonDescription

}) => (
    <div className="picture-text-background py-4">
      <div className="container bg-light">
        <div className="row">
          <div className="image col-12 col-md-6 p-5">
            <Image filename={image} alt={AMGburnerDescription} />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="text-center">
              <p className="title text-uppercase">Burners</p>
              <div className="d-flex justify-content-center">
                <div>
                  <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                </div>
                <p>Muscle Grill</p>
              </div>
              <p className="d-block">{AMGburnerDescription}</p>
               <div className="d-flex justify-content-center">
                <p>{comparisonBrand}</p>
              </div>
              <p className="d-block">304 Stainless steel</p>
              <p className="description">{comparisonDescription}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Burners
