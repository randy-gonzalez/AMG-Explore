import React from "react"
import Image from "./image"
import checkMarkImage from '../images/check-mark.png'
import { Carousel } from 'react-bootstrap';


const Ignition = ({
  AMGimage,
  AMGproduct,
  AMGignitionDescription,
  comparisonImage,
  comparisonBrand,
  comparisonDescription,
  description

}) => (
    <div className="picture-text-background-2 py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="image col-12 col-lg-8 p-5">
             <Carousel fade={true} pause={false} interval={3000} slide={true} controls={false} indicators={false} className="fade-1">
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
              <p className="title text-uppercase ml-5">Ignition</p>
              <div className="container">
                <div className="d-flex flex-column mb-2">
                  <div className="d-flex">
                    <div>
                      <img src={checkMarkImage} alt="" srcset="" className="check-mark-small mx-2" />
                  </div>
                  <dt>{AMGproduct}</dt>
                </div>
                  <ds className="w-50 ml-4 px-2">{AMGignitionDescription}</ds>
              </div>


                <div className="d-flex flex-column mb-2">
                  <ds className="ml-4 px-2">{comparisonBrand}</ds>
                  <ds className="ml-4 w-50 px-2">{comparisonDescription}</ds>
                </div>
                <hr className="w-50 ml-4"></hr>
                <div className="container">
                  <p className="description w-75 ml-3">{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

export default Ignition
