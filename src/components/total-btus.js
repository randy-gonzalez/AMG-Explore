import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'
import { Carousel } from 'react-bootstrap';


const TotalBtus = ({
  AMGimage,
  AMGproduct,
  AMGbtus,
  comparisonImage,
  comparisonBrand,
  comparisonBtus,
  description

}) => (
    <div className="picture-text-background-2 py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-4 d-flex align-items-center order-2  order-lg-0">
            <div className="ml-md-5">
              <p className="title text-uppercase ml-5">Total BTU's</p>
              <div className="d-flex flex-column mb-2 ml-3">
                <div className="d-flex">
                  <div>
                    <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                  </div>
                  <dt>{AMGproduct}</dt>
                </div>
                <ds className="px-2 ml-4">{AMGbtus}</ds>
              </div>
               <div className="d-flex flex-column mb-2 ml-3">
                <ds className="px-2 ml-4">{comparisonBrand}</ds>
                <ds className="px-2 ml-4">{comparisonBtus}</ds>
              </div>
              <hr className="w-50 ml-5"></hr>
              <p className="description w-75 ml-5 ">{description}</p>

            </div>
          </div>
          <div className="image col-12 col-lg-8 p-5 order-1  order-lg-0">
             <Carousel fade={true} interval={3000} slide={true} controls={false} indicators={false} className="fade-1">
              <Carousel.Item>
                <Image filename={AMGimage} alt={AMGbtus} />
              </Carousel.Item>
              <Carousel.Item>
                <Image filename={comparisonImage} alt="title" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )

export default TotalBtus
