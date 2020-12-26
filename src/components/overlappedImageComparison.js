import React from 'react'
import section2Bbq from '../images/section-2-bbq.png';

const OverlappedImageComparison = () => (

  <section className="container section2 h-100">

    <div className="row">

      <div className="hero-container col-md-9 col-xs-12 " >
        <div className=" overlappedBox text-center d-flex justify-content-center ">

          <p className="overlapped-text">
            The Muscle Grill is redefining outdoor living for 70% less than Kalamazoo.
            </p>
        </div>
        <img src={section2Bbq} className='section2-img' />
      </div>
      <aside className="sidebar col-md-3 col-xs-12 small-title media-heading">
        <p className="sidebar-small-text ">IN COMPARISON,
        THE COMPETITION
                DISAPPEARS...</p>

        <p className="sidebarText">FLAWLESS DESIGN</p>


        <p className="sidebarText">SUPREME VERSATILITY</p>


        <p className="sidebarText">UNMATCHED VALUE</p>

      </aside>
    </div>
  </section>

)

export default OverlappedImageComparison
