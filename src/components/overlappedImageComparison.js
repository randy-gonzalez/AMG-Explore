import React from 'react'

const OverlappedImageComparison = () => (

  <section className="container section2 h-100">

    <div className="row">

      <div className="hero-container col-9 " >
        <div className=" overlappedBox text-center d-flex justify-content-center ">

          <p className="overlapped-text">
            The American Muscle Grill is redefining outdoor living for 70% less than Kalamazoo.
            </p>
        </div>
        <img className="section2-img" src="src/images/section-2-bbq.png" />
      </div>
      <aside className="sidebar col-3 media-heading">
        <p className="sidebar-text">IN COMPARISON,
        THE COMPETITION
                DISAPPEARS...</p>

        <h2  >FLAWLESS DESIGN</h2>


        <h2 >SUPREME VERSATILITY</h2>


        <h2 >UNMATCHED VALUE</h2>

      </aside>
    </div>
  </section>

)

export default OverlappedImageComparison
