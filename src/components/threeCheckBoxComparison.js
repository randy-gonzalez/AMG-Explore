import React from 'react';
import checkMarkImage from '../images/check-mark.png'

const ThreeCheckBoxComparison = () => (
  <section className="container section3">
    <div className="d-flex flex-column  w-100 ">
      <p className='text-center mt-5'>THE MUSCLE GRILL SETS THE BAR</p>
      <h2 className='text-center'>The Kalamazoo doesn't hold up.</h2>
    </div>
    <div className="d-flex flex-row justify-content-around mt-5">
      <div className="  flex-column d-flex text-center">
        <div className="text-center">
          <img src={checkMarkImage} alt="" srcset="" className="check-mark" />
        </div>

        <strong className="mt-3 checkmark-text">BIGGER</strong>
        <p className="mt-3 checkmark-text">Up to 54" Grilling Surface vs 48" <span className="d-block">110,000 Total BTUs vs 100,000</span></p>
      </div>
      <div className="  flex-column d-flex text-center">
        <div className="text-center">
          <img src={checkMarkImage} alt="" srcset="" className="check-mark" />
        </div>

        <strong className="mt-3 checkmark-text">BETTER</strong>
        <p className="mt-3 checkmark-text">More versatility and interchangeable options <span className="d-block"> Durable heavy-gague #304 stainless steel</span></p>
      </div>

      <div className="  d-flex flex-column text-center">
        <div className="text-center">
          <img src={checkMarkImage} alt="" srcset="" className="check-mark" />
        </div>
        <strong className="mt-3 checkmark-text">DONE</strong>
        <p className="mt-3 checkmark-text">$7,000 Starting Price <span className='d-block'>vs $23,295</span></p>
      </div>
    </div>

  </section>
)

export default ThreeCheckBoxComparison
