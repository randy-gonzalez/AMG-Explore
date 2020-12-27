import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'


const TotalBtus = ({
  image,
  AMGbtus,
  comparisonBrand,
  comparisonBtus,
  description

}) => (
    <div className="picture-text-background py-4">
      <div className="container bg-light">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="text-center">
              <p className="title text-uppercase">Total BTU's</p>
              <div className="d-flex justify-content-center">
                <div>
                  <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                </div>
                <p>Muscle Grill</p>
              </div>
              <p className="d-block">{AMGbtus}</p>
               <div className="d-flex justify-content-center">
                <p>{comparisonBrand}</p>
              </div>
              <p className="d-block">{comparisonBtus}</p>
              <p className="description">{description}</p>

            </div>
          </div>
          <div className="image col-12 col-md-6 p-5">
            <Image filename={image} alt={AMGbtus} />
          </div>
        </div>
      </div>
    </div>
  )

export default TotalBtus
