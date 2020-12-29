import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const Cabinent = ({
  image,
  comparisonBrand,
  comparisonDescription,
  description

}) => (
    <div className="picture-text-background py-4">
      <div className="container bg-light">
        <div className="row">
          <div className="image col-12 col-md-6 p-5">
            <Image filename={image} alt={description} />
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="text-center">
              <p className="title text-uppercase">Cabinent</p>
              <div className="d-flex justify-content-center">
                <p>Muscle Grill</p>
              </div>
              <p className="d-block">Optional</p>


               <div className="row">
                <div className="col-2 d-flex ">
                  <img src={checkMarkImage} alt="" srcset="" className="check-mark-small" />
                  <p>{comparisonBrand}</p>
                </div>
                <div className="col-10 text-left">

                  <dd className="">{comparisonDescription}</dd>
                </div>
              </div>






              <p className="description">{description}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Cabinent
