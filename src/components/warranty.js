import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'
import { Carousel } from 'react-bootstrap';



const Warranty = ({
  AMGimage,
  AMGproduct,
  AMGwarranty,
  comparisonImage,
  comparisonBrand,
  comparisonWarranty,
  description

}) => (
    <div className="picture-text-background-2 py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="image col-12 col-lg-8 p-5">
             <Carousel fade={true} pause={false} interval={3000} slide={true} controls={false} indicators={false} className="fade-1">
              <Carousel.Item>
                <Image filename={AMGimage} alt={AMGproduct} />
              </Carousel.Item>
              <Carousel.Item>
                <Image filename={comparisonImage} alt={comparisonBrand} />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-lg-4 d-flex align-items-center">
            <div className="text-left">
              <p className="title text-uppercase ml-5">Warranty</p>
              <div className="container">
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex">
                    <div>
                      <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                    </div>
                    <dt>{AMGproduct}</dt>
                  </div>
                  <ds className="w-50 ml-4 px-2">{AMGwarranty}</ds>
                </div>
                <div className="d-flex flex-column mb-2 mt-4">
                  <ds className="ml-4 px-2">{comparisonBrand}</ds>
                  <ds className="ml-4 px-2 w-50">{comparisonWarranty}</ds>
                </div>
                <hr className="w-50 ml-4"></hr>
                <p className="description  ml-3 px-3">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Warranty
