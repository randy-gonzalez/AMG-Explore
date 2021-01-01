import React from "react"
import { Carousel } from 'react-bootstrap';
import Image from "./image";
import checkMarkImage from '../images/check-mark.png'


const Material = ({
  AMGproduct,
  AMGmaterial,
  AMGimage,
  comparisonImage,
  comparisonBrand,
  comparisonMaterial,
  description

}) => (
    <div className="picture-text-background-2 py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="image col-12 col-lg-8 p-5">
            <Carousel fade={true} interval={3000} slide={true} controls={false} indicators={false} className="fade-1">
              <Carousel.Item>
                <Image filename={AMGimage} alt="title" />
              </Carousel.Item>
              <Carousel.Item>
                <Image filename={comparisonImage} alt="title" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 col-lg-4 d-flex align-items-center">
            <div className="text-left">
              <p className="title text-uppercase ml-5">Material</p>
              <div className="container">
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex">
                    <div>
                      <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                    </div>
                    <dt >{AMGproduct}</dt>
                  </div>
                  <ds className="ml-4 px-2">{AMGmaterial}</ds>
                </div>
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex">
                    <div>
                      <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                    </div>
                    <dt>{comparisonBrand}</dt>
                  </div>
                  <ds className="ml-4 px-2">{comparisonMaterial}</ds>
                </div>
                <hr className="w-50 ml-5 font-weight-bold"></hr>
                <p className="description ml-4 w-75 px-2">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Material
